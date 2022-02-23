// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var cosmos_group_v1beta1_query_pb = require('../../../cosmos/group/v1beta1/query_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var cosmos_group_v1beta1_types_pb = require('../../../cosmos/group/v1beta1/types_pb.js');
var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js');
var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js');

function serialize_cosmos_group_v1beta1_QueryGroupInfoRequest(arg) {
  if (!(arg instanceof cosmos_group_v1beta1_query_pb.QueryGroupInfoRequest)) {
    throw new Error('Expected argument of type cosmos.group.v1beta1.QueryGroupInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_group_v1beta1_QueryGroupInfoRequest(buffer_arg) {
  return cosmos_group_v1beta1_query_pb.QueryGroupInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_group_v1beta1_QueryGroupInfoResponse(arg) {
  if (!(arg instanceof cosmos_group_v1beta1_query_pb.QueryGroupInfoResponse)) {
    throw new Error('Expected argument of type cosmos.group.v1beta1.QueryGroupInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_group_v1beta1_QueryGroupInfoResponse(buffer_arg) {
  return cosmos_group_v1beta1_query_pb.QueryGroupInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_group_v1beta1_QueryGroupMembersRequest(arg) {
  if (!(arg instanceof cosmos_group_v1beta1_query_pb.QueryGroupMembersRequest)) {
    throw new Error('Expected argument of type cosmos.group.v1beta1.QueryGroupMembersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_group_v1beta1_QueryGroupMembersRequest(buffer_arg) {
  return cosmos_group_v1beta1_query_pb.QueryGroupMembersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_group_v1beta1_QueryGroupMembersResponse(arg) {
  if (!(arg instanceof cosmos_group_v1beta1_query_pb.QueryGroupMembersResponse)) {
    throw new Error('Expected argument of type cosmos.group.v1beta1.QueryGroupMembersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_group_v1beta1_QueryGroupMembersResponse(buffer_arg) {
  return cosmos_group_v1beta1_query_pb.QueryGroupMembersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_group_v1beta1_QueryGroupPoliciesByAdminRequest(arg) {
  if (!(arg instanceof cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByAdminRequest)) {
    throw new Error('Expected argument of type cosmos.group.v1beta1.QueryGroupPoliciesByAdminRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_group_v1beta1_QueryGroupPoliciesByAdminRequest(buffer_arg) {
  return cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByAdminRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_group_v1beta1_QueryGroupPoliciesByAdminResponse(arg) {
  if (!(arg instanceof cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByAdminResponse)) {
    throw new Error('Expected argument of type cosmos.group.v1beta1.QueryGroupPoliciesByAdminResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_group_v1beta1_QueryGroupPoliciesByAdminResponse(buffer_arg) {
  return cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByAdminResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_group_v1beta1_QueryGroupPoliciesByGroupRequest(arg) {
  if (!(arg instanceof cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByGroupRequest)) {
    throw new Error('Expected argument of type cosmos.group.v1beta1.QueryGroupPoliciesByGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_group_v1beta1_QueryGroupPoliciesByGroupRequest(buffer_arg) {
  return cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_group_v1beta1_QueryGroupPoliciesByGroupResponse(arg) {
  if (!(arg instanceof cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByGroupResponse)) {
    throw new Error('Expected argument of type cosmos.group.v1beta1.QueryGroupPoliciesByGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_group_v1beta1_QueryGroupPoliciesByGroupResponse(buffer_arg) {
  return cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_group_v1beta1_QueryGroupPolicyInfoRequest(arg) {
  if (!(arg instanceof cosmos_group_v1beta1_query_pb.QueryGroupPolicyInfoRequest)) {
    throw new Error('Expected argument of type cosmos.group.v1beta1.QueryGroupPolicyInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_group_v1beta1_QueryGroupPolicyInfoRequest(buffer_arg) {
  return cosmos_group_v1beta1_query_pb.QueryGroupPolicyInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_group_v1beta1_QueryGroupPolicyInfoResponse(arg) {
  if (!(arg instanceof cosmos_group_v1beta1_query_pb.QueryGroupPolicyInfoResponse)) {
    throw new Error('Expected argument of type cosmos.group.v1beta1.QueryGroupPolicyInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_group_v1beta1_QueryGroupPolicyInfoResponse(buffer_arg) {
  return cosmos_group_v1beta1_query_pb.QueryGroupPolicyInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_group_v1beta1_QueryGroupsByAdminRequest(arg) {
  if (!(arg instanceof cosmos_group_v1beta1_query_pb.QueryGroupsByAdminRequest)) {
    throw new Error('Expected argument of type cosmos.group.v1beta1.QueryGroupsByAdminRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_group_v1beta1_QueryGroupsByAdminRequest(buffer_arg) {
  return cosmos_group_v1beta1_query_pb.QueryGroupsByAdminRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_group_v1beta1_QueryGroupsByAdminResponse(arg) {
  if (!(arg instanceof cosmos_group_v1beta1_query_pb.QueryGroupsByAdminResponse)) {
    throw new Error('Expected argument of type cosmos.group.v1beta1.QueryGroupsByAdminResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_group_v1beta1_QueryGroupsByAdminResponse(buffer_arg) {
  return cosmos_group_v1beta1_query_pb.QueryGroupsByAdminResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_group_v1beta1_QueryGroupsByMemberRequest(arg) {
  if (!(arg instanceof cosmos_group_v1beta1_query_pb.QueryGroupsByMemberRequest)) {
    throw new Error('Expected argument of type cosmos.group.v1beta1.QueryGroupsByMemberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_group_v1beta1_QueryGroupsByMemberRequest(buffer_arg) {
  return cosmos_group_v1beta1_query_pb.QueryGroupsByMemberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_group_v1beta1_QueryGroupsByMemberResponse(arg) {
  if (!(arg instanceof cosmos_group_v1beta1_query_pb.QueryGroupsByMemberResponse)) {
    throw new Error('Expected argument of type cosmos.group.v1beta1.QueryGroupsByMemberResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_group_v1beta1_QueryGroupsByMemberResponse(buffer_arg) {
  return cosmos_group_v1beta1_query_pb.QueryGroupsByMemberResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_group_v1beta1_QueryProposalRequest(arg) {
  if (!(arg instanceof cosmos_group_v1beta1_query_pb.QueryProposalRequest)) {
    throw new Error('Expected argument of type cosmos.group.v1beta1.QueryProposalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_group_v1beta1_QueryProposalRequest(buffer_arg) {
  return cosmos_group_v1beta1_query_pb.QueryProposalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_group_v1beta1_QueryProposalResponse(arg) {
  if (!(arg instanceof cosmos_group_v1beta1_query_pb.QueryProposalResponse)) {
    throw new Error('Expected argument of type cosmos.group.v1beta1.QueryProposalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_group_v1beta1_QueryProposalResponse(buffer_arg) {
  return cosmos_group_v1beta1_query_pb.QueryProposalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_group_v1beta1_QueryProposalsByGroupPolicyRequest(arg) {
  if (!(arg instanceof cosmos_group_v1beta1_query_pb.QueryProposalsByGroupPolicyRequest)) {
    throw new Error('Expected argument of type cosmos.group.v1beta1.QueryProposalsByGroupPolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_group_v1beta1_QueryProposalsByGroupPolicyRequest(buffer_arg) {
  return cosmos_group_v1beta1_query_pb.QueryProposalsByGroupPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_group_v1beta1_QueryProposalsByGroupPolicyResponse(arg) {
  if (!(arg instanceof cosmos_group_v1beta1_query_pb.QueryProposalsByGroupPolicyResponse)) {
    throw new Error('Expected argument of type cosmos.group.v1beta1.QueryProposalsByGroupPolicyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_group_v1beta1_QueryProposalsByGroupPolicyResponse(buffer_arg) {
  return cosmos_group_v1beta1_query_pb.QueryProposalsByGroupPolicyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_group_v1beta1_QueryVoteByProposalVoterRequest(arg) {
  if (!(arg instanceof cosmos_group_v1beta1_query_pb.QueryVoteByProposalVoterRequest)) {
    throw new Error('Expected argument of type cosmos.group.v1beta1.QueryVoteByProposalVoterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_group_v1beta1_QueryVoteByProposalVoterRequest(buffer_arg) {
  return cosmos_group_v1beta1_query_pb.QueryVoteByProposalVoterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_group_v1beta1_QueryVoteByProposalVoterResponse(arg) {
  if (!(arg instanceof cosmos_group_v1beta1_query_pb.QueryVoteByProposalVoterResponse)) {
    throw new Error('Expected argument of type cosmos.group.v1beta1.QueryVoteByProposalVoterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_group_v1beta1_QueryVoteByProposalVoterResponse(buffer_arg) {
  return cosmos_group_v1beta1_query_pb.QueryVoteByProposalVoterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_group_v1beta1_QueryVotesByProposalRequest(arg) {
  if (!(arg instanceof cosmos_group_v1beta1_query_pb.QueryVotesByProposalRequest)) {
    throw new Error('Expected argument of type cosmos.group.v1beta1.QueryVotesByProposalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_group_v1beta1_QueryVotesByProposalRequest(buffer_arg) {
  return cosmos_group_v1beta1_query_pb.QueryVotesByProposalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_group_v1beta1_QueryVotesByProposalResponse(arg) {
  if (!(arg instanceof cosmos_group_v1beta1_query_pb.QueryVotesByProposalResponse)) {
    throw new Error('Expected argument of type cosmos.group.v1beta1.QueryVotesByProposalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_group_v1beta1_QueryVotesByProposalResponse(buffer_arg) {
  return cosmos_group_v1beta1_query_pb.QueryVotesByProposalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_group_v1beta1_QueryVotesByVoterRequest(arg) {
  if (!(arg instanceof cosmos_group_v1beta1_query_pb.QueryVotesByVoterRequest)) {
    throw new Error('Expected argument of type cosmos.group.v1beta1.QueryVotesByVoterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_group_v1beta1_QueryVotesByVoterRequest(buffer_arg) {
  return cosmos_group_v1beta1_query_pb.QueryVotesByVoterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_group_v1beta1_QueryVotesByVoterResponse(arg) {
  if (!(arg instanceof cosmos_group_v1beta1_query_pb.QueryVotesByVoterResponse)) {
    throw new Error('Expected argument of type cosmos.group.v1beta1.QueryVotesByVoterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_group_v1beta1_QueryVotesByVoterResponse(buffer_arg) {
  return cosmos_group_v1beta1_query_pb.QueryVotesByVoterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query is the cosmos.group.v1beta1 Query service.
var QueryService = exports.QueryService = {
  // GroupInfo queries group info based on group id.
groupInfo: {
    path: '/cosmos.group.v1beta1.Query/GroupInfo',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_group_v1beta1_query_pb.QueryGroupInfoRequest,
    responseType: cosmos_group_v1beta1_query_pb.QueryGroupInfoResponse,
    requestSerialize: serialize_cosmos_group_v1beta1_QueryGroupInfoRequest,
    requestDeserialize: deserialize_cosmos_group_v1beta1_QueryGroupInfoRequest,
    responseSerialize: serialize_cosmos_group_v1beta1_QueryGroupInfoResponse,
    responseDeserialize: deserialize_cosmos_group_v1beta1_QueryGroupInfoResponse,
  },
  // GroupPolicyInfo queries group policy info based on account address of group policy.
groupPolicyInfo: {
    path: '/cosmos.group.v1beta1.Query/GroupPolicyInfo',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_group_v1beta1_query_pb.QueryGroupPolicyInfoRequest,
    responseType: cosmos_group_v1beta1_query_pb.QueryGroupPolicyInfoResponse,
    requestSerialize: serialize_cosmos_group_v1beta1_QueryGroupPolicyInfoRequest,
    requestDeserialize: deserialize_cosmos_group_v1beta1_QueryGroupPolicyInfoRequest,
    responseSerialize: serialize_cosmos_group_v1beta1_QueryGroupPolicyInfoResponse,
    responseDeserialize: deserialize_cosmos_group_v1beta1_QueryGroupPolicyInfoResponse,
  },
  // GroupMembers queries members of a group
groupMembers: {
    path: '/cosmos.group.v1beta1.Query/GroupMembers',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_group_v1beta1_query_pb.QueryGroupMembersRequest,
    responseType: cosmos_group_v1beta1_query_pb.QueryGroupMembersResponse,
    requestSerialize: serialize_cosmos_group_v1beta1_QueryGroupMembersRequest,
    requestDeserialize: deserialize_cosmos_group_v1beta1_QueryGroupMembersRequest,
    responseSerialize: serialize_cosmos_group_v1beta1_QueryGroupMembersResponse,
    responseDeserialize: deserialize_cosmos_group_v1beta1_QueryGroupMembersResponse,
  },
  // GroupsByAdmin queries groups by admin address.
groupsByAdmin: {
    path: '/cosmos.group.v1beta1.Query/GroupsByAdmin',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_group_v1beta1_query_pb.QueryGroupsByAdminRequest,
    responseType: cosmos_group_v1beta1_query_pb.QueryGroupsByAdminResponse,
    requestSerialize: serialize_cosmos_group_v1beta1_QueryGroupsByAdminRequest,
    requestDeserialize: deserialize_cosmos_group_v1beta1_QueryGroupsByAdminRequest,
    responseSerialize: serialize_cosmos_group_v1beta1_QueryGroupsByAdminResponse,
    responseDeserialize: deserialize_cosmos_group_v1beta1_QueryGroupsByAdminResponse,
  },
  // GroupPoliciesByGroup queries group policies by group id.
groupPoliciesByGroup: {
    path: '/cosmos.group.v1beta1.Query/GroupPoliciesByGroup',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByGroupRequest,
    responseType: cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByGroupResponse,
    requestSerialize: serialize_cosmos_group_v1beta1_QueryGroupPoliciesByGroupRequest,
    requestDeserialize: deserialize_cosmos_group_v1beta1_QueryGroupPoliciesByGroupRequest,
    responseSerialize: serialize_cosmos_group_v1beta1_QueryGroupPoliciesByGroupResponse,
    responseDeserialize: deserialize_cosmos_group_v1beta1_QueryGroupPoliciesByGroupResponse,
  },
  // GroupsByAdmin queries group policies by admin address.
groupPoliciesByAdmin: {
    path: '/cosmos.group.v1beta1.Query/GroupPoliciesByAdmin',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByAdminRequest,
    responseType: cosmos_group_v1beta1_query_pb.QueryGroupPoliciesByAdminResponse,
    requestSerialize: serialize_cosmos_group_v1beta1_QueryGroupPoliciesByAdminRequest,
    requestDeserialize: deserialize_cosmos_group_v1beta1_QueryGroupPoliciesByAdminRequest,
    responseSerialize: serialize_cosmos_group_v1beta1_QueryGroupPoliciesByAdminResponse,
    responseDeserialize: deserialize_cosmos_group_v1beta1_QueryGroupPoliciesByAdminResponse,
  },
  // Proposal queries a proposal based on proposal id.
proposal: {
    path: '/cosmos.group.v1beta1.Query/Proposal',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_group_v1beta1_query_pb.QueryProposalRequest,
    responseType: cosmos_group_v1beta1_query_pb.QueryProposalResponse,
    requestSerialize: serialize_cosmos_group_v1beta1_QueryProposalRequest,
    requestDeserialize: deserialize_cosmos_group_v1beta1_QueryProposalRequest,
    responseSerialize: serialize_cosmos_group_v1beta1_QueryProposalResponse,
    responseDeserialize: deserialize_cosmos_group_v1beta1_QueryProposalResponse,
  },
  // ProposalsByGroupPolicy queries proposals based on account address of group policy.
proposalsByGroupPolicy: {
    path: '/cosmos.group.v1beta1.Query/ProposalsByGroupPolicy',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_group_v1beta1_query_pb.QueryProposalsByGroupPolicyRequest,
    responseType: cosmos_group_v1beta1_query_pb.QueryProposalsByGroupPolicyResponse,
    requestSerialize: serialize_cosmos_group_v1beta1_QueryProposalsByGroupPolicyRequest,
    requestDeserialize: deserialize_cosmos_group_v1beta1_QueryProposalsByGroupPolicyRequest,
    responseSerialize: serialize_cosmos_group_v1beta1_QueryProposalsByGroupPolicyResponse,
    responseDeserialize: deserialize_cosmos_group_v1beta1_QueryProposalsByGroupPolicyResponse,
  },
  // VoteByProposalVoter queries a vote by proposal id and voter.
voteByProposalVoter: {
    path: '/cosmos.group.v1beta1.Query/VoteByProposalVoter',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_group_v1beta1_query_pb.QueryVoteByProposalVoterRequest,
    responseType: cosmos_group_v1beta1_query_pb.QueryVoteByProposalVoterResponse,
    requestSerialize: serialize_cosmos_group_v1beta1_QueryVoteByProposalVoterRequest,
    requestDeserialize: deserialize_cosmos_group_v1beta1_QueryVoteByProposalVoterRequest,
    responseSerialize: serialize_cosmos_group_v1beta1_QueryVoteByProposalVoterResponse,
    responseDeserialize: deserialize_cosmos_group_v1beta1_QueryVoteByProposalVoterResponse,
  },
  // VotesByProposal queries a vote by proposal.
votesByProposal: {
    path: '/cosmos.group.v1beta1.Query/VotesByProposal',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_group_v1beta1_query_pb.QueryVotesByProposalRequest,
    responseType: cosmos_group_v1beta1_query_pb.QueryVotesByProposalResponse,
    requestSerialize: serialize_cosmos_group_v1beta1_QueryVotesByProposalRequest,
    requestDeserialize: deserialize_cosmos_group_v1beta1_QueryVotesByProposalRequest,
    responseSerialize: serialize_cosmos_group_v1beta1_QueryVotesByProposalResponse,
    responseDeserialize: deserialize_cosmos_group_v1beta1_QueryVotesByProposalResponse,
  },
  // VotesByVoter queries a vote by voter.
votesByVoter: {
    path: '/cosmos.group.v1beta1.Query/VotesByVoter',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_group_v1beta1_query_pb.QueryVotesByVoterRequest,
    responseType: cosmos_group_v1beta1_query_pb.QueryVotesByVoterResponse,
    requestSerialize: serialize_cosmos_group_v1beta1_QueryVotesByVoterRequest,
    requestDeserialize: deserialize_cosmos_group_v1beta1_QueryVotesByVoterRequest,
    responseSerialize: serialize_cosmos_group_v1beta1_QueryVotesByVoterResponse,
    responseDeserialize: deserialize_cosmos_group_v1beta1_QueryVotesByVoterResponse,
  },
  // GroupsByMember queries groups by member address.
groupsByMember: {
    path: '/cosmos.group.v1beta1.Query/GroupsByMember',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_group_v1beta1_query_pb.QueryGroupsByMemberRequest,
    responseType: cosmos_group_v1beta1_query_pb.QueryGroupsByMemberResponse,
    requestSerialize: serialize_cosmos_group_v1beta1_QueryGroupsByMemberRequest,
    requestDeserialize: deserialize_cosmos_group_v1beta1_QueryGroupsByMemberRequest,
    responseSerialize: serialize_cosmos_group_v1beta1_QueryGroupsByMemberResponse,
    responseDeserialize: deserialize_cosmos_group_v1beta1_QueryGroupsByMemberResponse,
  },
};

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService);
