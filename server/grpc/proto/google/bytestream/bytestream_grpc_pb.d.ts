// GENERATED CODE -- DO NOT EDIT!

// package: google.bytestream
// file: google/bytestream/bytestream.proto

import * as google_bytestream_bytestream_pb from "../../google/bytestream/bytestream_pb";
import * as grpc from "@grpc/grpc-js";

interface IByteStreamService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  read: grpc.MethodDefinition<google_bytestream_bytestream_pb.ReadRequest, google_bytestream_bytestream_pb.ReadResponse>;
  write: grpc.MethodDefinition<google_bytestream_bytestream_pb.WriteRequest, google_bytestream_bytestream_pb.WriteResponse>;
  queryWriteStatus: grpc.MethodDefinition<google_bytestream_bytestream_pb.QueryWriteStatusRequest, google_bytestream_bytestream_pb.QueryWriteStatusResponse>;
}

export const ByteStreamService: IByteStreamService;

export interface IByteStreamServer extends grpc.UntypedServiceImplementation {
  read: grpc.handleServerStreamingCall<google_bytestream_bytestream_pb.ReadRequest, google_bytestream_bytestream_pb.ReadResponse>;
  write: grpc.handleClientStreamingCall<google_bytestream_bytestream_pb.WriteRequest, google_bytestream_bytestream_pb.WriteResponse>;
  queryWriteStatus: grpc.handleUnaryCall<google_bytestream_bytestream_pb.QueryWriteStatusRequest, google_bytestream_bytestream_pb.QueryWriteStatusResponse>;
}

export class ByteStreamClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  read(argument: google_bytestream_bytestream_pb.ReadRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<google_bytestream_bytestream_pb.ReadResponse>;
  read(argument: google_bytestream_bytestream_pb.ReadRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<google_bytestream_bytestream_pb.ReadResponse>;
  write(callback: grpc.requestCallback<google_bytestream_bytestream_pb.WriteResponse>): grpc.ClientWritableStream<google_bytestream_bytestream_pb.WriteRequest>;
  write(metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bytestream_bytestream_pb.WriteResponse>): grpc.ClientWritableStream<google_bytestream_bytestream_pb.WriteRequest>;
  write(metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bytestream_bytestream_pb.WriteResponse>): grpc.ClientWritableStream<google_bytestream_bytestream_pb.WriteRequest>;
  queryWriteStatus(argument: google_bytestream_bytestream_pb.QueryWriteStatusRequest, callback: grpc.requestCallback<google_bytestream_bytestream_pb.QueryWriteStatusResponse>): grpc.ClientUnaryCall;
  queryWriteStatus(argument: google_bytestream_bytestream_pb.QueryWriteStatusRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_bytestream_bytestream_pb.QueryWriteStatusResponse>): grpc.ClientUnaryCall;
  queryWriteStatus(argument: google_bytestream_bytestream_pb.QueryWriteStatusRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_bytestream_bytestream_pb.QueryWriteStatusResponse>): grpc.ClientUnaryCall;
}
