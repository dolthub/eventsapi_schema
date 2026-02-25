load("@bazel_skylib//lib:paths.bzl", "paths")
load("@protobuf//bazel/common:proto_info.bzl", "ProtoInfo")

def _declare_ts_proto_outs(ctx, protoinfo):
    outs = []
    proto_paths = []
    out_dir = ""
    for src in protoinfo.direct_sources:
        proto_path = paths.relativize(src.path, protoinfo.proto_source_root)
        if not ctx.label.package.endswith(paths.dirname(proto_path)):
            fail("\n".join([
                "typescript_proto_library can only generate files into a package path that matches the path of the .proto file",
                "expected package path {} to end with proto path directory {}".format(ctx.label.package, paths.dirname(proto_path)),
            ]))
        proto_paths.append(proto_path)
        base = src.basename[:-len(".proto")]
        src_outs = [
            ctx.actions.declare_file("{}_pb.js".format(base)),
            ctx.actions.declare_file("{}_pb.d.ts".format(base)),
            ctx.actions.declare_file("{}_pb_service.js".format(base)),
            ctx.actions.declare_file("{}_pb_service.d.ts".format(base)),
        ]
        outs.extend(src_outs)

        # XXX: Relies on len(".proto") == len("_pb.js")
        src_out_dir = src_outs[0].path[:-len(proto_path)]
        if out_dir == "":
            out_dir = src_out_dir
        elif not out_dir == src_out_dir:
            fail("\n".join([
                "sources for typescript_proto_library computed two different output directory bases:",
                "existing: {}, new: {} for file: {}".format(out_dir, src_out_dir, proto_path),
            ]))
    return proto_paths, out_dir, outs

def as_path(p, is_windows):
    if is_windows:
        return p.replace("/", "\\")
    else:
        return p

def _ts_proto_library_impl(ctx):
    protoinfo = ctx.attr.proto[ProtoInfo]

    proto_paths, out_dir, outs = _declare_ts_proto_outs(ctx, protoinfo)

    descriptors = depset(direct = [protoinfo.direct_descriptor_set], transitive = [protoinfo.transitive_descriptor_sets])
    inputs = depset(direct = protoinfo.direct_sources, transitive = [descriptors])

    is_windows = ctx.attr._exec_is_windows[_OsInfo].is_windows

    args = ctx.actions.args()
    args.add("--plugin=protoc-gen-ts={}".format(as_path(ctx.executable._ts_protoc_gen.path, is_windows)))
    args.add("--plugin=protoc-gen-js={}".format(as_path(ctx.executable._protoc_gen_js.path, is_windows)))
    args.add("--ts_out=service=grpc-web:{}".format(out_dir))
    args.add("--js_out=import_style=commonjs,binary:{}".format(out_dir))
    args.add_joined("--descriptor_set_in", descriptors, join_with = ctx.configuration.host_path_separator)
    args.add_all(proto_paths)

    ctx.actions.run(
        executable = ctx.toolchains["@protobuf//bazel/private:proto_toolchain_type"].proto.proto_compiler,
        inputs = inputs,
        outputs = outs,
        mnemonic = "ProtocGenTs",
        arguments = [args],
        env = {
            "BAZEL_BINDIR": ctx.bin_dir.path,
        },
        tools = [ctx.toolchains["@protobuf//bazel/private:proto_toolchain_type"].proto.proto_compiler, ctx.executable._ts_protoc_gen, ctx.executable._protoc_gen_js],
        toolchain = "@protobuf//bazel/private:proto_toolchain_type",
    )

    return [
        DefaultInfo(files = depset(outs)),
    ]

# Generates _pb.js, _pb_service.js, _pb.d.ts and _pb_service.d.ts files for a
# supplied `proto` proto_library dependency. Requires
# @com_google_protobuf//:protoc and //:node_modules/.bin/ts-protoc-gen
# exist. Generates .js files with `commonjs,binary`. Generates .ts files with
# `service=grpc-web`.

typescript_proto_library = rule(
    implementation = _ts_proto_library_impl,
    attrs = {
        "proto": attr.label(
            providers = [[ProtoInfo]],
            mandatory = True,
        ),
        "_ts_protoc_gen": attr.label(
            allow_files = True,
            executable = True,
            cfg = "exec",
            default = Label("//:protoc-gen-ts"),
        ),
        "_exec_is_windows": attr.label(
            default = ":is_windows",
            cfg = "exec",
        ),
        "_protoc_gen_js": attr.label(
            allow_files = True,
            executable = True,
            cfg = "exec",
            default = Label("//tools/protoc-gen-js"),
        ),
    },
    toolchains = [
        "@protobuf//bazel/private:proto_toolchain_type",
    ],
)

_OsInfo = provider(
    doc = "Information about the target platform operating system.",
    fields = ["is_windows"],
)

is_windows = rule(
    implementation = lambda ctx: _OsInfo(
        is_windows = ctx.target_platform_has_constraint(ctx.attr._windows_constraint[platform_common.ConstraintValueInfo]),
    ),
    attrs = {
        "_windows_constraint": attr.label(default = "@platforms//os:windows"),
    },
)
