// GENERATED CODE -- DO NOT EDIT!

// package: cosmos.group.v1beta1
// file: cosmos/group/v1beta1/query.proto

import * as cosmos_group_v1beta1_query_pb from "../../../cosmos/group/v1beta1/query_pb";
import * as grpc from "@grpc/grpc-js";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  groupInfo: grpc.MethodDefinition<cosmos_group_v1beta1_query_pb.QueryGroupInfoRequest, cosmos_group_v1beta1_query_pb.QueryGroupInfoResponse>;
  groupPolicyInfo: grpc.MethodDefinition<cosmos_group_v1beta1_query_pb.QueryGroupPolicyInfoRequest, cosmos_group_v1beta1_query_pb.QueryGroupPolicyInfoResponse>;
  groupMembers: grpc.MethodDefinition<cosmos_group_v1beta1_query_pb.QueryGroupMembersRequest, cosmos_group_v1beta1_query_pb.QueryGroupMembersResponse>;
  groupsByAdmin: grpc.MethodDefinition<cosmos_group_v1beta1_query_pb.QueryGroupsByAdminRequest, cosmos_group_v1beta1_query_pb.QueryGroupsByAdminResponse>;
  groupPoliciesByGroup: grpc.MethodDefinition<cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByGroupRequest, cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByGroupResponse>;
  groupPoliciesByAdmin: grpc.MethodDefinition<cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByAdminRequest, cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByAdminResponse>;
  proposal: grpc.MethodDefinition<cosmos_group_v1beta1_query_pb.QueryProposalRequest, cosmos_group_v1beta1_query_pb.QueryProposalResponse>;
  proposalsByGroupPolicy: grpc.MethodDefinition<cosmos_group_v1beta1_query_pb.QueryProposalsByGroupPolicyRequest, cosmos_group_v1beta1_query_pb.QueryProposalsByGroupPolicyResponse>;
  voteByProposalVoter: grpc.MethodDefinition<cosmos_group_v1beta1_query_pb.QueryVoteByProposalVoterRequest, cosmos_group_v1beta1_query_pb.QueryVoteByProposalVoterResponse>;
  votesByProposal: grpc.MethodDefinition<cosmos_group_v1beta1_query_pb.QueryVotesByProposalRequest, cosmos_group_v1beta1_query_pb.QueryVotesByProposalResponse>;
  votesByVoter: grpc.MethodDefinition<cosmos_group_v1beta1_query_pb.QueryVotesByVoterRequest, cosmos_group_v1beta1_query_pb.QueryVotesByVoterResponse>;
  groupsByMember: grpc.MethodDefinition<cosmos_group_v1beta1_query_pb.QueryGroupsByMemberRequest, cosmos_group_v1beta1_query_pb.QueryGroupsByMemberResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
  groupInfo: grpc.handleUnaryCall<cosmos_group_v1beta1_query_pb.QueryGroupInfoRequest, cosmos_group_v1beta1_query_pb.QueryGroupInfoResponse>;
  groupPolicyInfo: grpc.handleUnaryCall<cosmos_group_v1beta1_query_pb.QueryGroupPolicyInfoRequest, cosmos_group_v1beta1_query_pb.QueryGroupPolicyInfoResponse>;
  groupMembers: grpc.handleUnaryCall<cosmos_group_v1beta1_query_pb.QueryGroupMembersRequest, cosmos_group_v1beta1_query_pb.QueryGroupMembersResponse>;
  groupsByAdmin: grpc.handleUnaryCall<cosmos_group_v1beta1_query_pb.QueryGroupsByAdminRequest, cosmos_group_v1beta1_query_pb.QueryGroupsByAdminResponse>;
  groupPoliciesByGroup: grpc.handleUnaryCall<cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByGroupRequest, cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByGroupResponse>;
  groupPoliciesByAdmin: grpc.handleUnaryCall<cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByAdminRequest, cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByAdminResponse>;
  proposal: grpc.handleUnaryCall<cosmos_group_v1beta1_query_pb.QueryProposalRequest, cosmos_group_v1beta1_query_pb.QueryProposalResponse>;
  proposalsByGroupPolicy: grpc.handleUnaryCall<cosmos_group_v1beta1_query_pb.QueryProposalsByGroupPolicyRequest, cosmos_group_v1beta1_query_pb.QueryProposalsByGroupPolicyResponse>;
  voteByProposalVoter: grpc.handleUnaryCall<cosmos_group_v1beta1_query_pb.QueryVoteByProposalVoterRequest, cosmos_group_v1beta1_query_pb.QueryVoteByProposalVoterResponse>;
  votesByProposal: grpc.handleUnaryCall<cosmos_group_v1beta1_query_pb.QueryVotesByProposalRequest, cosmos_group_v1beta1_query_pb.QueryVotesByProposalResponse>;
  votesByVoter: grpc.handleUnaryCall<cosmos_group_v1beta1_query_pb.QueryVotesByVoterRequest, cosmos_group_v1beta1_query_pb.QueryVotesByVoterResponse>;
  groupsByMember: grpc.handleUnaryCall<cosmos_group_v1beta1_query_pb.QueryGroupsByMemberRequest, cosmos_group_v1beta1_query_pb.QueryGroupsByMemberResponse>;
}

