// GENERATED CODE -- DO NOT EDIT!

// package: google.longrunning
// file: google/longrunning/operations.proto

import * as google_longrunning_operations_pb from "../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "@grpc/grpc-js";

interface IOperationsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listOperations: grpc.MethodDefinition<google_longrunning_operations_pb.ListOperationsRequest, google_longrunning_operations_pb.ListOperationsResponse>;
  getOperation: grpc.MethodDefinition<google_longrunning_operations_pb.GetOperationRequest, google_longrunning_operations_pb.Operation>;
  deleteOperation: grpc.MethodDefinition<google_longrunning_operations_pb.DeleteOperationRequest, google_protobuf_empty_pb.Empty>;
  cancelOperation: grpc.MethodDefinition<google_longrunning_operations_pb.CancelOperationRequest, google_protobuf_empty_pb.Empty>;
  waitOperation: grpc.MethodDefinition<google_longrunning_operations_pb.WaitOperationRequest, google_longrunning_operations_pb.Operation>;
}

export const OperationsService: IOperationsService;

export interface IOperationsServer extends grpc.UntypedServiceImplementation {
  listOperations: grpc.handleUnaryCall<google_longrunning_operations_pb.ListOperationsRequest, google_longrunning_operations_pb.ListOperationsResponse>;
  getOperation: grpc.handleUnaryCall<google_longrunning_operations_pb.GetOperationRequest, google_longrunning_operations_pb.Operation>;
  deleteOperation: grpc.handleUnaryCall<google_longrunning_operations_pb.DeleteOperationRequest, google_protobuf_empty_pb.Empty>;
  cancelOperation: grpc.handleUnaryCall<google_longrunning_operations_pb.CancelOperationRequest, google_protobuf_empty_pb.Empty>;
  waitOperation: grpc.handleUnaryCall<google_longrunning_operations_pb.WaitOperationRequest, google_longrunning_operations_pb.Operation>;
}

export class OperationsClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listOperations(argument: google_longrunning_operations_pb.ListOperationsRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.ListOperationsResponse>): grpc.ClientUnaryCall;
  listOperations(argument: google_longrunning_operations_pb.ListOperationsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.ListOperationsResponse>): grpc.ClientUnaryCall;
  listOperations(argument: google_longrunning_operations_pb.ListOperationsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.ListOperationsResponse>): grpc.ClientUnaryCall;
  getOperation(argument: google_longrunning_operations_pb.GetOperationRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  getOperation(argument: google_longrunning_operations_pb.GetOperationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  getOperation(argument: google_longrunning_operations_pb.GetOperationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteOperation(argument: google_longrunning_operations_pb.DeleteOperationRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteOperation(argument: google_longrunning_operations_pb.DeleteOperationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteOperation(argument: google_longrunning_operations_pb.DeleteOperationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  cancelOperation(argument: google_longrunning_operations_pb.CancelOperationRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  cancelOperation(argument: google_longrunning_operations_pb.CancelOperationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  cancelOperation(argument: google_longrunning_operations_pb.CancelOperationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  waitOperation(argument: google_longrunning_operations_pb.WaitOperationRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  waitOperation(argument: google_longrunning_operations_pb.WaitOperationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  waitOperation(argument: google_longrunning_operations_pb.WaitOperationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
}
