// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var network_pb = require('./network_pb.js');
var util_pb = require('./util_pb.js');

function serialize_ActionReply(arg) {
  if (!(arg instanceof util_pb.ActionReply)) {
    throw new Error('Expected argument of type ActionReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ActionReply(buffer_arg) {
  return util_pb.ActionReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_BridgesReply(arg) {
  if (!(arg instanceof network_pb.BridgesReply)) {
    throw new Error('Expected argument of type BridgesReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BridgesReply(buffer_arg) {
  return network_pb.BridgesReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_BridgesRequest(arg) {
  if (!(arg instanceof network_pb.BridgesRequest)) {
    throw new Error('Expected argument of type BridgesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BridgesRequest(buffer_arg) {
  return network_pb.BridgesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateNetworkReply(arg) {
  if (!(arg instanceof network_pb.CreateNetworkReply)) {
    throw new Error('Expected argument of type CreateNetworkReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateNetworkReply(buffer_arg) {
  return network_pb.CreateNetworkReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateNetworkRequest(arg) {
  if (!(arg instanceof network_pb.CreateNetworkRequest)) {
    throw new Error('Expected argument of type CreateNetworkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateNetworkRequest(buffer_arg) {
  return network_pb.CreateNetworkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DHCPPrefixesReply(arg) {
  if (!(arg instanceof network_pb.DHCPPrefixesReply)) {
    throw new Error('Expected argument of type DHCPPrefixesReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DHCPPrefixesReply(buffer_arg) {
  return network_pb.DHCPPrefixesReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DHCPPrefixesRequest(arg) {
  if (!(arg instanceof network_pb.DHCPPrefixesRequest)) {
    throw new Error('Expected argument of type DHCPPrefixesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DHCPPrefixesRequest(buffer_arg) {
  return network_pb.DHCPPrefixesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetNetworksReply(arg) {
  if (!(arg instanceof network_pb.GetNetworksReply)) {
    throw new Error('Expected argument of type GetNetworksReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetNetworksReply(buffer_arg) {
  return network_pb.GetNetworksReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetNetworksRequest(arg) {
  if (!(arg instanceof network_pb.GetNetworksRequest)) {
    throw new Error('Expected argument of type GetNetworksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetNetworksRequest(buffer_arg) {
  return network_pb.GetNetworksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateNetworkFlagRequest(arg) {
  if (!(arg instanceof network_pb.UpdateNetworkFlagRequest)) {
    throw new Error('Expected argument of type UpdateNetworkFlagRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateNetworkFlagRequest(buffer_arg) {
  return network_pb.UpdateNetworkFlagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var NetworkServiceService = exports.NetworkServiceService = {
  getMany: {
    path: '/NetworkService/GetMany',
    requestStream: false,
    responseStream: false,
    requestType: network_pb.GetNetworksRequest,
    responseType: network_pb.GetNetworksReply,
    requestSerialize: serialize_GetNetworksRequest,
    requestDeserialize: deserialize_GetNetworksRequest,
    responseSerialize: serialize_GetNetworksReply,
    responseDeserialize: deserialize_GetNetworksReply,
  },
  create: {
    path: '/NetworkService/Create',
    requestStream: false,
    responseStream: false,
    requestType: network_pb.CreateNetworkRequest,
    responseType: network_pb.CreateNetworkReply,
    requestSerialize: serialize_CreateNetworkRequest,
    requestDeserialize: deserialize_CreateNetworkRequest,
    responseSerialize: serialize_CreateNetworkReply,
    responseDeserialize: deserialize_CreateNetworkReply,
  },
  delete: {
    path: '/NetworkService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: network_pb.GetNetworksRequest,
    responseType: util_pb.ActionReply,
    requestSerialize: serialize_GetNetworksRequest,
    requestDeserialize: deserialize_GetNetworksRequest,
    responseSerialize: serialize_ActionReply,
    responseDeserialize: deserialize_ActionReply,
  },
  getFreeBridgeNames: {
    path: '/NetworkService/GetFreeBridgeNames',
    requestStream: false,
    responseStream: false,
    requestType: network_pb.BridgesRequest,
    responseType: network_pb.BridgesReply,
    requestSerialize: serialize_BridgesRequest,
    requestDeserialize: deserialize_BridgesRequest,
    responseSerialize: serialize_BridgesReply,
    responseDeserialize: deserialize_BridgesReply,
  },
  getFreeDHCPPrefixes: {
    path: '/NetworkService/GetFreeDHCPPrefixes',
    requestStream: false,
    responseStream: false,
    requestType: network_pb.DHCPPrefixesRequest,
    responseType: network_pb.DHCPPrefixesReply,
    requestSerialize: serialize_DHCPPrefixesRequest,
    requestDeserialize: deserialize_DHCPPrefixesRequest,
    responseSerialize: serialize_DHCPPrefixesReply,
    responseDeserialize: deserialize_DHCPPrefixesReply,
  },
  updateDHCP: {
    path: '/NetworkService/UpdateDHCP',
    requestStream: false,
    responseStream: false,
    requestType: network_pb.UpdateNetworkFlagRequest,
    responseType: util_pb.ActionReply,
    requestSerialize: serialize_UpdateNetworkFlagRequest,
    requestDeserialize: deserialize_UpdateNetworkFlagRequest,
    responseSerialize: serialize_ActionReply,
    responseDeserialize: deserialize_ActionReply,
  },
  updateInternet: {
    path: '/NetworkService/UpdateInternet',
    requestStream: false,
    responseStream: false,
    requestType: network_pb.UpdateNetworkFlagRequest,
    responseType: util_pb.ActionReply,
    requestSerialize: serialize_UpdateNetworkFlagRequest,
    requestDeserialize: deserialize_UpdateNetworkFlagRequest,
    responseSerialize: serialize_ActionReply,
    responseDeserialize: deserialize_ActionReply,
  },
  updatePromiscuous: {
    path: '/NetworkService/UpdatePromiscuous',
    requestStream: false,
    responseStream: false,
    requestType: network_pb.UpdateNetworkFlagRequest,
    responseType: util_pb.ActionReply,
    requestSerialize: serialize_UpdateNetworkFlagRequest,
    requestDeserialize: deserialize_UpdateNetworkFlagRequest,
    responseSerialize: serialize_ActionReply,
    responseDeserialize: deserialize_ActionReply,
  },
};

exports.NetworkServiceClient = grpc.makeGenericClientConstructor(NetworkServiceService);
