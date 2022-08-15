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
  getFreeBridgeNames: grpc.MethodDefinition<network_pb.BridgesRequest, network_pb.BridgesReply>;
  getFreeDHCPPrefixes: grpc.MethodDefinition<network_pb.DHCPPrefixesRequest, network_pb.DHCPPrefixesReply>;
  updateDHCP: grpc.MethodDefinition<network_pb.UpdateNetworkFlagRequest, util_pb.ActionReply>;
  updateInternet: grpc.MethodDefinition<network_pb.UpdateNetworkFlagRequest, util_pb.ActionReply>;
  updatePromiscuous: grpc.MethodDefinition<network_pb.UpdateNetworkFlagRequest, util_pb.ActionReply>;
}

export const NetworkServiceService: INetworkServiceService;

export interface INetworkServiceServer extends grpc.UntypedServiceImplementation {
  getMany: grpc.handleUnaryCall<network_pb.GetNetworksRequest, network_pb.GetNetworksReply>;
  create: grpc.handleUnaryCall<network_pb.CreateNetworkRequest, network_pb.CreateNetworkReply>;
  delete: grpc.handleUnaryCall<network_pb.GetNetworksRequest, util_pb.ActionReply>;
  getFreeBridgeNames: grpc.handleUnaryCall<network_pb.BridgesRequest, network_pb.BridgesReply>;
  getFreeDHCPPrefixes: grpc.handleUnaryCall<network_pb.DHCPPrefixesRequest, network_pb.DHCPPrefixesReply>;
  updateDHCP: grpc.handleUnaryCall<network_pb.UpdateNetworkFlagRequest, util_pb.ActionReply>;
  updateInternet: grpc.handleUnaryCall<network_pb.UpdateNetworkFlagRequest, util_pb.ActionReply>;
  updatePromiscuous: grpc.handleUnaryCall<network_pb.UpdateNetworkFlagRequest, util_pb.ActionReply>;
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
  getFreeBridgeNames(argument: network_pb.BridgesRequest, callback: grpc.requestCallback<network_pb.BridgesReply>): grpc.ClientUnaryCall;
  getFreeBridgeNames(argument: network_pb.BridgesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<network_pb.BridgesReply>): grpc.ClientUnaryCall;
  getFreeBridgeNames(argument: network_pb.BridgesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<network_pb.BridgesReply>): grpc.ClientUnaryCall;
  getFreeDHCPPrefixes(argument: network_pb.DHCPPrefixesRequest, callback: grpc.requestCallback<network_pb.DHCPPrefixesReply>): grpc.ClientUnaryCall;
  getFreeDHCPPrefixes(argument: network_pb.DHCPPrefixesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<network_pb.DHCPPrefixesReply>): grpc.ClientUnaryCall;
  getFreeDHCPPrefixes(argument: network_pb.DHCPPrefixesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<network_pb.DHCPPrefixesReply>): grpc.ClientUnaryCall;
  updateDHCP(argument: network_pb.UpdateNetworkFlagRequest, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  updateDHCP(argument: network_pb.UpdateNetworkFlagRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  updateDHCP(argument: network_pb.UpdateNetworkFlagRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  updateInternet(argument: network_pb.UpdateNetworkFlagRequest, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  updateInternet(argument: network_pb.UpdateNetworkFlagRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  updateInternet(argument: network_pb.UpdateNetworkFlagRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  updatePromiscuous(argument: network_pb.UpdateNetworkFlagRequest, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  updatePromiscuous(argument: network_pb.UpdateNetworkFlagRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  updatePromiscuous(argument: network_pb.UpdateNetworkFlagRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
}
