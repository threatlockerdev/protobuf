// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var snapshot_pb = require('./snapshot_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
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

function serialize_CreateSnapshotRequest(arg) {
  if (!(arg instanceof snapshot_pb.CreateSnapshotRequest)) {
    throw new Error('Expected argument of type CreateSnapshotRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateSnapshotRequest(buffer_arg) {
  return snapshot_pb.CreateSnapshotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetSnapshotRequest(arg) {
  if (!(arg instanceof snapshot_pb.GetSnapshotRequest)) {
    throw new Error('Expected argument of type GetSnapshotRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetSnapshotRequest(buffer_arg) {
  return snapshot_pb.GetSnapshotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetSnapshotsReply(arg) {
  if (!(arg instanceof snapshot_pb.GetSnapshotsReply)) {
    throw new Error('Expected argument of type GetSnapshotsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetSnapshotsReply(buffer_arg) {
  return snapshot_pb.GetSnapshotsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetSnapshotsRequest(arg) {
  if (!(arg instanceof snapshot_pb.GetSnapshotsRequest)) {
    throw new Error('Expected argument of type GetSnapshotsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetSnapshotsRequest(buffer_arg) {
  return snapshot_pb.GetSnapshotsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var SnapshotServiceService = exports.SnapshotServiceService = {
  getMany: {
    path: '/SnapshotService/GetMany',
    requestStream: false,
    responseStream: false,
    requestType: snapshot_pb.GetSnapshotsRequest,
    responseType: snapshot_pb.GetSnapshotsReply,
    requestSerialize: serialize_GetSnapshotsRequest,
    requestDeserialize: deserialize_GetSnapshotsRequest,
    responseSerialize: serialize_GetSnapshotsReply,
    responseDeserialize: deserialize_GetSnapshotsReply,
  },
  create: {
    path: '/SnapshotService/Create',
    requestStream: false,
    responseStream: false,
    requestType: snapshot_pb.CreateSnapshotRequest,
    responseType: util_pb.ActionReply,
    requestSerialize: serialize_CreateSnapshotRequest,
    requestDeserialize: deserialize_CreateSnapshotRequest,
    responseSerialize: serialize_ActionReply,
    responseDeserialize: deserialize_ActionReply,
  },
  delete: {
    path: '/SnapshotService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: snapshot_pb.GetSnapshotRequest,
    responseType: util_pb.ActionReply,
    requestSerialize: serialize_GetSnapshotRequest,
    requestDeserialize: deserialize_GetSnapshotRequest,
    responseSerialize: serialize_ActionReply,
    responseDeserialize: deserialize_ActionReply,
  },
  revertTo: {
    path: '/SnapshotService/RevertTo',
    requestStream: false,
    responseStream: false,
    requestType: snapshot_pb.GetSnapshotRequest,
    responseType: util_pb.ActionReply,
    requestSerialize: serialize_GetSnapshotRequest,
    requestDeserialize: deserialize_GetSnapshotRequest,
    responseSerialize: serialize_ActionReply,
    responseDeserialize: deserialize_ActionReply,
  },
};

exports.SnapshotServiceClient = grpc.makeGenericClientConstructor(SnapshotServiceService);
