# Bazel + Angular + gRPC

Provides the rule `ng_proto_compile` for generating Angular compatible gRPC clients.

Run `bazel build //api:ng_hello_world_proto`

This example is based on:
* [ngx-grpc - Angular gRPC framework (protoc plugin)](https://github.com/smnbbrv/ngx-grpc)
* [rules_proto_grpc - Bazel build rules for Protobuf and gRPC](https://github.com/rules-proto-grpc/rules_proto_grpc)

