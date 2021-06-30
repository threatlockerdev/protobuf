// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var machine_pb = require('./machine_pb.js');

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


var MachineServiceService = exports.MachineServiceService = {
  getAll: {
    path: '/MachineService/GetAll',
    requestStream: false,
    responseStream: false,
    requestType: machine_pb.GetMachinesRequest,
    responseType: machine_pb.GetMachinesReply,
    requestSerialize: serialize_GetMachinesRequest,
    requestDeserialize: deserialize_GetMachinesRequest,
    responseSerialize: serialize_GetMachinesReply,
    responseDeserialize: deserialize_GetMachinesReply,
  },
};

exports.MachineServiceClient = grpc.makeGenericClientConstructor(MachineServiceService);
