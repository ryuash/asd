// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.authz.v1beta1
// file: cosmos/authz/v1beta1/query.proto

import * as cosmos_authz_v1beta1_query_pb from "../../../cosmos/authz/v1beta1/query_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  grants: grpc.MethodDefinition<cosmos_authz_v1beta1_query_pb.QueryGrantsRequest, cosmos_authz_v1beta1_query_pb.QueryGrantsResponse>;
  granterGrants: grpc.MethodDefinition<cosmos_authz_v1beta1_query_pb.QueryGranterGrantsRequest, cosmos_authz_v1beta1_query_pb.QueryGranterGrantsResponse>;
  granteeGrants: grpc.MethodDefinition<cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsRequest, cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
  grants: grpc.handleUnaryCall<cosmos_authz_v1beta1_query_pb.QueryGrantsRequest, cosmos_authz_v1beta1_query_pb.QueryGrantsResponse>;
  granterGrants: grpc.handleUnaryCall<cosmos_authz_v1beta1_query_pb.QueryGranterGrantsRequest, cosmos_authz_v1beta1_query_pb.QueryGranterGrantsResponse>;
  granteeGrants: grpc.handleUnaryCall<cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsRequest, cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsResponse>;
}

export class QueryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  grants(argument: cosmos_authz_v1beta1_query_pb.QueryGrantsRequest, callback: grpc.requestCallback<cosmos_authz_v1beta1_query_pb.QueryGrantsResponse>): grpc.ClientUnaryCall;
  grants(argument: cosmos_authz_v1beta1_query_pb.QueryGrantsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_authz_v1beta1_query_pb.QueryGrantsResponse>): grpc.ClientUnaryCall;
  grants(argument: cosmos_authz_v1beta1_query_pb.QueryGrantsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_authz_v1beta1_query_pb.QueryGrantsResponse>): grpc.ClientUnaryCall;
  granterGrants(argument: cosmos_authz_v1beta1_query_pb.QueryGranterGrantsRequest, callback: grpc.requestCallback<cosmos_authz_v1beta1_query_pb.QueryGranterGrantsResponse>): grpc.ClientUnaryCall;
  granterGrants(argument: cosmos_authz_v1beta1_query_pb.QueryGranterGrantsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_authz_v1beta1_query_pb.QueryGranterGrantsResponse>): grpc.ClientUnaryCall;
  granterGrants(argument: cosmos_authz_v1beta1_query_pb.QueryGranterGrantsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_authz_v1beta1_query_pb.QueryGranterGrantsResponse>): grpc.ClientUnaryCall;
  granteeGrants(argument: cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsRequest, callback: grpc.requestCallback<cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsResponse>): grpc.ClientUnaryCall;
  granteeGrants(argument: cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsResponse>): grpc.ClientUnaryCall;
  granteeGrants(argument: cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_authz_v1beta1_query_pb.QueryGranteeGrantsResponse>): grpc.ClientUnaryCall;
}
