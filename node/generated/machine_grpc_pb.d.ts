// GENERATED CODE -- DO NOT EDIT!

// package: 
// file: machine.proto

import * as machine_pb from "./machine_pb";
import * as util_pb from "./util_pb";
import * as grpc from "@grpc/grpc-js";

interface IMachineServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getMany: grpc.MethodDefinition<machine_pb.GetMachinesRequest, machine_pb.GetMachinesReply>;
  create: grpc.MethodDefinition<machine_pb.CreateMachineRequest, machine_pb.CreateMachineReply>;
  delete: grpc.MethodDefinition<machine_pb.GetMachinesRequest, util_pb.ActionReply>;
  start: grpc.MethodDefinition<machine_pb.GetMachinesRequest, util_pb.ActionReply>;
  stop: grpc.MethodDefinition<machine_pb.StopMachinesRequest, util_pb.ActionReply>;
}

export const MachineServiceService: IMachineServiceService;

export interface IMachineServiceServer extends grpc.UntypedServiceImplementation {
  getMany: grpc.handleUnaryCall<machine_pb.GetMachinesRequest, machine_pb.GetMachinesReply>;
  create: grpc.handleUnaryCall<machine_pb.CreateMachineRequest, machine_pb.CreateMachineReply>;
  delete: grpc.handleUnaryCall<machine_pb.GetMachinesRequest, util_pb.ActionReply>;
  start: grpc.handleUnaryCall<machine_pb.GetMachinesRequest, util_pb.ActionReply>;
  stop: grpc.handleUnaryCall<machine_pb.StopMachinesRequest, util_pb.ActionReply>;
}

export class MachineServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
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
}
