# Angular + Bazel + gRPC

This is a fully functional example that demonstrates the usage of bazel for building an Angular web application and a backend service which communicate via gRPC.

## How to run the example?

Run the web application:

```bash
bazel run //applications/demo:serve
```

Run the backend server:

```bash
bazel run //server
```

Build the envoy proxy docker image:

```bash
docker build -t envoy proxy
```

Run the envoy proxy:

```bash
docker run -p 50600:50600 envoy
```

## Credits

* [angular-ngc template](https://github.com/aspect-build/bazel-examples/tree/main/angular-ngc)
* [grpc-web envoy setup](https://github.com/grpc/grpc-web/tree/master/net/grpc/gateway/examples/echo)
* [grpc examples](https://github.com/grpc/grpc/tree/master/examples/python)