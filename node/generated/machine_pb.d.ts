// package: 
// file: machine.proto

import * as jspb from "google-protobuf";

export class Machine extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPowerstate(): Machine.PowerStateMap[keyof Machine.PowerStateMap];
  setPowerstate(value: Machine.PowerStateMap[keyof Machine.PowerStateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Machine.AsObject;
  static toObject(includeInstance: boolean, msg: Machine): Machine.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Machine, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Machine;
  static deserializeBinaryFromReader(message: Machine, reader: jspb.BinaryReader): Machine;
}

export namespace Machine {
  export type AsObject = {
    id: string,
    name: string,
    powerstate: Machine.PowerStateMap[keyof Machine.PowerStateMap],
  }

  export interface PowerStateMap {
    UNKNOWN: 0;
    POWERED_ON: 1;
    POWERED_OFF: 2;
    SUSPENDED: 3;
  }

  export const PowerState: PowerStateMap;
}

export class GetMachinesRequest extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): void;
  addIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMachinesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMachinesRequest): GetMachinesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMachinesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMachinesRequest;
  static deserializeBinaryFromReader(message: GetMachinesRequest, reader: jspb.BinaryReader): GetMachinesRequest;
}

export namespace GetMachinesRequest {
  export type AsObject = {
    idsList: Array<string>,
  }
}

export class GetMachinesReply extends jspb.Message {
  clearMachinesList(): void;
  getMachinesList(): Array<Machine>;
  setMachinesList(value: Array<Machine>): void;
  addMachines(value?: Machine, index?: number): Machine;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMachinesReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetMachinesReply): GetMachinesReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMachinesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMachinesReply;
  static deserializeBinaryFromReader(message: GetMachinesReply, reader: jspb.BinaryReader): GetMachinesReply;
}

export namespace GetMachinesReply {
  export type AsObject = {
    machinesList: Array<Machine.AsObject>,
  }
}

