// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.group.v1beta1
// file: cosmos/group/v1beta1/tx.proto

import * as cosmos_group_v1beta1_tx_pb from "../../../cosmos/group/v1beta1/tx_pb";
import * as grpc from "@grpc/grpc-js";

interface IMsgService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createGroup: grpc.MethodDefinition<cosmos_group_v1beta1_tx_pb.MsgCreateGroup, cosmos_group_v1beta1_tx_pb.MsgCreateGroupResponse>;
  updateGroupMembers: grpc.MethodDefinition<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupMembers, cosmos_group_v1beta1_tx_pb.MsgUpdateGroupMembersResponse>;
  updateGroupAdmin: grpc.MethodDefinition<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupAdmin, cosmos_group_v1beta1_tx_pb.MsgUpdateGroupAdminResponse>;
  updateGroupMetadata: grpc.MethodDefinition<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupMetadata, cosmos_group_v1beta1_tx_pb.MsgUpdateGroupMetadataResponse>;
  createGroupPolicy: grpc.MethodDefinition<cosmos_group_v1beta1_tx_pb.MsgCreateGroupPolicy, cosmos_group_v1beta1_tx_pb.MsgCreateGroupPolicyResponse>;
  createGroupWithPolicy: grpc.MethodDefinition<cosmos_group_v1beta1_tx_pb.MsgCreateGroupWithPolicy, cosmos_group_v1beta1_tx_pb.MsgCreateGroupWithPolicyResponse>;
  updateGroupPolicyAdmin: grpc.MethodDefinition<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyAdmin, cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyAdminResponse>;
  updateGroupPolicyDecisionPolicy: grpc.MethodDefinition<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyDecisionPolicy, cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyDecisionPolicyResponse>;
  updateGroupPolicyMetadata: grpc.MethodDefinition<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyMetadata, cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyMetadataResponse>;
  submitProposal: grpc.MethodDefinition<cosmos_group_v1beta1_tx_pb.MsgSubmitProposal, cosmos_group_v1beta1_tx_pb.MsgSubmitProposalResponse>;
  withdrawProposal: grpc.MethodDefinition<cosmos_group_v1beta1_tx_pb.MsgWithdrawProposal, cosmos_group_v1beta1_tx_pb.MsgWithdrawProposalResponse>;
  vote: grpc.MethodDefinition<cosmos_group_v1beta1_tx_pb.MsgVote, cosmos_group_v1beta1_tx_pb.MsgVoteResponse>;
  exec: grpc.MethodDefinition<cosmos_group_v1beta1_tx_pb.MsgExec, cosmos_group_v1beta1_tx_pb.MsgExecResponse>;
}

export const MsgService: IMsgService;

export interface IMsgServer extends grpc.UntypedServiceImplementation {
  createGroup: grpc.handleUnaryCall<cosmos_group_v1beta1_tx_pb.MsgCreateGroup, cosmos_group_v1beta1_tx_pb.MsgCreateGroupResponse>;
  updateGroupMembers: grpc.handleUnaryCall<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupMembers, cosmos_group_v1beta1_tx_pb.MsgUpdateGroupMembersResponse>;
  updateGroupAdmin: grpc.handleUnaryCall<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupAdmin, cosmos_group_v1beta1_tx_pb.MsgUpdateGroupAdminResponse>;
  updateGroupMetadata: grpc.handleUnaryCall<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupMetadata, cosmos_group_v1beta1_tx_pb.MsgUpdateGroupMetadataResponse>;
  createGroupPolicy: grpc.handleUnaryCall<cosmos_group_v1beta1_tx_pb.MsgCreateGroupPolicy, cosmos_group_v1beta1_tx_pb.MsgCreateGroupPolicyResponse>;
  createGroupWithPolicy: grpc.handleUnaryCall<cosmos_group_v1beta1_tx_pb.MsgCreateGroupWithPolicy, cosmos_group_v1beta1_tx_pb.MsgCreateGroupWithPolicyResponse>;
  updateGroupPolicyAdmin: grpc.handleUnaryCall<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyAdmin, cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyAdminResponse>;
  updateGroupPolicyDecisionPolicy: grpc.handleUnaryCall<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyDecisionPolicy, cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyDecisionPolicyResponse>;
  updateGroupPolicyMetadata: grpc.handleUnaryCall<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyMetadata, cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyMetadataResponse>;
  submitProposal: grpc.handleUnaryCall<cosmos_group_v1beta1_tx_pb.MsgSubmitProposal, cosmos_group_v1beta1_tx_pb.MsgSubmitProposalResponse>;
  withdrawProposal: grpc.handleUnaryCall<cosmos_group_v1beta1_tx_pb.MsgWithdrawProposal, cosmos_group_v1beta1_tx_pb.MsgWithdrawProposalResponse>;
  vote: grpc.handleUnaryCall<cosmos_group_v1beta1_tx_pb.MsgVote, cosmos_group_v1beta1_tx_pb.MsgVoteResponse>;
  exec: grpc.handleUnaryCall<cosmos_group_v1beta1_tx_pb.MsgExec, cosmos_group_v1beta1_tx_pb.MsgExecResponse>;
}

