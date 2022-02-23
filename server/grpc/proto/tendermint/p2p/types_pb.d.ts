// package: tendermint.p2p
// file: tendermint/p2p/types.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../gogoproto/gogo_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ProtocolVersion extends jspb.Message {
  getP2p(): number;
  setP2p(value: number): void;

  getBlock(): number;
  setBlock(value: number): void;

  getApp(): number;
  setApp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProtocolVersion.AsObject;
  static toObject(includeInstance: boolean, msg: ProtocolVersion): ProtocolVersion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProtocolVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProtocolVersion;
  static deserializeBinaryFromReader(message: ProtocolVersion, reader: jspb.BinaryReader): ProtocolVersion;
}

export namespace ProtocolVersion {
  export type AsObject = {
    p2p: number,
    block: number,
    app: number,
  }
}

export class NodeInfo extends jspb.Message {
  hasProtocolVersion(): boolean;
  clearProtocolVersion(): void;
  getProtocolVersion(): ProtocolVersion | undefined;
  setProtocolVersion(value?: ProtocolVersion): void;

  getNodeId(): string;
  setNodeId(value: string): void;

  getListenAddr(): string;
  setListenAddr(value: string): void;

  getNetwork(): string;
  setNetwork(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getChannels(): Uint8Array | string;
  getChannels_asU8(): Uint8Array;
  getChannels_asB64(): string;
  setChannels(value: Uint8Array | string): void;

  getMoniker(): string;
  setMoniker(value: string): void;

  hasOther(): boolean;
  clearOther(): void;
  getOther(): NodeInfoOther | undefined;
  setOther(value?: NodeInfoOther): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: NodeInfo): NodeInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeInfo;
  static deserializeBinaryFromReader(message: NodeInfo, reader: jspb.BinaryReader): NodeInfo;
}

export namespace NodeInfo {
  export type AsObject = {
    protocolVersion?: ProtocolVersion.AsObject,
    nodeId: string,
    listenAddr: string,
    network: string,
    version: string,
    channels: Uint8Array | string,
    moniker: string,
    other?: NodeInfoOther.AsObject,
  }
}

export class NodeInfoOther extends jspb.Message {
  getTxIndex(): string;
  setTxIndex(value: string): void;

  getRpcAddress(): string;
  setRpcAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeInfoOther.AsObject;
  static toObject(includeInstance: boolean, msg: NodeInfoOther): NodeInfoOther.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeInfoOther, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeInfoOther;
  static deserializeBinaryFromReader(message: NodeInfoOther, reader: jspb.BinaryReader): NodeInfoOther;
}

export namespace NodeInfoOther {
  export type AsObject = {
    txIndex: string,
    rpcAddress: string,
  }
}

export class PeerInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearAddressInfoList(): void;
  getAddressInfoList(): Array<PeerAddressInfo>;
  setAddressInfoList(value: Array<PeerAddressInfo>): void;
  addAddressInfo(value?: PeerAddressInfo, index?: number): PeerAddressInfo;

  hasLastConnected(): boolean;
  clearLastConnected(): void;
  getLastConnected(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastConnected(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PeerInfo): PeerInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PeerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerInfo;
  static deserializeBinaryFromReader(message: PeerInfo, reader: jspb.BinaryReader): PeerInfo;
}

export namespace PeerInfo {
  export type AsObject = {
    id: string,
    addressInfoList: Array<PeerAddressInfo.AsObject>,
    lastConnected?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class PeerAddressInfo extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  hasLastDialSuccess(): boolean;
  clearLastDialSuccess(): void;
  getLastDialSuccess(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastDialSuccess(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastDialFailure(): boolean;
  clearLastDialFailure(): void;
  getLastDialFailure(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastDialFailure(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDialFailures(): number;
  setDialFailures(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerAddressInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PeerAddressInfo): PeerAddressInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PeerAddressInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerAddressInfo;
  static deserializeBinaryFromReader(message: PeerAddressInfo, reader: jspb.BinaryReader): PeerAddressInfo;
}

export namespace PeerAddressInfo {
  export type AsObject = {
    address: string,
    lastDialSuccess?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastDialFailure?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dialFailures: number,
  }
}

