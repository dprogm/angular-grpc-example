load("@rules_proto//proto:defs.bzl", "ProtoInfo")
load(
  "@rules_proto_grpc//:defs.bzl",
  "ProtoPluginInfo",
  "proto_compile_attrs",
  "proto_compile_impl",
)

ng_proto_compile = rule(
  implementation = proto_compile_impl,
  attrs = dict(
    proto_compile_attrs,
    _plugins = attr.label_list(
      providers = [ProtoPluginInfo],
      default = [
          Label("//tools:protoc_gen_ng_plugin"),
      ],
    ),
  ),
  toolchains = [str(Label("@rules_proto_grpc//protobuf:toolchain_type"))],
)