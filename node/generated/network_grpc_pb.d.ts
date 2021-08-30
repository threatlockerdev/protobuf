// GENERATED CODE -- DO NOT EDIT!

// package: 
// file: network.proto

import * as network_pb from "./network_pb";
import * as util_pb from "./util_pb";
import * as grpc from "@grpc/grpc-js";

interface INetworkServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getMany: grpc.MethodDefinition<network_pb.GetNetworksRequest, network_pb.GetNetworksReply>;
  create: grpc.MethodDefinition<network_pb.CreateNetworkRequest, network_pb.CreateNetworkReply>;
  delete: grpc.MethodDefinition<network_pb.GetNetworksRequest, util_pb.ActionReply>;
}

export const NetworkServiceService: INetworkServiceService;

export interface INetworkServiceServer extends grpc.UntypedServiceImplementation {
  getMany: grpc.handleUnaryCall<network_pb.GetNetworksRequest, network_pb.GetNetworksReply>;
  create: grpc.handleUnaryCall<network_pb.CreateNetworkRequest, network_pb.CreateNetworkReply>;
  delete: grpc.handleUnaryCall<network_pb.GetNetworksRequest, util_pb.ActionReply>;
}

export class NetworkServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getMany(argument: network_pb.GetNetworksRequest, callback: grpc.requestCallback<network_pb.GetNetworksReply>): grpc.ClientUnaryCall;
  getMany(argument: network_pb.GetNetworksRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<network_pb.GetNetworksReply>): grpc.ClientUnaryCall;
  getMany(argument: network_pb.GetNetworksRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<network_pb.GetNetworksReply>): grpc.ClientUnaryCall;
  create(argument: network_pb.CreateNetworkRequest, callback: grpc.requestCallback<network_pb.CreateNetworkReply>): grpc.ClientUnaryCall;
  create(argument: network_pb.CreateNetworkRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<network_pb.CreateNetworkReply>): grpc.ClientUnaryCall;
  create(argument: network_pb.CreateNetworkRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<network_pb.CreateNetworkReply>): grpc.ClientUnaryCall;
  delete(argument: network_pb.GetNetworksRequest, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  delete(argument: network_pb.GetNetworksRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  delete(argument: network_pb.GetNetworksRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
}
