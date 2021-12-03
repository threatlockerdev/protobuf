// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var disk_pb = require('./disk_pb.js');
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

function serialize_GetFileContentsReply(arg) {
  if (!(arg instanceof disk_pb.GetFileContentsReply)) {
    throw new Error('Expected argument of type GetFileContentsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetFileContentsReply(buffer_arg) {
  return disk_pb.GetFileContentsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetFileExistsReply(arg) {
  if (!(arg instanceof disk_pb.GetFileExistsReply)) {
    throw new Error('Expected argument of type GetFileExistsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetFileExistsReply(buffer_arg) {
  return disk_pb.GetFileExistsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetFileInfoReply(arg) {
  if (!(arg instanceof disk_pb.GetFileInfoReply)) {
    throw new Error('Expected argument of type GetFileInfoReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetFileInfoReply(buffer_arg) {
  return disk_pb.GetFileInfoReply.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_WriteFileRequest(arg) {
  if (!(arg instanceof disk_pb.WriteFileRequest)) {
    throw new Error('Expected argument of type WriteFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WriteFileRequest(buffer_arg) {
  return disk_pb.WriteFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
  getFileContents: {
    path: '/DiskService/GetFileContents',
    requestStream: false,
    responseStream: false,
    requestType: disk_pb.FileRequest,
    responseType: disk_pb.GetFileContentsReply,
    requestSerialize: serialize_FileRequest,
    requestDeserialize: deserialize_FileRequest,
    responseSerialize: serialize_GetFileContentsReply,
    responseDeserialize: deserialize_GetFileContentsReply,
  },
  getFileExists: {
    path: '/DiskService/GetFileExists',
    requestStream: false,
    responseStream: false,
    requestType: disk_pb.FileRequest,
    responseType: disk_pb.GetFileExistsReply,
    requestSerialize: serialize_FileRequest,
    requestDeserialize: deserialize_FileRequest,
    responseSerialize: serialize_GetFileExistsReply,
    responseDeserialize: deserialize_GetFileExistsReply,
  },
  getFileInfo: {
    path: '/DiskService/GetFileInfo',
    requestStream: false,
    responseStream: false,
    requestType: disk_pb.FileRequest,
    responseType: disk_pb.GetFileInfoReply,
    requestSerialize: serialize_FileRequest,
    requestDeserialize: deserialize_FileRequest,
    responseSerialize: serialize_GetFileInfoReply,
    responseDeserialize: deserialize_GetFileInfoReply,
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
  writeFile: {
    path: '/DiskService/WriteFile',
    requestStream: false,
    responseStream: false,
    requestType: disk_pb.WriteFileRequest,
    responseType: util_pb.ActionReply,
    requestSerialize: serialize_WriteFileRequest,
    requestDeserialize: deserialize_WriteFileRequest,
    responseSerialize: serialize_ActionReply,
    responseDeserialize: deserialize_ActionReply,
  },
};

exports.DiskServiceClient = grpc.makeGenericClientConstructor(DiskServiceService);
