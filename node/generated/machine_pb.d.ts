// package: 
// file: machine.proto

import * as jspb from "google-protobuf";
import * as network_pb from "./network_pb";
import * as util_pb from "./util_pb";

export class MachineDisk extends jspb.Message {
  getMounttarget(): string;
  setMounttarget(value: string): void;

  getSourcefile(): string;
  setSourcefile(value: string): void;

  getVirtualsize(): number;
  setVirtualsize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MachineDisk.AsObject;
  static toObject(includeInstance: boolean, msg: MachineDisk): MachineDisk.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MachineDisk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MachineDisk;
  static deserializeBinaryFromReader(message: MachineDisk, reader: jspb.BinaryReader): MachineDisk;
}

export namespace MachineDisk {
  export type AsObject = {
    mounttarget: string,
    sourcefile: string,
    virtualsize: number,
  }
}

export class Machine extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPowerstate(): Machine.PowerStateMap[keyof Machine.PowerStateMap];
  setPowerstate(value: Machine.PowerStateMap[keyof Machine.PowerStateMap]): void;

  clearDisksList(): void;
  getDisksList(): Array<MachineDisk>;
  setDisksList(value: Array<MachineDisk>): void;
  addDisks(value?: MachineDisk, index?: number): MachineDisk;

  clearNetworksList(): void;
  getNetworksList(): Array<network_pb.Network>;
  setNetworksList(value: Array<network_pb.Network>): void;
  addNetworks(value?: network_pb.Network, index?: number): network_pb.Network;

  getXml(): string;
  setXml(value: string): void;

  getBoottype(): Machine.BootTypeMap[keyof Machine.BootTypeMap];
  setBoottype(value: Machine.BootTypeMap[keyof Machine.BootTypeMap]): void;

  getCpus(): number;
  setCpus(value: number): void;

  getMemory(): number;
  setMemory(value: number): void;

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
    disksList: Array<MachineDisk.AsObject>,
    networksList: Array<network_pb.Network.AsObject>,
    xml: string,
    boottype: Machine.BootTypeMap[keyof Machine.BootTypeMap],
    cpus: number,
    memory: number,
  }

  export interface PowerStateMap {
    UNKNOWN: 0;
    POWERED_ON: 1;
    POWERED_OFF: 2;
    SUSPENDED: 3;
  }

  export const PowerState: PowerStateMap;

  export interface BootTypeMap {
    BIOS: 0;
    UEFI: 1;
  }

  export const BootType: BootTypeMap;
}

export class GetMachineRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMachineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMachineRequest): GetMachineRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMachineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMachineRequest;
  static deserializeBinaryFromReader(message: GetMachineRequest, reader: jspb.BinaryReader): GetMachineRequest;
}

export namespace GetMachineRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetVncPortReply extends jspb.Message {
  getPort(): number;
  setPort(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVncPortReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetVncPortReply): GetVncPortReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVncPortReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVncPortReply;
  static deserializeBinaryFromReader(message: GetVncPortReply, reader: jspb.BinaryReader): GetVncPortReply;
}

export namespace GetVncPortReply {
  export type AsObject = {
    port: number,
  }
}

export class GetMachinesRequest extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): void;
  addIds(value: string, index?: number): string;

  clearFieldsList(): void;
  getFieldsList(): Array<string>;
  setFieldsList(value: Array<string>): void;
  addFields(value: string, index?: number): string;

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
    fieldsList: Array<string>,
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

export class CreateMachineRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCpucount(): number;
  setCpucount(value: number): void;

  getMemory(): number;
  setMemory(value: number): void;

  getDiskpath(): string;
  setDiskpath(value: string): void;

  getXml(): string;
  setXml(value: string): void;

  getBoottype(): Machine.BootTypeMap[keyof Machine.BootTypeMap];
  setBoottype(value: Machine.BootTypeMap[keyof Machine.BootTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMachineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMachineRequest): CreateMachineRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMachineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMachineRequest;
  static deserializeBinaryFromReader(message: CreateMachineRequest, reader: jspb.BinaryReader): CreateMachineRequest;
}

export namespace CreateMachineRequest {
  export type AsObject = {
    name: string,
    cpucount: number,
    memory: number,
    diskpath: string,
    xml: string,
    boottype: Machine.BootTypeMap[keyof Machine.BootTypeMap],
  }
}

export class CreateMachineReply extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMachineReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMachineReply): CreateMachineReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMachineReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMachineReply;
  static deserializeBinaryFromReader(message: CreateMachineReply, reader: jspb.BinaryReader): CreateMachineReply;
}

export namespace CreateMachineReply {
  export type AsObject = {
    id: string,
  }
}

export class MachineNetworkRequest extends jspb.Message {
  getMachineid(): string;
  setMachineid(value: string): void;

  getNetworkid(): string;
  setNetworkid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MachineNetworkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MachineNetworkRequest): MachineNetworkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MachineNetworkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MachineNetworkRequest;
  static deserializeBinaryFromReader(message: MachineNetworkRequest, reader: jspb.BinaryReader): MachineNetworkRequest;
}

export namespace MachineNetworkRequest {
  export type AsObject = {
    machineid: string,
    networkid: string,
  }
}

export class StopMachinesRequest extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): void;
  addIds(value: string, index?: number): string;

  getForce(): boolean;
  setForce(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopMachinesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopMachinesRequest): StopMachinesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopMachinesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopMachinesRequest;
  static deserializeBinaryFromReader(message: StopMachinesRequest, reader: jspb.BinaryReader): StopMachinesRequest;
}

export namespace StopMachinesRequest {
  export type AsObject = {
    idsList: Array<string>,
    force: boolean,
  }
}

export class UpdateMachineBootTypeRequest extends jspb.Message {
  getMachineid(): string;
  setMachineid(value: string): void;

  getBoottype(): Machine.BootTypeMap[keyof Machine.BootTypeMap];
  setBoottype(value: Machine.BootTypeMap[keyof Machine.BootTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMachineBootTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMachineBootTypeRequest): UpdateMachineBootTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMachineBootTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMachineBootTypeRequest;
  static deserializeBinaryFromReader(message: UpdateMachineBootTypeRequest, reader: jspb.BinaryReader): UpdateMachineBootTypeRequest;
}

export namespace UpdateMachineBootTypeRequest {
  export type AsObject = {
    machineid: string,
    boottype: Machine.BootTypeMap[keyof Machine.BootTypeMap],
  }
}

export class UpdateMachineCpusRequest extends jspb.Message {
  getMachineid(): string;
  setMachineid(value: string): void;

  getCpus(): number;
  setCpus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMachineCpusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMachineCpusRequest): UpdateMachineCpusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMachineCpusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMachineCpusRequest;
  static deserializeBinaryFromReader(message: UpdateMachineCpusRequest, reader: jspb.BinaryReader): UpdateMachineCpusRequest;
}

export namespace UpdateMachineCpusRequest {
  export type AsObject = {
    machineid: string,
    cpus: number,
  }
}

export class UpdateMachineMemoryRequest extends jspb.Message {
  getMachineid(): string;
  setMachineid(value: string): void;

  getMemory(): number;
  setMemory(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMachineMemoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMachineMemoryRequest): UpdateMachineMemoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMachineMemoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMachineMemoryRequest;
  static deserializeBinaryFromReader(message: UpdateMachineMemoryRequest, reader: jspb.BinaryReader): UpdateMachineMemoryRequest;
}

export namespace UpdateMachineMemoryRequest {
  export type AsObject = {
    machineid: string,
    memory: number,
  }
}

