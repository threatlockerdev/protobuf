// package: 
// file: util.proto

import * as jspb from "google-protobuf";

export class ActionReply extends jspb.Message {
  getOk(): boolean;
  setOk(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionReply.AsObject;
  static toObject(includeInstance: boolean, msg: ActionReply): ActionReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionReply;
  static deserializeBinaryFromReader(message: ActionReply, reader: jspb.BinaryReader): ActionReply;
}

export namespace ActionReply {
  export type AsObject = {
    ok: boolean,
  }
}

