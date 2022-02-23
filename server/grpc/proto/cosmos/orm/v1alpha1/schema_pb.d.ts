// package: cosmos.orm.v1alpha1
// file: cosmos/orm/v1alpha1/schema.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class SchemaDescriptor extends jspb.Message {
  hasFiles(): boolean;
  clearFiles(): void;
  getFiles(): google_protobuf_descriptor_pb.FileDescriptorSet | undefined;
  setFiles(value?: google_protobuf_descriptor_pb.FileDescriptorSet): void;

  clearModulesList(): void;
  getModulesList(): Array<SchemaDescriptor.ModuleEntry>;
  setModulesList(value: Array<SchemaDescriptor.ModuleEntry>): void;
  addModules(value?: SchemaDescriptor.ModuleEntry, index?: number): SchemaDescriptor.ModuleEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchemaDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: SchemaDescriptor): SchemaDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SchemaDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchemaDescriptor;
  static deserializeBinaryFromReader(message: SchemaDescriptor, reader: jspb.BinaryReader): SchemaDescriptor;
}

export namespace SchemaDescriptor {
  export type AsObject = {
    files?: google_protobuf_descriptor_pb.FileDescriptorSet.AsObject,
    modulesList: Array<SchemaDescriptor.ModuleEntry.AsObject>,
  }

  export class ModuleEntry extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getPrefix(): Uint8Array | string;
    getPrefix_asU8(): Uint8Array;
    getPrefix_asB64(): string;
    setPrefix(value: Uint8Array | string): void;

    clearFilesList(): void;
    getFilesList(): Array<SchemaDescriptor.FileEntry>;
    setFilesList(value: Array<SchemaDescriptor.FileEntry>): void;
    addFiles(value?: SchemaDescriptor.FileEntry, index?: number): SchemaDescriptor.FileEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModuleEntry.AsObject;
    static toObject(includeInstance: boolean, msg: ModuleEntry): ModuleEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModuleEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModuleEntry;
    static deserializeBinaryFromReader(message: ModuleEntry, reader: jspb.BinaryReader): ModuleEntry;
  }

  export namespace ModuleEntry {
    export type AsObject = {
      name: string,
      prefix: Uint8Array | string,
      filesList: Array<SchemaDescriptor.FileEntry.AsObject>,
    }
  }

  export class FileEntry extends jspb.Message {
    getId(): number;
    setId(value: number): void;

    getFileName(): string;
    setFileName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileEntry.AsObject;
    static toObject(includeInstance: boolean, msg: FileEntry): FileEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileEntry;
    static deserializeBinaryFromReader(message: FileEntry, reader: jspb.BinaryReader): FileEntry;
  }

  export namespace FileEntry {
    export type AsObject = {
      id: number,
      fileName: string,
    }
  }
}

