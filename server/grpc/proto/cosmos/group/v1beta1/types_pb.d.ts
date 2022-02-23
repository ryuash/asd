// package: cosmos.group.v1beta1
// file: cosmos/group/v1beta1/types.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as cosmos_proto_cosmos_pb from "../../../cosmos_proto/cosmos_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class Member extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getWeight(): string;
  setWeight(value: string): void;

  getMetadata(): Uint8Array | string;
  getMetadata_asU8(): Uint8Array;
  getMetadata_asB64(): string;
  setMetadata(value: Uint8Array | string): void;

  hasAddedAt(): boolean;
  clearAddedAt(): void;
  getAddedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAddedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Member.AsObject;
  static toObject(includeInstance: boolean, msg: Member): Member.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Member, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Member;
  static deserializeBinaryFromReader(message: Member, reader: jspb.BinaryReader): Member;
}

export namespace Member {
  export type AsObject = {
    address: string,
    weight: string,
    metadata: Uint8Array | string,
    addedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Members extends jspb.Message {
  clearMembersList(): void;
  getMembersList(): Array<Member>;
  setMembersList(value: Array<Member>): void;
  addMembers(value?: Member, index?: number): Member;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Members.AsObject;
  static toObject(includeInstance: boolean, msg: Members): Members.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Members, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Members;
  static deserializeBinaryFromReader(message: Members, reader: jspb.BinaryReader): Members;
}

export namespace Members {
  export type AsObject = {
    membersList: Array<Member.AsObject>,
  }
}

export class ThresholdDecisionPolicy extends jspb.Message {
  getThreshold(): string;
  setThreshold(value: string): void;

  hasTimeout(): boolean;
  clearTimeout(): void;
  getTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setTimeout(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThresholdDecisionPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: ThresholdDecisionPolicy): ThresholdDecisionPolicy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ThresholdDecisionPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThresholdDecisionPolicy;
  static deserializeBinaryFromReader(message: ThresholdDecisionPolicy, reader: jspb.BinaryReader): ThresholdDecisionPolicy;
}

export namespace ThresholdDecisionPolicy {
  export type AsObject = {
    threshold: string,
    timeout?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class PercentageDecisionPolicy extends jspb.Message {
  getPercentage(): string;
  setPercentage(value: string): void;

  hasTimeout(): boolean;
  clearTimeout(): void;
  getTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setTimeout(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PercentageDecisionPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: PercentageDecisionPolicy): PercentageDecisionPolicy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PercentageDecisionPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PercentageDecisionPolicy;
  static deserializeBinaryFromReader(message: PercentageDecisionPolicy, reader: jspb.BinaryReader): PercentageDecisionPolicy;
}

export namespace PercentageDecisionPolicy {
  export type AsObject = {
    percentage: string,
    timeout?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class GroupInfo extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getAdmin(): string;
  setAdmin(value: string): void;

  getMetadata(): Uint8Array | string;
  getMetadata_asU8(): Uint8Array;
  getMetadata_asB64(): string;
  setMetadata(value: Uint8Array | string): void;

  getVersion(): number;
  setVersion(value: number): void;

  getTotalWeight(): string;
  setTotalWeight(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupInfo.AsObject;
  static toObject(includeInstance: boolean, msg: GroupInfo): GroupInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupInfo;
  static deserializeBinaryFromReader(message: GroupInfo, reader: jspb.BinaryReader): GroupInfo;
}

export namespace GroupInfo {
  export type AsObject = {
    id: number,
    admin: string,
    metadata: Uint8Array | string,
    version: number,
    totalWeight: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GroupMember extends jspb.Message {
  getGroupId(): number;
  setGroupId(value: number): void;

  hasMember(): boolean;
  clearMember(): void;
  getMember(): Member | undefined;
  setMember(value?: Member): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupMember.AsObject;
  static toObject(includeInstance: boolean, msg: GroupMember): GroupMember.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupMember, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupMember;
  static deserializeBinaryFromReader(message: GroupMember, reader: jspb.BinaryReader): GroupMember;
}

export namespace GroupMember {
  export type AsObject = {
    groupId: number,
    member?: Member.AsObject,
  }
}

export class GroupPolicyInfo extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getGroupId(): number;
  setGroupId(value: number): void;

  getAdmin(): string;
  setAdmin(value: string): void;

  getMetadata(): Uint8Array | string;
  getMetadata_asU8(): Uint8Array;
  getMetadata_asB64(): string;
  setMetadata(value: Uint8Array | string): void;

  getVersion(): number;
  setVersion(value: number): void;

  hasDecisionPolicy(): boolean;
  clearDecisionPolicy(): void;
  getDecisionPolicy(): google_protobuf_any_pb.Any | undefined;
  setDecisionPolicy(value?: google_protobuf_any_pb.Any): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupPolicyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: GroupPolicyInfo): GroupPolicyInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupPolicyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupPolicyInfo;
  static deserializeBinaryFromReader(message: GroupPolicyInfo, reader: jspb.BinaryReader): GroupPolicyInfo;
}

export namespace GroupPolicyInfo {
  export type AsObject = {
    address: string,
    groupId: number,
    admin: string,
    metadata: Uint8Array | string,
    version: number,
    decisionPolicy?: google_protobuf_any_pb.Any.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Proposal extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getAddress(): string;
  setAddress(value: string): void;

  getMetadata(): Uint8Array | string;
  getMetadata_asU8(): Uint8Array;
  getMetadata_asB64(): string;
  setMetadata(value: Uint8Array | string): void;

  clearProposersList(): void;
  getProposersList(): Array<string>;
  setProposersList(value: Array<string>): void;
  addProposers(value: string, index?: number): string;

  hasSubmitTime(): boolean;
  clearSubmitTime(): void;
  getSubmitTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSubmitTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getGroupVersion(): number;
  setGroupVersion(value: number): void;

  getGroupPolicyVersion(): number;
  setGroupPolicyVersion(value: number): void;

  getStatus(): ProposalStatusMap[keyof ProposalStatusMap];
  setStatus(value: ProposalStatusMap[keyof ProposalStatusMap]): void;

  getResult(): ProposalResultMap[keyof ProposalResultMap];
  setResult(value: ProposalResultMap[keyof ProposalResultMap]): void;

  hasFinalTallyResult(): boolean;
  clearFinalTallyResult(): void;
  getFinalTallyResult(): TallyResult | undefined;
  setFinalTallyResult(value?: TallyResult): void;

  hasTimeout(): boolean;
  clearTimeout(): void;
  getTimeout(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeout(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getExecutorResult(): ProposalExecutorResultMap[keyof ProposalExecutorResultMap];
  setExecutorResult(value: ProposalExecutorResultMap[keyof ProposalExecutorResultMap]): void;

  clearMessagesList(): void;
  getMessagesList(): Array<google_protobuf_any_pb.Any>;
  setMessagesList(value: Array<google_protobuf_any_pb.Any>): void;
  addMessages(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Proposal.AsObject;
  static toObject(includeInstance: boolean, msg: Proposal): Proposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Proposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Proposal;
  static deserializeBinaryFromReader(message: Proposal, reader: jspb.BinaryReader): Proposal;
}

export namespace Proposal {
  export type AsObject = {
    id: number,
    address: string,
    metadata: Uint8Array | string,
    proposersList: Array<string>,
    submitTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    groupVersion: number,
    groupPolicyVersion: number,
    status: ProposalStatusMap[keyof ProposalStatusMap],
    result: ProposalResultMap[keyof ProposalResultMap],
    finalTallyResult?: TallyResult.AsObject,
    timeout?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    executorResult: ProposalExecutorResultMap[keyof ProposalExecutorResultMap],
    messagesList: Array<google_protobuf_any_pb.Any.AsObject>,
  }
}

export class TallyResult extends jspb.Message {
  getYesCount(): string;
  setYesCount(value: string): void;

  getAbstainCount(): string;
  setAbstainCount(value: string): void;

  getNoCount(): string;
  setNoCount(value: string): void;

  getNoWithVetoCount(): string;
  setNoWithVetoCount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TallyResult.AsObject;
  static toObject(includeInstance: boolean, msg: TallyResult): TallyResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TallyResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TallyResult;
  static deserializeBinaryFromReader(message: TallyResult, reader: jspb.BinaryReader): TallyResult;
}

export namespace TallyResult {
  export type AsObject = {
    yesCount: string,
    abstainCount: string,
    noCount: string,
    noWithVetoCount: string,
  }
}

export class Vote extends jspb.Message {
  getProposalId(): number;
  setProposalId(value: number): void;

  getVoter(): string;
  setVoter(value: string): void;

  getOption(): VoteOptionMap[keyof VoteOptionMap];
  setOption(value: VoteOptionMap[keyof VoteOptionMap]): void;

  getMetadata(): Uint8Array | string;
  getMetadata_asU8(): Uint8Array;
  getMetadata_asB64(): string;
  setMetadata(value: Uint8Array | string): void;

  hasSubmitTime(): boolean;
  clearSubmitTime(): void;
  getSubmitTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSubmitTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vote.AsObject;
  static toObject(includeInstance: boolean, msg: Vote): Vote.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Vote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vote;
  static deserializeBinaryFromReader(message: Vote, reader: jspb.BinaryReader): Vote;
}

export namespace Vote {
  export type AsObject = {
    proposalId: number,
    voter: string,
    option: VoteOptionMap[keyof VoteOptionMap],
    metadata: Uint8Array | string,
    submitTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export interface VoteOptionMap {
  VOTE_OPTION_UNSPECIFIED: 0;
  VOTE_OPTION_YES: 1;
  VOTE_OPTION_ABSTAIN: 2;
  VOTE_OPTION_NO: 3;
  VOTE_OPTION_NO_WITH_VETO: 4;
}

export const VoteOption: VoteOptionMap;

export interface ProposalStatusMap {
  PROPOSAL_STATUS_UNSPECIFIED: 0;
  PROPOSAL_STATUS_SUBMITTED: 1;
  PROPOSAL_STATUS_CLOSED: 2;
  PROPOSAL_STATUS_ABORTED: 3;
  PROPOSAL_STATUS_WITHDRAWN: 4;
}

export const ProposalStatus: ProposalStatusMap;

export interface ProposalResultMap {
  PROPOSAL_RESULT_UNSPECIFIED: 0;
  PROPOSAL_RESULT_UNFINALIZED: 1;
  PROPOSAL_RESULT_ACCEPTED: 2;
  PROPOSAL_RESULT_REJECTED: 3;
}

export const ProposalResult: ProposalResultMap;

export interface ProposalExecutorResultMap {
  PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED: 0;
  PROPOSAL_EXECUTOR_RESULT_NOT_RUN: 1;
  PROPOSAL_EXECUTOR_RESULT_SUCCESS: 2;
  PROPOSAL_EXECUTOR_RESULT_FAILURE: 3;
}

export const ProposalExecutorResult: ProposalExecutorResultMap;

