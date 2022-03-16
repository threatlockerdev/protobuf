// package: 
// file: disk.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as util_pb from "./util_pb";

export class CopyFileRequest extends jspb.Message {
  getFrom(): string;
  setFrom(value: string): void;

  getTo(): string;
  setTo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CopyFileRequest): CopyFileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyFileRequest;
  static deserializeBinaryFromReader(message: CopyFileRequest, reader: jspb.BinaryReader): CopyFileRequest;
}

export namespace CopyFileRequest {
  export type AsObject = {
    from: string,
    to: string,
  }
}

export class MoveFileRequest extends jspb.Message {
  getFrom(): string;
  setFrom(value: string): void;

  getTo(): string;
  setTo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveFileRequest): MoveFileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveFileRequest;
  static deserializeBinaryFromReader(message: MoveFileRequest, reader: jspb.BinaryReader): MoveFileRequest;
}

export namespace MoveFileRequest {
  export type AsObject = {
    from: string,
    to: string,
  }
}

export class UpdateDiskBackingRequest extends jspb.Message {
  getDiskpath(): string;
  setDiskpath(value: string): void;

  getBackingpath(): string;
  setBackingpath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDiskBackingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDiskBackingRequest): UpdateDiskBackingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDiskBackingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDiskBackingRequest;
  static deserializeBinaryFromReader(message: UpdateDiskBackingRequest, reader: jspb.BinaryReader): UpdateDiskBackingRequest;
}

export namespace UpdateDiskBackingRequest {
  export type AsObject = {
    diskpath: string,
    backingpath: string,
  }
}

export class FileInfo extends jspb.Message {
  hasModifiedat(): boolean;
  clearModifiedat(): void;
  getModifiedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getIsdirectory(): boolean;
  setIsdirectory(value: boolean): void;

  getSize(): number;
  setSize(value: number): void;

  getFlags(): number;
  setFlags(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FileInfo): FileInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileInfo;
  static deserializeBinaryFromReader(message: FileInfo, reader: jspb.BinaryReader): FileInfo;
}

export namespace FileInfo {
  export type AsObject = {
    modifiedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isdirectory: boolean,
    size: number,
    flags: number,
  }
}

export class FileRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FileRequest): FileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileRequest;
  static deserializeBinaryFromReader(message: FileRequest, reader: jspb.BinaryReader): FileRequest;
}

export namespace FileRequest {
  export type AsObject = {
    path: string,
  }
}

export class GetFileContentsReply extends jspb.Message {
  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileContentsReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileContentsReply): GetFileContentsReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFileContentsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileContentsReply;
  static deserializeBinaryFromReader(message: GetFileContentsReply, reader: jspb.BinaryReader): GetFileContentsReply;
}

export namespace GetFileContentsReply {
  export type AsObject = {
    data: string,
  }
}

export class GetFileExistsReply extends jspb.Message {
  getExists(): boolean;
  setExists(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileExistsReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileExistsReply): GetFileExistsReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFileExistsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileExistsReply;
  static deserializeBinaryFromReader(message: GetFileExistsReply, reader: jspb.BinaryReader): GetFileExistsReply;
}

export namespace GetFileExistsReply {
  export type AsObject = {
    exists: boolean,
  }
}

export class GetFileInfoReply extends jspb.Message {
  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): FileInfo | undefined;
  setInfo(value?: FileInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileInfoReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileInfoReply): GetFileInfoReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFileInfoReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileInfoReply;
  static deserializeBinaryFromReader(message: GetFileInfoReply, reader: jspb.BinaryReader): GetFileInfoReply;
}

export namespace GetFileInfoReply {
  export type AsObject = {
    info?: FileInfo.AsObject,
  }
}

export class GetFileSizeReply extends jspb.Message {
  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileSizeReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileSizeReply): GetFileSizeReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFileSizeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileSizeReply;
  static deserializeBinaryFromReader(message: GetFileSizeReply, reader: jspb.BinaryReader): GetFileSizeReply;
}

export namespace GetFileSizeReply {
  export type AsObject = {
    size: number,
  }
}

export class WriteFileRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getData(): string;
  setData(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WriteFileRequest): WriteFileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WriteFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteFileRequest;
  static deserializeBinaryFromReader(message: WriteFileRequest, reader: jspb.BinaryReader): WriteFileRequest;
}

export namespace WriteFileRequest {
  export type AsObject = {
    path: string,
    data: string,
    url: string,
  }
}

