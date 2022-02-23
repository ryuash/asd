// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Since: cosmos-sdk 0.46
'use strict';
var grpc = require('@grpc/grpc-js');
var cosmos_gov_v1beta2_query_pb = require('../../../cosmos/gov/v1beta2/query_pb.js');
var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var cosmos_gov_v1beta2_gov_pb = require('../../../cosmos/gov/v1beta2/gov_pb.js');
var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js');

function serialize_cosmos_gov_v1beta2_QueryDepositRequest(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_query_pb.QueryDepositRequest)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.QueryDepositRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_QueryDepositRequest(buffer_arg) {
  return cosmos_gov_v1beta2_query_pb.QueryDepositRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_gov_v1beta2_QueryDepositResponse(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_query_pb.QueryDepositResponse)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.QueryDepositResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_QueryDepositResponse(buffer_arg) {
  return cosmos_gov_v1beta2_query_pb.QueryDepositResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_gov_v1beta2_QueryDepositsRequest(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_query_pb.QueryDepositsRequest)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.QueryDepositsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_QueryDepositsRequest(buffer_arg) {
  return cosmos_gov_v1beta2_query_pb.QueryDepositsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_gov_v1beta2_QueryDepositsResponse(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_query_pb.QueryDepositsResponse)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.QueryDepositsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_QueryDepositsResponse(buffer_arg) {
  return cosmos_gov_v1beta2_query_pb.QueryDepositsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_gov_v1beta2_QueryParamsRequest(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_query_pb.QueryParamsRequest)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.QueryParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_QueryParamsRequest(buffer_arg) {
  return cosmos_gov_v1beta2_query_pb.QueryParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_gov_v1beta2_QueryParamsResponse(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_query_pb.QueryParamsResponse)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.QueryParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_QueryParamsResponse(buffer_arg) {
  return cosmos_gov_v1beta2_query_pb.QueryParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_gov_v1beta2_QueryProposalRequest(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_query_pb.QueryProposalRequest)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.QueryProposalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_QueryProposalRequest(buffer_arg) {
  return cosmos_gov_v1beta2_query_pb.QueryProposalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_gov_v1beta2_QueryProposalResponse(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_query_pb.QueryProposalResponse)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.QueryProposalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_QueryProposalResponse(buffer_arg) {
  return cosmos_gov_v1beta2_query_pb.QueryProposalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_gov_v1beta2_QueryProposalsRequest(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_query_pb.QueryProposalsRequest)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.QueryProposalsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_QueryProposalsRequest(buffer_arg) {
  return cosmos_gov_v1beta2_query_pb.QueryProposalsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_gov_v1beta2_QueryProposalsResponse(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_query_pb.QueryProposalsResponse)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.QueryProposalsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_QueryProposalsResponse(buffer_arg) {
  return cosmos_gov_v1beta2_query_pb.QueryProposalsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_gov_v1beta2_QueryTallyResultRequest(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_query_pb.QueryTallyResultRequest)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.QueryTallyResultRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_QueryTallyResultRequest(buffer_arg) {
  return cosmos_gov_v1beta2_query_pb.QueryTallyResultRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_gov_v1beta2_QueryTallyResultResponse(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_query_pb.QueryTallyResultResponse)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.QueryTallyResultResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_QueryTallyResultResponse(buffer_arg) {
  return cosmos_gov_v1beta2_query_pb.QueryTallyResultResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_gov_v1beta2_QueryVoteRequest(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_query_pb.QueryVoteRequest)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.QueryVoteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_QueryVoteRequest(buffer_arg) {
  return cosmos_gov_v1beta2_query_pb.QueryVoteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_gov_v1beta2_QueryVoteResponse(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_query_pb.QueryVoteResponse)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.QueryVoteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_QueryVoteResponse(buffer_arg) {
  return cosmos_gov_v1beta2_query_pb.QueryVoteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_gov_v1beta2_QueryVotesRequest(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_query_pb.QueryVotesRequest)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.QueryVotesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_QueryVotesRequest(buffer_arg) {
  return cosmos_gov_v1beta2_query_pb.QueryVotesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_gov_v1beta2_QueryVotesResponse(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_query_pb.QueryVotesResponse)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.QueryVotesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_QueryVotesResponse(buffer_arg) {
  return cosmos_gov_v1beta2_query_pb.QueryVotesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query defines the gRPC querier service for gov module
var QueryService = exports.QueryService = {
  // Proposal queries proposal details based on ProposalID.
proposal: {
    path: '/cosmos.gov.v1beta2.Query/Proposal',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_gov_v1beta2_query_pb.QueryProposalRequest,
    responseType: cosmos_gov_v1beta2_query_pb.QueryProposalResponse,
    requestSerialize: serialize_cosmos_gov_v1beta2_QueryProposalRequest,
    requestDeserialize: deserialize_cosmos_gov_v1beta2_QueryProposalRequest,
    responseSerialize: serialize_cosmos_gov_v1beta2_QueryProposalResponse,
    responseDeserialize: deserialize_cosmos_gov_v1beta2_QueryProposalResponse,
  },
  // Proposals queries all proposals based on given status.
proposals: {
    path: '/cosmos.gov.v1beta2.Query/Proposals',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_gov_v1beta2_query_pb.QueryProposalsRequest,
    responseType: cosmos_gov_v1beta2_query_pb.QueryProposalsResponse,
    requestSerialize: serialize_cosmos_gov_v1beta2_QueryProposalsRequest,
    requestDeserialize: deserialize_cosmos_gov_v1beta2_QueryProposalsRequest,
    responseSerialize: serialize_cosmos_gov_v1beta2_QueryProposalsResponse,
    responseDeserialize: deserialize_cosmos_gov_v1beta2_QueryProposalsResponse,
  },
  // Vote queries voted information based on proposalID, voterAddr.
vote: {
    path: '/cosmos.gov.v1beta2.Query/Vote',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_gov_v1beta2_query_pb.QueryVoteRequest,
    responseType: cosmos_gov_v1beta2_query_pb.QueryVoteResponse,
    requestSerialize: serialize_cosmos_gov_v1beta2_QueryVoteRequest,
    requestDeserialize: deserialize_cosmos_gov_v1beta2_QueryVoteRequest,
    responseSerialize: serialize_cosmos_gov_v1beta2_QueryVoteResponse,
    responseDeserialize: deserialize_cosmos_gov_v1beta2_QueryVoteResponse,
  },
  // Votes queries votes of a given proposal.
votes: {
    path: '/cosmos.gov.v1beta2.Query/Votes',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_gov_v1beta2_query_pb.QueryVotesRequest,
    responseType: cosmos_gov_v1beta2_query_pb.QueryVotesResponse,
    requestSerialize: serialize_cosmos_gov_v1beta2_QueryVotesRequest,
    requestDeserialize: deserialize_cosmos_gov_v1beta2_QueryVotesRequest,
    responseSerialize: serialize_cosmos_gov_v1beta2_QueryVotesResponse,
    responseDeserialize: deserialize_cosmos_gov_v1beta2_QueryVotesResponse,
  },
  // Params queries all parameters of the gov module.
params: {
    path: '/cosmos.gov.v1beta2.Query/Params',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_gov_v1beta2_query_pb.QueryParamsRequest,
    responseType: cosmos_gov_v1beta2_query_pb.QueryParamsResponse,
    requestSerialize: serialize_cosmos_gov_v1beta2_QueryParamsRequest,
    requestDeserialize: deserialize_cosmos_gov_v1beta2_QueryParamsRequest,
    responseSerialize: serialize_cosmos_gov_v1beta2_QueryParamsResponse,
    responseDeserialize: deserialize_cosmos_gov_v1beta2_QueryParamsResponse,
  },
  // Deposit queries single deposit information based proposalID, depositAddr.
deposit: {
    path: '/cosmos.gov.v1beta2.Query/Deposit',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_gov_v1beta2_query_pb.QueryDepositRequest,
    responseType: cosmos_gov_v1beta2_query_pb.QueryDepositResponse,
    requestSerialize: serialize_cosmos_gov_v1beta2_QueryDepositRequest,
    requestDeserialize: deserialize_cosmos_gov_v1beta2_QueryDepositRequest,
    responseSerialize: serialize_cosmos_gov_v1beta2_QueryDepositResponse,
    responseDeserialize: deserialize_cosmos_gov_v1beta2_QueryDepositResponse,
  },
  // Deposits queries all deposits of a single proposal.
deposits: {
    path: '/cosmos.gov.v1beta2.Query/Deposits',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_gov_v1beta2_query_pb.QueryDepositsRequest,
    responseType: cosmos_gov_v1beta2_query_pb.QueryDepositsResponse,
    requestSerialize: serialize_cosmos_gov_v1beta2_QueryDepositsRequest,
    requestDeserialize: deserialize_cosmos_gov_v1beta2_QueryDepositsRequest,
    responseSerialize: serialize_cosmos_gov_v1beta2_QueryDepositsResponse,
    responseDeserialize: deserialize_cosmos_gov_v1beta2_QueryDepositsResponse,
  },
  // TallyResult queries the tally of a proposal vote.
tallyResult: {
    path: '/cosmos.gov.v1beta2.Query/TallyResult',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_gov_v1beta2_query_pb.QueryTallyResultRequest,
    responseType: cosmos_gov_v1beta2_query_pb.QueryTallyResultResponse,
    requestSerialize: serialize_cosmos_gov_v1beta2_QueryTallyResultRequest,
    requestDeserialize: deserialize_cosmos_gov_v1beta2_QueryTallyResultRequest,
    responseSerialize: serialize_cosmos_gov_v1beta2_QueryTallyResultResponse,
    responseDeserialize: deserialize_cosmos_gov_v1beta2_QueryTallyResultResponse,
  },
};

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService);
