eventsapi
=========

EventsAPI is a simple API which Dolt and the Dolt workbench use to report usage metrics to DoltHub.

Its schema is stored in this repository.

This repository vends generated .go and .js/.d.ts source files for the .proto files.

To update them, use bazel:

```sh
$ bazel run :update
```

and create a new commit and push it.
