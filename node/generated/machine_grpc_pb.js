// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var machine_pb = require('./machine_pb.js');
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

function serialize_CreateMachineReply(arg) {
  if (!(arg instanceof machine_pb.CreateMachineReply)) {
    throw new Error('Expected argument of type CreateMachineReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateMachineReply(buffer_arg) {
  return machine_pb.CreateMachineReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateMachineRequest(arg) {
  if (!(arg instanceof machine_pb.CreateMachineRequest)) {
    throw new Error('Expected argument of type CreateMachineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateMachineRequest(buffer_arg) {
  return machine_pb.CreateMachineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetMachinesReply(arg) {
  if (!(arg instanceof machine_pb.GetMachinesReply)) {
    throw new Error('Expected argument of type GetMachinesReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetMachinesReply(buffer_arg) {
  return machine_pb.GetMachinesReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetMachinesRequest(arg) {
  if (!(arg instanceof machine_pb.GetMachinesRequest)) {
    throw new Error('Expected argument of type GetMachinesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetMachinesRequest(buffer_arg) {
  return machine_pb.GetMachinesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MachineNetworkRequest(arg) {
  if (!(arg instanceof machine_pb.MachineNetworkRequest)) {
    throw new Error('Expected argument of type MachineNetworkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MachineNetworkRequest(buffer_arg) {
  return machine_pb.MachineNetworkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_StopMachinesRequest(arg) {
  if (!(arg instanceof machine_pb.StopMachinesRequest)) {
    throw new Error('Expected argument of type StopMachinesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_StopMachinesRequest(buffer_arg) {
  return machine_pb.StopMachinesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var MachineServiceService = exports.MachineServiceService = {
  getMany: {
    path: '/MachineService/GetMany',
    requestStream: false,
    responseStream: false,
    requestType: machine_pb.GetMachinesRequest,
    responseType: machine_pb.GetMachinesReply,
    requestSerialize: serialize_GetMachinesRequest,
    requestDeserialize: deserialize_GetMachinesRequest,
    responseSerialize: serialize_GetMachinesReply,
    responseDeserialize: deserialize_GetMachinesReply,
  },
  create: {
    path: '/MachineService/Create',
    requestStream: false,
    responseStream: false,
    requestType: machine_pb.CreateMachineRequest,
    responseType: machine_pb.CreateMachineReply,
    requestSerialize: serialize_CreateMachineRequest,
    requestDeserialize: deserialize_CreateMachineRequest,
    responseSerialize: serialize_CreateMachineReply,
    responseDeserialize: deserialize_CreateMachineReply,
  },
  delete: {
    path: '/MachineService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: machine_pb.GetMachinesRequest,
    responseType: util_pb.ActionReply,
    requestSerialize: serialize_GetMachinesRequest,
    requestDeserialize: deserialize_GetMachinesRequest,
    responseSerialize: serialize_ActionReply,
    responseDeserialize: deserialize_ActionReply,
  },
  start: {
    path: '/MachineService/Start',
    requestStream: false,
    responseStream: false,
    requestType: machine_pb.GetMachinesRequest,
    responseType: util_pb.ActionReply,
    requestSerialize: serialize_GetMachinesRequest,
    requestDeserialize: deserialize_GetMachinesRequest,
    responseSerialize: serialize_ActionReply,
    responseDeserialize: deserialize_ActionReply,
  },
  stop: {
    path: '/MachineService/Stop',
    requestStream: false,
    responseStream: false,
    requestType: machine_pb.StopMachinesRequest,
    responseType: util_pb.ActionReply,
    requestSerialize: serialize_StopMachinesRequest,
    requestDeserialize: deserialize_StopMachinesRequest,
    responseSerialize: serialize_ActionReply,
    responseDeserialize: deserialize_ActionReply,
  },
  linkNetwork: {
    path: '/MachineService/LinkNetwork',
    requestStream: false,
    responseStream: false,
    requestType: machine_pb.MachineNetworkRequest,
    responseType: util_pb.ActionReply,
    requestSerialize: serialize_MachineNetworkRequest,
    requestDeserialize: deserialize_MachineNetworkRequest,
    responseSerialize: serialize_ActionReply,
    responseDeserialize: deserialize_ActionReply,
  },
  unlinkNetwork: {
    path: '/MachineService/UnlinkNetwork',
    requestStream: false,
    responseStream: false,
    requestType: machine_pb.MachineNetworkRequest,
    responseType: util_pb.ActionReply,
    requestSerialize: serialize_MachineNetworkRequest,
    requestDeserialize: deserialize_MachineNetworkRequest,
    responseSerialize: serialize_ActionReply,
    responseDeserialize: deserialize_ActionReply,
  },
};

exports.MachineServiceClient = grpc.makeGenericClientConstructor(MachineServiceService);