export class MsgClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createGroup(argument: cosmos_group_v1beta1_tx_pb.MsgCreateGroup, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgCreateGroupResponse>): grpc.ClientUnaryCall;
  createGroup(argument: cosmos_group_v1beta1_tx_pb.MsgCreateGroup, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgCreateGroupResponse>): grpc.ClientUnaryCall;
  createGroup(argument: cosmos_group_v1beta1_tx_pb.MsgCreateGroup, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgCreateGroupResponse>): grpc.ClientUnaryCall;
  updateGroupMembers(argument: cosmos_group_v1beta1_tx_pb.MsgUpdateGroupMembers, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupMembersResponse>): grpc.ClientUnaryCall;
  updateGroupMembers(argument: cosmos_group_v1beta1_tx_pb.MsgUpdateGroupMembers, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupMembersResponse>): grpc.ClientUnaryCall;
  updateGroupMembers(argument: cosmos_group_v1beta1_tx_pb.MsgUpdateGroupMembers, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupMembersResponse>): grpc.ClientUnaryCall;
  updateGroupAdmin(argument: cosmos_group_v1beta1_tx_pb.MsgUpdateGroupAdmin, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupAdminResponse>): grpc.ClientUnaryCall;
  updateGroupAdmin(argument: cosmos_group_v1beta1_tx_pb.MsgUpdateGroupAdmin, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupAdminResponse>): grpc.ClientUnaryCall;
  updateGroupAdmin(argument: cosmos_group_v1beta1_tx_pb.MsgUpdateGroupAdmin, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupAdminResponse>): grpc.ClientUnaryCall;
  updateGroupMetadata(argument: cosmos_group_v1beta1_tx_pb.MsgUpdateGroupMetadata, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupMetadataResponse>): grpc.ClientUnaryCall;
  updateGroupMetadata(argument: cosmos_group_v1beta1_tx_pb.MsgUpdateGroupMetadata, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupMetadataResponse>): grpc.ClientUnaryCall;
  updateGroupMetadata(argument: cosmos_group_v1beta1_tx_pb.MsgUpdateGroupMetadata, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupMetadataResponse>): grpc.ClientUnaryCall;
  createGroupPolicy(argument: cosmos_group_v1beta1_tx_pb.MsgCreateGroupPolicy, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgCreateGroupPolicyResponse>): grpc.ClientUnaryCall;
  createGroupPolicy(argument: cosmos_group_v1beta1_tx_pb.MsgCreateGroupPolicy, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgCreateGroupPolicyResponse>): grpc.ClientUnaryCall;
  createGroupPolicy(argument: cosmos_group_v1beta1_tx_pb.MsgCreateGroupPolicy, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgCreateGroupPolicyResponse>): grpc.ClientUnaryCall;
  createGroupWithPolicy(argument: cosmos_group_v1beta1_tx_pb.MsgCreateGroupWithPolicy, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgCreateGroupWithPolicyResponse>): grpc.ClientUnaryCall;
  createGroupWithPolicy(argument: cosmos_group_v1beta1_tx_pb.MsgCreateGroupWithPolicy, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgCreateGroupWithPolicyResponse>): grpc.ClientUnaryCall;
  createGroupWithPolicy(argument: cosmos_group_v1beta1_tx_pb.MsgCreateGroupWithPolicy, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgCreateGroupWithPolicyResponse>): grpc.ClientUnaryCall;
  updateGroupPolicyAdmin(argument: cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyAdmin, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyAdminResponse>): grpc.ClientUnaryCall;
  updateGroupPolicyAdmin(argument: cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyAdmin, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyAdminResponse>): grpc.ClientUnaryCall;
  updateGroupPolicyAdmin(argument: cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyAdmin, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyAdminResponse>): grpc.ClientUnaryCall;
  updateGroupPolicyDecisionPolicy(argument: cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyDecisionPolicy, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyDecisionPolicyResponse>): grpc.ClientUnaryCall;
  updateGroupPolicyDecisionPolicy(argument: cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyDecisionPolicy, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyDecisionPolicyResponse>): grpc.ClientUnaryCall;
  updateGroupPolicyDecisionPolicy(argument: cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyDecisionPolicy, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyDecisionPolicyResponse>): grpc.ClientUnaryCall;
  updateGroupPolicyMetadata(argument: cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyMetadata, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyMetadataResponse>): grpc.ClientUnaryCall;
  updateGroupPolicyMetadata(argument: cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyMetadata, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyMetadataResponse>): grpc.ClientUnaryCall;
  updateGroupPolicyMetadata(argument: cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyMetadata, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgUpdateGroupPolicyMetadataResponse>): grpc.ClientUnaryCall;
  submitProposal(argument: cosmos_group_v1beta1_tx_pb.MsgSubmitProposal, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgSubmitProposalResponse>): grpc.ClientUnaryCall;
  submitProposal(argument: cosmos_group_v1beta1_tx_pb.MsgSubmitProposal, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgSubmitProposalResponse>): grpc.ClientUnaryCall;
  submitProposal(argument: cosmos_group_v1beta1_tx_pb.MsgSubmitProposal, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgSubmitProposalResponse>): grpc.ClientUnaryCall;
  withdrawProposal(argument: cosmos_group_v1beta1_tx_pb.MsgWithdrawProposal, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgWithdrawProposalResponse>): grpc.ClientUnaryCall;
  withdrawProposal(argument: cosmos_group_v1beta1_tx_pb.MsgWithdrawProposal, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgWithdrawProposalResponse>): grpc.ClientUnaryCall;
  withdrawProposal(argument: cosmos_group_v1beta1_tx_pb.MsgWithdrawProposal, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgWithdrawProposalResponse>): grpc.ClientUnaryCall;
  vote(argument: cosmos_group_v1beta1_tx_pb.MsgVote, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgVoteResponse>): grpc.ClientUnaryCall;
  vote(argument: cosmos_group_v1beta1_tx_pb.MsgVote, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgVoteResponse>): grpc.ClientUnaryCall;
  vote(argument: cosmos_group_v1beta1_tx_pb.MsgVote, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgVoteResponse>): grpc.ClientUnaryCall;
  exec(argument: cosmos_group_v1beta1_tx_pb.MsgExec, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgExecResponse>): grpc.ClientUnaryCall;
  exec(argument: cosmos_group_v1beta1_tx_pb.MsgExec, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgExecResponse>): grpc.ClientUnaryCall;
  exec(argument: cosmos_group_v1beta1_tx_pb.MsgExec, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_tx_pb.MsgExecResponse>): grpc.ClientUnaryCall;
}
