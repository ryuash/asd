// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.app.v1alpha1
// file: cosmos/app/v1alpha1/query.proto

import * as cosmos_app_v1alpha1_query_pb from "../../../cosmos/app/v1alpha1/query_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  config: grpc.MethodDefinition<cosmos_app_v1alpha1_query_pb.QueryConfigRequest, cosmos_app_v1alpha1_query_pb.QueryConfigResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
  config: grpc.handleUnaryCall<cosmos_app_v1alpha1_query_pb.QueryConfigRequest, cosmos_app_v1alpha1_query_pb.QueryConfigResponse>;
}

export class QueryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  config(argument: cosmos_app_v1alpha1_query_pb.QueryConfigRequest, callback: grpc.requestCallback<cosmos_app_v1alpha1_query_pb.QueryConfigResponse>): grpc.ClientUnaryCall;
  config(argument: cosmos_app_v1alpha1_query_pb.QueryConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_app_v1alpha1_query_pb.QueryConfigResponse>): grpc.ClientUnaryCall;
  config(argument: cosmos_app_v1alpha1_query_pb.QueryConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_app_v1alpha1_query_pb.QueryConfigResponse>): grpc.ClientUnaryCall;
}
