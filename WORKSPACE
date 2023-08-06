load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")

http_archive(
  name = "aspect_rules_js",
  sha256 = "dcd1567d4a93a8634ec0b888b371a60b93c18d980f77dace02eb176531a71fcf",
  strip_prefix = "rules_js-1.26.0",
  url = "https://github.com/aspect-build/rules_js/releases/download/v1.26.0/rules_js-v1.26.0.tar.gz",
)

load("@aspect_rules_js//js:repositories.bzl", "rules_js_dependencies")
rules_js_dependencies()

load("@rules_nodejs//nodejs:repositories.bzl", "DEFAULT_NODE_VERSION", "nodejs_register_toolchains")

nodejs_register_toolchains(
  name = "nodejs",
  node_version = DEFAULT_NODE_VERSION,
)

load("@aspect_rules_js//npm:repositories.bzl", "npm_translate_lock")

npm_translate_lock(
  name = "npm",
  pnpm_lock = "//:pnpm-lock.yaml",
)

load("@npm//:repositories.bzl", "npm_repositories")
npm_repositories()

# TODO Replace this by an official release when the fix of path conversion
#      is available upstream: https://github.com/rules-proto-grpc/rules_proto_grpc/pull/274
git_repository(
  name = "rules_proto_grpc",
  remote = "https://github.com/dprogm/rules_proto_grpc.git",
  commit = "4f282ad40c2c7ae78c071ba21deaddb8312dac45",
  shallow_since = "1691344080 +0200",
)

load("@rules_proto_grpc//:repositories.bzl", "rules_proto_grpc_repos", "rules_proto_grpc_toolchains")

rules_proto_grpc_toolchains()

rules_proto_grpc_repos()

load("@rules_proto//proto:repositories.bzl", "rules_proto_dependencies", "rules_proto_toolchains")

rules_proto_dependencies()

rules_proto_toolchains()