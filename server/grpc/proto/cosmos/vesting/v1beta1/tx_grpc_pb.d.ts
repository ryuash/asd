// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.vesting.v1beta1
// file: cosmos/vesting/v1beta1/tx.proto

import * as cosmos_vesting_v1beta1_tx_pb from "../../../cosmos/vesting/v1beta1/tx_pb";
import * as grpc from "@grpc/grpc-js";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createVestingAccount: grpc.MethodDefinition<cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccount, cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccountResponse>;
  createPermanentLockedAccount: grpc.MethodDefinition<cosmos_vesting_v1beta1_tx_pb.MsgCreatePermanentLockedAccount, cosmos_vesting_v1beta1_tx_pb.MsgCreatePermanentLockedAccountResponse>;
  createPeriodicVestingAccount: grpc.MethodDefinition<cosmos_vesting_v1beta1_tx_pb.MsgCreatePeriodicVestingAccount, cosmos_vesting_v1beta1_tx_pb.MsgCreatePeriodicVestingAccountResponse>;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
  createVestingAccount: grpc.handleUnaryCall<cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccount, cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccountResponse>;
  createPermanentLockedAccount: grpc.handleUnaryCall<cosmos_vesting_v1beta1_tx_pb.MsgCreatePermanentLockedAccount, cosmos_vesting_v1beta1_tx_pb.MsgCreatePermanentLockedAccountResponse>;
  createPeriodicVestingAccount: grpc.handleUnaryCall<cosmos_vesting_v1beta1_tx_pb.MsgCreatePeriodicVestingAccount, cosmos_vesting_v1beta1_tx_pb.MsgCreatePeriodicVestingAccountResponse>;
}

export class MsgClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createVestingAccount(argument: cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccount, callback: grpc.requestCallback<cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccountResponse>): grpc.ClientUnaryCall;
  createVestingAccount(argument: cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccount, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccountResponse>): grpc.ClientUnaryCall;
  createVestingAccount(argument: cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccount, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_vesting_v1beta1_tx_pb.MsgCreateVestingAccountResponse>): grpc.ClientUnaryCall;
  createPermanentLockedAccount(argument: cosmos_vesting_v1beta1_tx_pb.MsgCreatePermanentLockedAccount, callback: grpc.requestCallback<cosmos_vesting_v1beta1_tx_pb.MsgCreatePermanentLockedAccountResponse>): grpc.ClientUnaryCall;
  createPermanentLockedAccount(argument: cosmos_vesting_v1beta1_tx_pb.MsgCreatePermanentLockedAccount, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_vesting_v1beta1_tx_pb.MsgCreatePermanentLockedAccountResponse>): grpc.ClientUnaryCall;
  createPermanentLockedAccount(argument: cosmos_vesting_v1beta1_tx_pb.MsgCreatePermanentLockedAccount, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_vesting_v1beta1_tx_pb.MsgCreatePermanentLockedAccountResponse>): grpc.ClientUnaryCall;
  createPeriodicVestingAccount(argument: cosmos_vesting_v1beta1_tx_pb.MsgCreatePeriodicVestingAccount, callback: grpc.requestCallback<cosmos_vesting_v1beta1_tx_pb.MsgCreatePeriodicVestingAccountResponse>): grpc.ClientUnaryCall;
  createPeriodicVestingAccount(argument: cosmos_vesting_v1beta1_tx_pb.MsgCreatePeriodicVestingAccount, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_vesting_v1beta1_tx_pb.MsgCreatePeriodicVestingAccountResponse>): grpc.ClientUnaryCall;
  createPeriodicVestingAccount(argument: cosmos_vesting_v1beta1_tx_pb.MsgCreatePeriodicVestingAccount, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_vesting_v1beta1_tx_pb.MsgCreatePeriodicVestingAccountResponse>): grpc.ClientUnaryCall;
}
