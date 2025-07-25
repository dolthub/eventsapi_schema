eventsapi
=========

EventsAPI is a simple API which Dolt uses to report usage metrics to DoltHub.

Its schema is stored in this repository.

This repository vends generated .go source files for the .proto files.

To update them, use bazel:

```sh
$ bazel run :update
```

and create a new commit and push it.
