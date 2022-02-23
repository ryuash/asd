// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.auth.v1beta1
// file: cosmos/auth/v1beta1/query.proto

import * as cosmos_auth_v1beta1_query_pb from "../../../cosmos/auth/v1beta1/query_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  accounts: grpc.MethodDefinition<cosmos_auth_v1beta1_query_pb.QueryAccountsRequest, cosmos_auth_v1beta1_query_pb.QueryAccountsResponse>;
  account: grpc.MethodDefinition<cosmos_auth_v1beta1_query_pb.QueryAccountRequest, cosmos_auth_v1beta1_query_pb.QueryAccountResponse>;
  params: grpc.MethodDefinition<cosmos_auth_v1beta1_query_pb.QueryParamsRequest, cosmos_auth_v1beta1_query_pb.QueryParamsResponse>;
  moduleAccounts: grpc.MethodDefinition<cosmos_auth_v1beta1_query_pb.QueryModuleAccountsRequest, cosmos_auth_v1beta1_query_pb.QueryModuleAccountsResponse>;
  bech32Prefix: grpc.MethodDefinition<cosmos_auth_v1beta1_query_pb.Bech32PrefixRequest, cosmos_auth_v1beta1_query_pb.Bech32PrefixResponse>;
  addressBytesToString: grpc.MethodDefinition<cosmos_auth_v1beta1_query_pb.AddressBytesToStringRequest, cosmos_auth_v1beta1_query_pb.AddressBytesToStringResponse>;
  addressStringToBytes: grpc.MethodDefinition<cosmos_auth_v1beta1_query_pb.AddressStringToBytesRequest, cosmos_auth_v1beta1_query_pb.AddressStringToBytesResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
  accounts: grpc.handleUnaryCall<cosmos_auth_v1beta1_query_pb.QueryAccountsRequest, cosmos_auth_v1beta1_query_pb.QueryAccountsResponse>;
  account: grpc.handleUnaryCall<cosmos_auth_v1beta1_query_pb.QueryAccountRequest, cosmos_auth_v1beta1_query_pb.QueryAccountResponse>;
  params: grpc.handleUnaryCall<cosmos_auth_v1beta1_query_pb.QueryParamsRequest, cosmos_auth_v1beta1_query_pb.QueryParamsResponse>;
  moduleAccounts: grpc.handleUnaryCall<cosmos_auth_v1beta1_query_pb.QueryModuleAccountsRequest, cosmos_auth_v1beta1_query_pb.QueryModuleAccountsResponse>;
  bech32Prefix: grpc.handleUnaryCall<cosmos_auth_v1beta1_query_pb.Bech32PrefixRequest, cosmos_auth_v1beta1_query_pb.Bech32PrefixResponse>;
  addressBytesToString: grpc.handleUnaryCall<cosmos_auth_v1beta1_query_pb.AddressBytesToStringRequest, cosmos_auth_v1beta1_query_pb.AddressBytesToStringResponse>;
  addressStringToBytes: grpc.handleUnaryCall<cosmos_auth_v1beta1_query_pb.AddressStringToBytesRequest, cosmos_auth_v1beta1_query_pb.AddressStringToBytesResponse>;
}

export class QueryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  accounts(argument: cosmos_auth_v1beta1_query_pb.QueryAccountsRequest, callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.QueryAccountsResponse>): grpc.ClientUnaryCall;
  accounts(argument: cosmos_auth_v1beta1_query_pb.QueryAccountsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.QueryAccountsResponse>): grpc.ClientUnaryCall;
  accounts(argument: cosmos_auth_v1beta1_query_pb.QueryAccountsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.QueryAccountsResponse>): grpc.ClientUnaryCall;
  account(argument: cosmos_auth_v1beta1_query_pb.QueryAccountRequest, callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.QueryAccountResponse>): grpc.ClientUnaryCall;
  account(argument: cosmos_auth_v1beta1_query_pb.QueryAccountRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.QueryAccountResponse>): grpc.ClientUnaryCall;
  account(argument: cosmos_auth_v1beta1_query_pb.QueryAccountRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.QueryAccountResponse>): grpc.ClientUnaryCall;
  params(argument: cosmos_auth_v1beta1_query_pb.QueryParamsRequest, callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.QueryParamsResponse>): grpc.ClientUnaryCall;
  params(argument: cosmos_auth_v1beta1_query_pb.QueryParamsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.QueryParamsResponse>): grpc.ClientUnaryCall;
  params(argument: cosmos_auth_v1beta1_query_pb.QueryParamsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.QueryParamsResponse>): grpc.ClientUnaryCall;
  moduleAccounts(argument: cosmos_auth_v1beta1_query_pb.QueryModuleAccountsRequest, callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.QueryModuleAccountsResponse>): grpc.ClientUnaryCall;
  moduleAccounts(argument: cosmos_auth_v1beta1_query_pb.QueryModuleAccountsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.QueryModuleAccountsResponse>): grpc.ClientUnaryCall;
  moduleAccounts(argument: cosmos_auth_v1beta1_query_pb.QueryModuleAccountsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.QueryModuleAccountsResponse>): grpc.ClientUnaryCall;
  bech32Prefix(argument: cosmos_auth_v1beta1_query_pb.Bech32PrefixRequest, callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.Bech32PrefixResponse>): grpc.ClientUnaryCall;
  bech32Prefix(argument: cosmos_auth_v1beta1_query_pb.Bech32PrefixRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.Bech32PrefixResponse>): grpc.ClientUnaryCall;
  bech32Prefix(argument: cosmos_auth_v1beta1_query_pb.Bech32PrefixRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.Bech32PrefixResponse>): grpc.ClientUnaryCall;
  addressBytesToString(argument: cosmos_auth_v1beta1_query_pb.AddressBytesToStringRequest, callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.AddressBytesToStringResponse>): grpc.ClientUnaryCall;
  addressBytesToString(argument: cosmos_auth_v1beta1_query_pb.AddressBytesToStringRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.AddressBytesToStringResponse>): grpc.ClientUnaryCall;
  addressBytesToString(argument: cosmos_auth_v1beta1_query_pb.AddressBytesToStringRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.AddressBytesToStringResponse>): grpc.ClientUnaryCall;
  addressStringToBytes(argument: cosmos_auth_v1beta1_query_pb.AddressStringToBytesRequest, callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.AddressStringToBytesResponse>): grpc.ClientUnaryCall;
  addressStringToBytes(argument: cosmos_auth_v1beta1_query_pb.AddressStringToBytesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.AddressStringToBytesResponse>): grpc.ClientUnaryCall;
  addressStringToBytes(argument: cosmos_auth_v1beta1_query_pb.AddressStringToBytesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_auth_v1beta1_query_pb.AddressStringToBytesResponse>): grpc.ClientUnaryCall;
}
