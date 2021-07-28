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
};

exports.MachineServiceClient = grpc.makeGenericClientConstructor(MachineServiceService);
