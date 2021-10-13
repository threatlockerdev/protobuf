// package: 
// file: disk.proto

import * as jspb from "google-protobuf";
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

