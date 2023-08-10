import asyncio
import grpc
from api import Hello_world_pb2
from api import Hello_world_pb2_grpc

class HelloWorldServicer(Hello_world_pb2_grpc.HelloWorldServicer):

  async def Greet(elf, request: Hello_world_pb2.HelloRequest, context: grpc.aio.ServicerContext) -> Hello_world_pb2.HelloReply:
    return Hello_world_pb2.HelloReply(message='Hello, %s!' % request.name)

async def serve() -> None:
  server = grpc.aio.server()
  Hello_world_pb2_grpc.add_HelloWorldServicer_to_server(HelloWorldServicer(), server)
  server.add_insecure_port('[::]:9090')
  await server.start()
  await server.wait_for_termination()

if __name__ == '__main__':
  asyncio.run(serve())