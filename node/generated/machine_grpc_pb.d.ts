// GENERATED CODE -- DO NOT EDIT!

// package: 
// file: machine.proto

import * as machine_pb from "./machine_pb";
import * as util_pb from "./util_pb";
import * as grpc from "@grpc/grpc-js";

interface IMachineServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getVncPort: grpc.MethodDefinition<machine_pb.GetMachineRequest, machine_pb.GetVncPortReply>;
  getMany: grpc.MethodDefinition<machine_pb.GetMachinesRequest, machine_pb.GetMachinesReply>;
  create: grpc.MethodDefinition<machine_pb.CreateMachineRequest, machine_pb.CreateMachineReply>;
  delete: grpc.MethodDefinition<machine_pb.GetMachinesRequest, util_pb.ActionReply>;
  start: grpc.MethodDefinition<machine_pb.GetMachinesRequest, util_pb.ActionReply>;
  stop: grpc.MethodDefinition<machine_pb.StopMachinesRequest, util_pb.ActionReply>;
  linkNetwork: grpc.MethodDefinition<machine_pb.MachineNetworkRequest, machine_pb.LinkNetworkReply>;
  unlinkNetwork: grpc.MethodDefinition<machine_pb.MachineNetworkRequest, util_pb.ActionReply>;
  updateBootType: grpc.MethodDefinition<machine_pb.UpdateMachineBootTypeRequest, util_pb.ActionReply>;
  updateCpus: grpc.MethodDefinition<machine_pb.UpdateMachineCpusRequest, util_pb.ActionReply>;
  updateMemory: grpc.MethodDefinition<machine_pb.UpdateMachineMemoryRequest, util_pb.ActionReply>;
}

export const MachineServiceService: IMachineServiceService;

export interface IMachineServiceServer extends grpc.UntypedServiceImplementation {
  getVncPort: grpc.handleUnaryCall<machine_pb.GetMachineRequest, machine_pb.GetVncPortReply>;
  getMany: grpc.handleUnaryCall<machine_pb.GetMachinesRequest, machine_pb.GetMachinesReply>;
  create: grpc.handleUnaryCall<machine_pb.CreateMachineRequest, machine_pb.CreateMachineReply>;
  delete: grpc.handleUnaryCall<machine_pb.GetMachinesRequest, util_pb.ActionReply>;
  start: grpc.handleUnaryCall<machine_pb.GetMachinesRequest, util_pb.ActionReply>;
  stop: grpc.handleUnaryCall<machine_pb.StopMachinesRequest, util_pb.ActionReply>;
  linkNetwork: grpc.handleUnaryCall<machine_pb.MachineNetworkRequest, machine_pb.LinkNetworkReply>;
  unlinkNetwork: grpc.handleUnaryCall<machine_pb.MachineNetworkRequest, util_pb.ActionReply>;
  updateBootType: grpc.handleUnaryCall<machine_pb.UpdateMachineBootTypeRequest, util_pb.ActionReply>;
  updateCpus: grpc.handleUnaryCall<machine_pb.UpdateMachineCpusRequest, util_pb.ActionReply>;
  updateMemory: grpc.handleUnaryCall<machine_pb.UpdateMachineMemoryRequest, util_pb.ActionReply>;
}

export class MachineServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getVncPort(argument: machine_pb.GetMachineRequest, callback: grpc.requestCallback<machine_pb.GetVncPortReply>): grpc.ClientUnaryCall;
  getVncPort(argument: machine_pb.GetMachineRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<machine_pb.GetVncPortReply>): grpc.ClientUnaryCall;
  getVncPort(argument: machine_pb.GetMachineRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<machine_pb.GetVncPortReply>): grpc.ClientUnaryCall;
  getMany(argument: machine_pb.GetMachinesRequest, callback: grpc.requestCallback<machine_pb.GetMachinesReply>): grpc.ClientUnaryCall;
  getMany(argument: machine_pb.GetMachinesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<machine_pb.GetMachinesReply>): grpc.ClientUnaryCall;
  getMany(argument: machine_pb.GetMachinesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<machine_pb.GetMachinesReply>): grpc.ClientUnaryCall;
  create(argument: machine_pb.CreateMachineRequest, callback: grpc.requestCallback<machine_pb.CreateMachineReply>): grpc.ClientUnaryCall;
  create(argument: machine_pb.CreateMachineRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<machine_pb.CreateMachineReply>): grpc.ClientUnaryCall;
  create(argument: machine_pb.CreateMachineRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<machine_pb.CreateMachineReply>): grpc.ClientUnaryCall;
  delete(argument: machine_pb.GetMachinesRequest, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  delete(argument: machine_pb.GetMachinesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  delete(argument: machine_pb.GetMachinesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  start(argument: machine_pb.GetMachinesRequest, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  start(argument: machine_pb.GetMachinesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  start(argument: machine_pb.GetMachinesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  stop(argument: machine_pb.StopMachinesRequest, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  stop(argument: machine_pb.StopMachinesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  stop(argument: machine_pb.StopMachinesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  linkNetwork(argument: machine_pb.MachineNetworkRequest, callback: grpc.requestCallback<machine_pb.LinkNetworkReply>): grpc.ClientUnaryCall;
  linkNetwork(argument: machine_pb.MachineNetworkRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<machine_pb.LinkNetworkReply>): grpc.ClientUnaryCall;
  linkNetwork(argument: machine_pb.MachineNetworkRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<machine_pb.LinkNetworkReply>): grpc.ClientUnaryCall;
  unlinkNetwork(argument: machine_pb.MachineNetworkRequest, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  unlinkNetwork(argument: machine_pb.MachineNetworkRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  unlinkNetwork(argument: machine_pb.MachineNetworkRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  updateBootType(argument: machine_pb.UpdateMachineBootTypeRequest, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  updateBootType(argument: machine_pb.UpdateMachineBootTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  updateBootType(argument: machine_pb.UpdateMachineBootTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  updateCpus(argument: machine_pb.UpdateMachineCpusRequest, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  updateCpus(argument: machine_pb.UpdateMachineCpusRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  updateCpus(argument: machine_pb.UpdateMachineCpusRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  updateMemory(argument: machine_pb.UpdateMachineMemoryRequest, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  updateMemory(argument: machine_pb.UpdateMachineMemoryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  updateMemory(argument: machine_pb.UpdateMachineMemoryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
}