export class QueryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  groupInfo(argument: cosmos_group_v1beta1_query_pb.QueryGroupInfoRequest, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryGroupInfoResponse>): grpc.ClientUnaryCall;
  groupInfo(argument: cosmos_group_v1beta1_query_pb.QueryGroupInfoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryGroupInfoResponse>): grpc.ClientUnaryCall;
  groupInfo(argument: cosmos_group_v1beta1_query_pb.QueryGroupInfoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryGroupInfoResponse>): grpc.ClientUnaryCall;
  groupPolicyInfo(argument: cosmos_group_v1beta1_query_pb.QueryGroupPolicyInfoRequest, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryGroupPolicyInfoResponse>): grpc.ClientUnaryCall;
  groupPolicyInfo(argument: cosmos_group_v1beta1_query_pb.QueryGroupPolicyInfoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryGroupPolicyInfoResponse>): grpc.ClientUnaryCall;
  groupPolicyInfo(argument: cosmos_group_v1beta1_query_pb.QueryGroupPolicyInfoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryGroupPolicyInfoResponse>): grpc.ClientUnaryCall;
  groupMembers(argument: cosmos_group_v1beta1_query_pb.QueryGroupMembersRequest, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryGroupMembersResponse>): grpc.ClientUnaryCall;
  groupMembers(argument: cosmos_group_v1beta1_query_pb.QueryGroupMembersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryGroupMembersResponse>): grpc.ClientUnaryCall;
  groupMembers(argument: cosmos_group_v1beta1_query_pb.QueryGroupMembersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryGroupMembersResponse>): grpc.ClientUnaryCall;
  groupsByAdmin(argument: cosmos_group_v1beta1_query_pb.QueryGroupsByAdminRequest, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryGroupsByAdminResponse>): grpc.ClientUnaryCall;
  groupsByAdmin(argument: cosmos_group_v1beta1_query_pb.QueryGroupsByAdminRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryGroupsByAdminResponse>): grpc.ClientUnaryCall;
  groupsByAdmin(argument: cosmos_group_v1beta1_query_pb.QueryGroupsByAdminRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryGroupsByAdminResponse>): grpc.ClientUnaryCall;
  groupPoliciesByGroup(argument: cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByGroupRequest, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByGroupResponse>): grpc.ClientUnaryCall;
  groupPoliciesByGroup(argument: cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByGroupResponse>): grpc.ClientUnaryCall;
  groupPoliciesByGroup(argument: cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByGroupResponse>): grpc.ClientUnaryCall;
  groupPoliciesByAdmin(argument: cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByAdminRequest, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByAdminResponse>): grpc.ClientUnaryCall;
  groupPoliciesByAdmin(argument: cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByAdminRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByAdminResponse>): grpc.ClientUnaryCall;
  groupPoliciesByAdmin(argument: cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByAdminRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByAdminResponse>): grpc.ClientUnaryCall;
  proposal(argument: cosmos_group_v1beta1_query_pb.QueryProposalRequest, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryProposalResponse>): grpc.ClientUnaryCall;
  proposal(argument: cosmos_group_v1beta1_query_pb.QueryProposalRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryProposalResponse>): grpc.ClientUnaryCall;
  proposal(argument: cosmos_group_v1beta1_query_pb.QueryProposalRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryProposalResponse>): grpc.ClientUnaryCall;
  proposalsByGroupPolicy(argument: cosmos_group_v1beta1_query_pb.QueryProposalsByGroupPolicyRequest, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryProposalsByGroupPolicyResponse>): grpc.ClientUnaryCall;
  proposalsByGroupPolicy(argument: cosmos_group_v1beta1_query_pb.QueryProposalsByGroupPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryProposalsByGroupPolicyResponse>): grpc.ClientUnaryCall;
  proposalsByGroupPolicy(argument: cosmos_group_v1beta1_query_pb.QueryProposalsByGroupPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryProposalsByGroupPolicyResponse>): grpc.ClientUnaryCall;
  voteByProposalVoter(argument: cosmos_group_v1beta1_query_pb.QueryVoteByProposalVoterRequest, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryVoteByProposalVoterResponse>): grpc.ClientUnaryCall;
  voteByProposalVoter(argument: cosmos_group_v1beta1_query_pb.QueryVoteByProposalVoterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryVoteByProposalVoterResponse>): grpc.ClientUnaryCall;
  voteByProposalVoter(argument: cosmos_group_v1beta1_query_pb.QueryVoteByProposalVoterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryVoteByProposalVoterResponse>): grpc.ClientUnaryCall;
  votesByProposal(argument: cosmos_group_v1beta1_query_pb.QueryVotesByProposalRequest, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryVotesByProposalResponse>): grpc.ClientUnaryCall;
  votesByProposal(argument: cosmos_group_v1beta1_query_pb.QueryVotesByProposalRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryVotesByProposalResponse>): grpc.ClientUnaryCall;
  votesByProposal(argument: cosmos_group_v1beta1_query_pb.QueryVotesByProposalRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryVotesByProposalResponse>): grpc.ClientUnaryCall;
  votesByVoter(argument: cosmos_group_v1beta1_query_pb.QueryVotesByVoterRequest, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryVotesByVoterResponse>): grpc.ClientUnaryCall;
  votesByVoter(argument: cosmos_group_v1beta1_query_pb.QueryVotesByVoterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryVotesByVoterResponse>): grpc.ClientUnaryCall;
  votesByVoter(argument: cosmos_group_v1beta1_query_pb.QueryVotesByVoterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryVotesByVoterResponse>): grpc.ClientUnaryCall;
  groupsByMember(argument: cosmos_group_v1beta1_query_pb.QueryGroupsByMemberRequest, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryGroupsByMemberResponse>): grpc.ClientUnaryCall;
  groupsByMember(argument: cosmos_group_v1beta1_query_pb.QueryGroupsByMemberRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryGroupsByMemberResponse>): grpc.ClientUnaryCall;
  groupsByMember(argument: cosmos_group_v1beta1_query_pb.QueryGroupsByMemberRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<cosmos_group_v1beta1_query_pb.QueryGroupsByMemberResponse>): grpc.ClientUnaryCall;
}
