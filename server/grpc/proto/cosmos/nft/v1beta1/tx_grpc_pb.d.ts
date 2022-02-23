// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.nft.v1beta1
// file: cosmos/nft/v1beta1/tx.proto

import * as cosmos_nft_v1beta1_tx_pb from "../../../cosmos/nft/v1beta1/tx_pb";
import * as grpc from "@grpc/grpc-js";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  send: grpc.MethodDefinition<cosmos_nft_v1beta1_tx_pb.MsgSend, cosmos_nft_v1beta1_tx_pb.MsgSendResponse>;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
  send: grpc.handleUnaryCall<cosmos_nft_v1beta1_tx_pb.MsgSend, cosmos_nft_v1beta1_tx_pb.MsgSendResponse>;
}

export class MsgClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  send(argument: cosmos_nft_v1beta1_tx_pb.MsgSend, callback: grpc.requestCallback<cosmos_nft_v1beta1_tx_pb.MsgSendResponse>): grpc.ClientUnaryCall;
  send(argument: cosmos_nft_v1beta1_tx_pb.MsgSend, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_nft_v1beta1_tx_pb.MsgSendResponse>): grpc.ClientUnaryCall;
  send(argument: cosmos_nft_v1beta1_tx_pb.MsgSend, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_nft_v1beta1_tx_pb.MsgSendResponse>): grpc.ClientUnaryCall;
}
