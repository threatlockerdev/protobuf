// package: 
// file: snapshot.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as util_pb from "./util_pb";

export class Snapshot extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasCreatedat(): boolean;
  clearCreatedat(): void;
  getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDescription(): string;
  setDescription(value: string): void;

  getParentname(): string;
  setParentname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Snapshot.AsObject;
  static toObject(includeInstance: boolean, msg: Snapshot): Snapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Snapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Snapshot;
  static deserializeBinaryFromReader(message: Snapshot, reader: jspb.BinaryReader): Snapshot;
}

export namespace Snapshot {
  export type AsObject = {
    name: string,
    createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    description: string,
    parentname: string,
  }
}

export class GetSnapshotsRequest extends jspb.Message {
  getMachineid(): string;
  setMachineid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSnapshotsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSnapshotsRequest): GetSnapshotsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSnapshotsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSnapshotsRequest;
  static deserializeBinaryFromReader(message: GetSnapshotsRequest, reader: jspb.BinaryReader): GetSnapshotsRequest;
}

export namespace GetSnapshotsRequest {
  export type AsObject = {
    machineid: string,
  }
}

export class GetSnapshotsReply extends jspb.Message {
  clearSnapshotsList(): void;
  getSnapshotsList(): Array<Snapshot>;
  setSnapshotsList(value: Array<Snapshot>): void;
  addSnapshots(value?: Snapshot, index?: number): Snapshot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSnapshotsReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetSnapshotsReply): GetSnapshotsReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSnapshotsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSnapshotsReply;
  static deserializeBinaryFromReader(message: GetSnapshotsReply, reader: jspb.BinaryReader): GetSnapshotsReply;
}

export namespace GetSnapshotsReply {
  export type AsObject = {
    snapshotsList: Array<Snapshot.AsObject>,
  }
}

export class GetSnapshotRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSnapshotRequest): GetSnapshotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSnapshotRequest;
  static deserializeBinaryFromReader(message: GetSnapshotRequest, reader: jspb.BinaryReader): GetSnapshotRequest;
}

export namespace GetSnapshotRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateSnapshotRequest extends jspb.Message {
  getMachineid(): string;
  setMachineid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSnapshotRequest): CreateSnapshotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSnapshotRequest;
  static deserializeBinaryFromReader(message: CreateSnapshotRequest, reader: jspb.BinaryReader): CreateSnapshotRequest;
}

export namespace CreateSnapshotRequest {
  export type AsObject = {
    machineid: string,
    name: string,
    description: string,
  }
}

