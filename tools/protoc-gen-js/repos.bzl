# XXX: Copy from dolthub/ld//bazel/protoc-gen-js if you need to update.

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

def protoc_gen_js_repos():
    http_archive(
        name = "protoc_gen_js_release_linux_aarch_64",
        urls = [
            "https://github.com/protocolbuffers/protobuf-javascript/releases/download/v3.21.4/protobuf-javascript-3.21.4-linux-aarch_64.tar.gz",
        ],
        sha256 = "86194b1c6baee994bb06d162887b9edace6b32a8ed971eac07fdf5d2470c6937",
        build_file_content = """
filegroup(
    name = "protoc-gen-js",
    srcs = [
        "bin/protoc-gen-js",
    ],
    visibility = ["//visibility:public"],
)
""",
    )
    http_archive(
        name = "protoc_gen_js_release_linux_x86_64",
        urls = [
            "https://github.com/protocolbuffers/protobuf-javascript/releases/download/v3.21.4/protobuf-javascript-3.21.4-linux-x86_64.tar.gz",
        ],
        sha256 = "c57ba4130471c642462fcf98c844a3c933f6c4708b9fddc859900fd2a2e72a45",
        build_file_content = """
filegroup(
    name = "protoc-gen-js",
    srcs = [
        "bin/protoc-gen-js",
    ],
    visibility = ["//visibility:public"],
)
""",
    )
    http_archive(
        name = "protoc_gen_js_release_osx_aarch_64",
        urls = [
            "https://github.com/protocolbuffers/protobuf-javascript/releases/download/v3.21.4/protobuf-javascript-3.21.4-osx-aarch_64.tar.gz",
        ],
        sha256 = "308b3713bc6f2147c8622d0dbb82b2ffcb2e25860c89d763ea00c2d768589989",
        build_file_content = """
filegroup(
    name = "protoc-gen-js",
    srcs = [
        "bin/protoc-gen-js",
    ],
    visibility = ["//visibility:public"],
)
""",
    )
    http_archive(
        name = "protoc_gen_js_release_osx_x86_64",
        urls = [
            "https://github.com/protocolbuffers/protobuf-javascript/releases/download/v3.21.4/protobuf-javascript-3.21.4-osx-x86_64.tar.gz",
        ],
        sha256 = "9bfa23630fb2fd99c0328d247f91a454b4d4a2276dd4953af0a052430554510d",
        build_file_content = """
filegroup(
    name = "protoc-gen-js",
    srcs = [
        "bin/protoc-gen-js",
    ],
    visibility = ["//visibility:public"],
)
""",
    )

def _protoc_gen_js_repos_extension_impl(_ctx):
    protoc_gen_js_repos()

protoc_gen_js_repos_extension = module_extension(
    implementation = _protoc_gen_js_repos_extension_impl,
)
