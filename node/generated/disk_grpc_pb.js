// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var disk_pb = require('./disk_pb.js');
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

function serialize_CopyFileRequest(arg) {
  if (!(arg instanceof disk_pb.CopyFileRequest)) {
    throw new Error('Expected argument of type CopyFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CopyFileRequest(buffer_arg) {
  return disk_pb.CopyFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FileRequest(arg) {
  if (!(arg instanceof disk_pb.FileRequest)) {
    throw new Error('Expected argument of type FileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_FileRequest(buffer_arg) {
  return disk_pb.FileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetFileSizeReply(arg) {
  if (!(arg instanceof disk_pb.GetFileSizeReply)) {
    throw new Error('Expected argument of type GetFileSizeReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetFileSizeReply(buffer_arg) {
  return disk_pb.GetFileSizeReply.deserializeBinary(new Uint8Array(buffer_arg));
}


var DiskServiceService = exports.DiskServiceService = {
  copyFile: {
    path: '/DiskService/CopyFile',
    requestStream: false,
    responseStream: false,
    requestType: disk_pb.CopyFileRequest,
    responseType: util_pb.ActionReply,
    requestSerialize: serialize_CopyFileRequest,
    requestDeserialize: deserialize_CopyFileRequest,
    responseSerialize: serialize_ActionReply,
    responseDeserialize: deserialize_ActionReply,
  },
  deleteFile: {
    path: '/DiskService/DeleteFile',
    requestStream: false,
    responseStream: false,
    requestType: disk_pb.FileRequest,
    responseType: util_pb.ActionReply,
    requestSerialize: serialize_FileRequest,
    requestDeserialize: deserialize_FileRequest,
    responseSerialize: serialize_ActionReply,
    responseDeserialize: deserialize_ActionReply,
  },
  getFileSize: {
    path: '/DiskService/GetFileSize',
    requestStream: false,
    responseStream: false,
    requestType: disk_pb.FileRequest,
    responseType: disk_pb.GetFileSizeReply,
    requestSerialize: serialize_FileRequest,
    requestDeserialize: deserialize_FileRequest,
    responseSerialize: serialize_GetFileSizeReply,
    responseDeserialize: deserialize_GetFileSizeReply,
  },
};

exports.DiskServiceClient = grpc.makeGenericClientConstructor(DiskServiceService);
