// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.nft.v1beta1
// file: cosmos/nft/v1beta1/query.proto

import * as cosmos_nft_v1beta1_query_pb from "../../../cosmos/nft/v1beta1/query_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  balance: grpc.MethodDefinition<cosmos_nft_v1beta1_query_pb.QueryBalanceRequest, cosmos_nft_v1beta1_query_pb.QueryBalanceResponse>;
  owner: grpc.MethodDefinition<cosmos_nft_v1beta1_query_pb.QueryOwnerRequest, cosmos_nft_v1beta1_query_pb.QueryOwnerResponse>;
  supply: grpc.MethodDefinition<cosmos_nft_v1beta1_query_pb.QuerySupplyRequest, cosmos_nft_v1beta1_query_pb.QuerySupplyResponse>;
  nFTs: grpc.MethodDefinition<cosmos_nft_v1beta1_query_pb.QueryNFTsRequest, cosmos_nft_v1beta1_query_pb.QueryNFTsResponse>;
  nFT: grpc.MethodDefinition<cosmos_nft_v1beta1_query_pb.QueryNFTRequest, cosmos_nft_v1beta1_query_pb.QueryNFTResponse>;
  class: grpc.MethodDefinition<cosmos_nft_v1beta1_query_pb.QueryClassRequest, cosmos_nft_v1beta1_query_pb.QueryClassResponse>;
  classes: grpc.MethodDefinition<cosmos_nft_v1beta1_query_pb.QueryClassesRequest, cosmos_nft_v1beta1_query_pb.QueryClassesResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
  balance: grpc.handleUnaryCall<cosmos_nft_v1beta1_query_pb.QueryBalanceRequest, cosmos_nft_v1beta1_query_pb.QueryBalanceResponse>;
  owner: grpc.handleUnaryCall<cosmos_nft_v1beta1_query_pb.QueryOwnerRequest, cosmos_nft_v1beta1_query_pb.QueryOwnerResponse>;
  supply: grpc.handleUnaryCall<cosmos_nft_v1beta1_query_pb.QuerySupplyRequest, cosmos_nft_v1beta1_query_pb.QuerySupplyResponse>;
  nFTs: grpc.handleUnaryCall<cosmos_nft_v1beta1_query_pb.QueryNFTsRequest, cosmos_nft_v1beta1_query_pb.QueryNFTsResponse>;
  nFT: grpc.handleUnaryCall<cosmos_nft_v1beta1_query_pb.QueryNFTRequest, cosmos_nft_v1beta1_query_pb.QueryNFTResponse>;
  class: grpc.handleUnaryCall<cosmos_nft_v1beta1_query_pb.QueryClassRequest, cosmos_nft_v1beta1_query_pb.QueryClassResponse>;
  classes: grpc.handleUnaryCall<cosmos_nft_v1beta1_query_pb.QueryClassesRequest, cosmos_nft_v1beta1_query_pb.QueryClassesResponse>;
}

export class QueryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  balance(argument: cosmos_nft_v1beta1_query_pb.QueryBalanceRequest, callback: grpc.requestCallback<cosmos_nft_v1beta1_query_pb.QueryBalanceResponse>): grpc.ClientUnaryCall;
  balance(argument: cosmos_nft_v1beta1_query_pb.QueryBalanceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_nft_v1beta1_query_pb.QueryBalanceResponse>): grpc.ClientUnaryCall;
  balance(argument: cosmos_nft_v1beta1_query_pb.QueryBalanceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_nft_v1beta1_query_pb.QueryBalanceResponse>): grpc.ClientUnaryCall;
  owner(argument: cosmos_nft_v1beta1_query_pb.QueryOwnerRequest, callback: grpc.requestCallback<cosmos_nft_v1beta1_query_pb.QueryOwnerResponse>): grpc.ClientUnaryCall;
  owner(argument: cosmos_nft_v1beta1_query_pb.QueryOwnerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_nft_v1beta1_query_pb.QueryOwnerResponse>): grpc.ClientUnaryCall;
  owner(argument: cosmos_nft_v1beta1_query_pb.QueryOwnerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_nft_v1beta1_query_pb.QueryOwnerResponse>): grpc.ClientUnaryCall;
  supply(argument: cosmos_nft_v1beta1_query_pb.QuerySupplyRequest, callback: grpc.requestCallback<cosmos_nft_v1beta1_query_pb.QuerySupplyResponse>): grpc.ClientUnaryCall;
  supply(argument: cosmos_nft_v1beta1_query_pb.QuerySupplyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_nft_v1beta1_query_pb.QuerySupplyResponse>): grpc.ClientUnaryCall;
  supply(argument: cosmos_nft_v1beta1_query_pb.QuerySupplyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_nft_v1beta1_query_pb.QuerySupplyResponse>): grpc.ClientUnaryCall;
  nFTs(argument: cosmos_nft_v1beta1_query_pb.QueryNFTsRequest, callback: grpc.requestCallback<cosmos_nft_v1beta1_query_pb.QueryNFTsResponse>): grpc.ClientUnaryCall;
  nFTs(argument: cosmos_nft_v1beta1_query_pb.QueryNFTsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_nft_v1beta1_query_pb.QueryNFTsResponse>): grpc.ClientUnaryCall;
  nFTs(argument: cosmos_nft_v1beta1_query_pb.QueryNFTsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_nft_v1beta1_query_pb.QueryNFTsResponse>): grpc.ClientUnaryCall;
  nFT(argument: cosmos_nft_v1beta1_query_pb.QueryNFTRequest, callback: grpc.requestCallback<cosmos_nft_v1beta1_query_pb.QueryNFTResponse>): grpc.ClientUnaryCall;
  nFT(argument: cosmos_nft_v1beta1_query_pb.QueryNFTRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_nft_v1beta1_query_pb.QueryNFTResponse>): grpc.ClientUnaryCall;
  nFT(argument: cosmos_nft_v1beta1_query_pb.QueryNFTRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_nft_v1beta1_query_pb.QueryNFTResponse>): grpc.ClientUnaryCall;
  class(argument: cosmos_nft_v1beta1_query_pb.QueryClassRequest, callback: grpc.requestCallback<cosmos_nft_v1beta1_query_pb.QueryClassResponse>): grpc.ClientUnaryCall;
  class(argument: cosmos_nft_v1beta1_query_pb.QueryClassRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_nft_v1beta1_query_pb.QueryClassResponse>): grpc.ClientUnaryCall;
  class(argument: cosmos_nft_v1beta1_query_pb.QueryClassRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_nft_v1beta1_query_pb.QueryClassResponse>): grpc.ClientUnaryCall;
  classes(argument: cosmos_nft_v1beta1_query_pb.QueryClassesRequest, callback: grpc.requestCallback<cosmos_nft_v1beta1_query_pb.QueryClassesResponse>): grpc.ClientUnaryCall;
  classes(argument: cosmos_nft_v1beta1_query_pb.QueryClassesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_nft_v1beta1_query_pb.QueryClassesResponse>): grpc.ClientUnaryCall;
  classes(argument: cosmos_nft_v1beta1_query_pb.QueryClassesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_nft_v1beta1_query_pb.QueryClassesResponse>): grpc.ClientUnaryCall;
}
