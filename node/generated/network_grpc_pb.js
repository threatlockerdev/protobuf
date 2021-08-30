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
};

exports.NetworkServiceClient = grpc.makeGenericClientConstructor(NetworkServiceService);
