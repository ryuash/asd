// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Since: cosmos-sdk 0.46
'use strict';
var grpc = require('@grpc/grpc-js');
var cosmos_gov_v1beta2_tx_pb = require('../../../cosmos/gov/v1beta2/tx_pb.js');
var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js');
var cosmos_gov_v1beta2_gov_pb = require('../../../cosmos/gov/v1beta2/gov_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var cosmos_msg_v1_msg_pb = require('../../../cosmos/msg/v1/msg_pb.js');

function serialize_cosmos_gov_v1beta2_MsgDeposit(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_tx_pb.MsgDeposit)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.MsgDeposit');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_MsgDeposit(buffer_arg) {
  return cosmos_gov_v1beta2_tx_pb.MsgDeposit.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_gov_v1beta2_MsgDepositResponse(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_tx_pb.MsgDepositResponse)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.MsgDepositResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_MsgDepositResponse(buffer_arg) {
  return cosmos_gov_v1beta2_tx_pb.MsgDepositResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_gov_v1beta2_MsgExecLegacyContent(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_tx_pb.MsgExecLegacyContent)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.MsgExecLegacyContent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_MsgExecLegacyContent(buffer_arg) {
  return cosmos_gov_v1beta2_tx_pb.MsgExecLegacyContent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_gov_v1beta2_MsgExecLegacyContentResponse(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_tx_pb.MsgExecLegacyContentResponse)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.MsgExecLegacyContentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_MsgExecLegacyContentResponse(buffer_arg) {
  return cosmos_gov_v1beta2_tx_pb.MsgExecLegacyContentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_gov_v1beta2_MsgSubmitProposal(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_tx_pb.MsgSubmitProposal)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.MsgSubmitProposal');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_MsgSubmitProposal(buffer_arg) {
  return cosmos_gov_v1beta2_tx_pb.MsgSubmitProposal.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_gov_v1beta2_MsgSubmitProposalResponse(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_tx_pb.MsgSubmitProposalResponse)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.MsgSubmitProposalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_MsgSubmitProposalResponse(buffer_arg) {
  return cosmos_gov_v1beta2_tx_pb.MsgSubmitProposalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_gov_v1beta2_MsgVote(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_tx_pb.MsgVote)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.MsgVote');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_MsgVote(buffer_arg) {
  return cosmos_gov_v1beta2_tx_pb.MsgVote.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_gov_v1beta2_MsgVoteResponse(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_tx_pb.MsgVoteResponse)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.MsgVoteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_MsgVoteResponse(buffer_arg) {
  return cosmos_gov_v1beta2_tx_pb.MsgVoteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_gov_v1beta2_MsgVoteWeighted(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_tx_pb.MsgVoteWeighted)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.MsgVoteWeighted');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_MsgVoteWeighted(buffer_arg) {
  return cosmos_gov_v1beta2_tx_pb.MsgVoteWeighted.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cosmos_gov_v1beta2_MsgVoteWeightedResponse(arg) {
  if (!(arg instanceof cosmos_gov_v1beta2_tx_pb.MsgVoteWeightedResponse)) {
    throw new Error('Expected argument of type cosmos.gov.v1beta2.MsgVoteWeightedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cosmos_gov_v1beta2_MsgVoteWeightedResponse(buffer_arg) {
  return cosmos_gov_v1beta2_tx_pb.MsgVoteWeightedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Msg defines the gov Msg service.
var MsgService = exports.MsgService = {
  // SubmitProposal defines a method to create new proposal given a content.
submitProposal: {
    path: '/cosmos.gov.v1beta2.Msg/SubmitProposal',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_gov_v1beta2_tx_pb.MsgSubmitProposal,
    responseType: cosmos_gov_v1beta2_tx_pb.MsgSubmitProposalResponse,
    requestSerialize: serialize_cosmos_gov_v1beta2_MsgSubmitProposal,
    requestDeserialize: deserialize_cosmos_gov_v1beta2_MsgSubmitProposal,
    responseSerialize: serialize_cosmos_gov_v1beta2_MsgSubmitProposalResponse,
    responseDeserialize: deserialize_cosmos_gov_v1beta2_MsgSubmitProposalResponse,
  },
  // ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
// to execute a legacy content-based proposal.
execLegacyContent: {
    path: '/cosmos.gov.v1beta2.Msg/ExecLegacyContent',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_gov_v1beta2_tx_pb.MsgExecLegacyContent,
    responseType: cosmos_gov_v1beta2_tx_pb.MsgExecLegacyContentResponse,
    requestSerialize: serialize_cosmos_gov_v1beta2_MsgExecLegacyContent,
    requestDeserialize: deserialize_cosmos_gov_v1beta2_MsgExecLegacyContent,
    responseSerialize: serialize_cosmos_gov_v1beta2_MsgExecLegacyContentResponse,
    responseDeserialize: deserialize_cosmos_gov_v1beta2_MsgExecLegacyContentResponse,
  },
  // Vote defines a method to add a vote on a specific proposal.
vote: {
    path: '/cosmos.gov.v1beta2.Msg/Vote',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_gov_v1beta2_tx_pb.MsgVote,
    responseType: cosmos_gov_v1beta2_tx_pb.MsgVoteResponse,
    requestSerialize: serialize_cosmos_gov_v1beta2_MsgVote,
    requestDeserialize: deserialize_cosmos_gov_v1beta2_MsgVote,
    responseSerialize: serialize_cosmos_gov_v1beta2_MsgVoteResponse,
    responseDeserialize: deserialize_cosmos_gov_v1beta2_MsgVoteResponse,
  },
  // VoteWeighted defines a method to add a weighted vote on a specific proposal.
voteWeighted: {
    path: '/cosmos.gov.v1beta2.Msg/VoteWeighted',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_gov_v1beta2_tx_pb.MsgVoteWeighted,
    responseType: cosmos_gov_v1beta2_tx_pb.MsgVoteWeightedResponse,
    requestSerialize: serialize_cosmos_gov_v1beta2_MsgVoteWeighted,
    requestDeserialize: deserialize_cosmos_gov_v1beta2_MsgVoteWeighted,
    responseSerialize: serialize_cosmos_gov_v1beta2_MsgVoteWeightedResponse,
    responseDeserialize: deserialize_cosmos_gov_v1beta2_MsgVoteWeightedResponse,
  },
  // Deposit defines a method to add deposit on a specific proposal.
deposit: {
    path: '/cosmos.gov.v1beta2.Msg/Deposit',
    requestStream: false,
    responseStream: false,
    requestType: cosmos_gov_v1beta2_tx_pb.MsgDeposit,
    responseType: cosmos_gov_v1beta2_tx_pb.MsgDepositResponse,
    requestSerialize: serialize_cosmos_gov_v1beta2_MsgDeposit,
    requestDeserialize: deserialize_cosmos_gov_v1beta2_MsgDeposit,
    responseSerialize: serialize_cosmos_gov_v1beta2_MsgDepositResponse,
    responseDeserialize: deserialize_cosmos_gov_v1beta2_MsgDepositResponse,
  },
};

exports.MsgClient = grpc.makeGenericClientConstructor(MsgService);
