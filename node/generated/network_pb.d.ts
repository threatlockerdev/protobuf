// package: 
// file: network.proto

import * as jspb from "google-protobuf";
import * as util_pb from "./util_pb";

export class BridgesRequest extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BridgesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BridgesRequest): BridgesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BridgesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BridgesRequest;
  static deserializeBinaryFromReader(message: BridgesRequest, reader: jspb.BinaryReader): BridgesRequest;
}

export namespace BridgesRequest {
  export type AsObject = {
    count: number,
  }
}

export class BridgesReply extends jspb.Message {
  clearBridgesList(): void;
  getBridgesList(): Array<string>;
  setBridgesList(value: Array<string>): void;
  addBridges(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BridgesReply.AsObject;
  static toObject(includeInstance: boolean, msg: BridgesReply): BridgesReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BridgesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BridgesReply;
  static deserializeBinaryFromReader(message: BridgesReply, reader: jspb.BinaryReader): BridgesReply;
}

export namespace BridgesReply {
  export type AsObject = {
    bridgesList: Array<string>,
  }
}

export class DHCPPrefixesRequest extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DHCPPrefixesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DHCPPrefixesRequest): DHCPPrefixesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DHCPPrefixesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DHCPPrefixesRequest;
  static deserializeBinaryFromReader(message: DHCPPrefixesRequest, reader: jspb.BinaryReader): DHCPPrefixesRequest;
}

export namespace DHCPPrefixesRequest {
  export type AsObject = {
    count: number,
  }
}

export class DHCPPrefixesReply extends jspb.Message {
  clearPrefixesList(): void;
  getPrefixesList(): Array<string>;
  setPrefixesList(value: Array<string>): void;
  addPrefixes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DHCPPrefixesReply.AsObject;
  static toObject(includeInstance: boolean, msg: DHCPPrefixesReply): DHCPPrefixesReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DHCPPrefixesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DHCPPrefixesReply;
  static deserializeBinaryFromReader(message: DHCPPrefixesReply, reader: jspb.BinaryReader): DHCPPrefixesReply;
}

export namespace DHCPPrefixesReply {
  export type AsObject = {
    prefixesList: Array<string>,
  }
}

export class Network extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  clearMachineidsList(): void;
  getMachineidsList(): Array<number>;
  setMachineidsList(value: Array<number>): void;
  addMachineids(value: number, index?: number): number;

  getDhcp(): boolean;
  setDhcp(value: boolean): void;

  getInternet(): boolean;
  setInternet(value: boolean): void;

  getXml(): string;
  setXml(value: string): void;

  getPromiscuous(): boolean;
  setPromiscuous(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Network.AsObject;
  static toObject(includeInstance: boolean, msg: Network): Network.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Network, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Network;
  static deserializeBinaryFromReader(message: Network, reader: jspb.BinaryReader): Network;
}

export namespace Network {
  export type AsObject = {
    id: string,
    name: string,
    machineidsList: Array<number>,
    dhcp: boolean,
    internet: boolean,
    xml: string,
    promiscuous: boolean,
  }
}

export class GetNetworksRequest extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): void;
  addIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNetworksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNetworksRequest): GetNetworksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNetworksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNetworksRequest;
  static deserializeBinaryFromReader(message: GetNetworksRequest, reader: jspb.BinaryReader): GetNetworksRequest;
}

export namespace GetNetworksRequest {
  export type AsObject = {
    idsList: Array<string>,
  }
}

export class GetNetworksReply extends jspb.Message {
  clearNetworksList(): void;
  getNetworksList(): Array<Network>;
  setNetworksList(value: Array<Network>): void;
  addNetworks(value?: Network, index?: number): Network;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNetworksReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetNetworksReply): GetNetworksReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNetworksReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNetworksReply;
  static deserializeBinaryFromReader(message: GetNetworksReply, reader: jspb.BinaryReader): GetNetworksReply;
}

export namespace GetNetworksReply {
  export type AsObject = {
    networksList: Array<Network.AsObject>,
  }
}

export class CreateNetworkRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getXml(): string;
  setXml(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNetworkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNetworkRequest): CreateNetworkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateNetworkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNetworkRequest;
  static deserializeBinaryFromReader(message: CreateNetworkRequest, reader: jspb.BinaryReader): CreateNetworkRequest;
}

export namespace CreateNetworkRequest {
  export type AsObject = {
    name: string,
    xml: string,
  }
}

export class CreateNetworkReply extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNetworkReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNetworkReply): CreateNetworkReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateNetworkReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNetworkReply;
  static deserializeBinaryFromReader(message: CreateNetworkReply, reader: jspb.BinaryReader): CreateNetworkReply;
}

export namespace CreateNetworkReply {
  export type AsObject = {
    id: string,
  }
}

export class UpdateNetworkFlagRequest extends jspb.Message {
  getNetworkid(): string;
  setNetworkid(value: string): void;

  getValue(): boolean;
  setValue(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNetworkFlagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNetworkFlagRequest): UpdateNetworkFlagRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateNetworkFlagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNetworkFlagRequest;
  static deserializeBinaryFromReader(message: UpdateNetworkFlagRequest, reader: jspb.BinaryReader): UpdateNetworkFlagRequest;
}

export namespace UpdateNetworkFlagRequest {
  export type AsObject = {
    networkid: string,
    value: boolean,
  }
}

