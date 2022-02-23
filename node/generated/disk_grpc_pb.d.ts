// GENERATED CODE -- DO NOT EDIT!

// package: 
// file: disk.proto

import * as disk_pb from "./disk_pb";
import * as util_pb from "./util_pb";
import * as grpc from "@grpc/grpc-js";

interface IDiskServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  copyFile: grpc.MethodDefinition<disk_pb.CopyFileRequest, util_pb.ActionReply>;
  createLinkedDisk: grpc.MethodDefinition<disk_pb.CopyFileRequest, util_pb.ActionReply>;
  deleteFile: grpc.MethodDefinition<disk_pb.FileRequest, util_pb.ActionReply>;
  getFileContents: grpc.MethodDefinition<disk_pb.FileRequest, disk_pb.GetFileContentsReply>;
  getFileExists: grpc.MethodDefinition<disk_pb.FileRequest, disk_pb.GetFileExistsReply>;
  getFileInfo: grpc.MethodDefinition<disk_pb.FileRequest, disk_pb.GetFileInfoReply>;
  getFileSize: grpc.MethodDefinition<disk_pb.FileRequest, disk_pb.GetFileSizeReply>;
  writeFile: grpc.MethodDefinition<disk_pb.WriteFileRequest, util_pb.ActionReply>;
}

export const DiskServiceService: IDiskServiceService;

export interface IDiskServiceServer extends grpc.UntypedServiceImplementation {
  copyFile: grpc.handleUnaryCall<disk_pb.CopyFileRequest, util_pb.ActionReply>;
  createLinkedDisk: grpc.handleUnaryCall<disk_pb.CopyFileRequest, util_pb.ActionReply>;
  deleteFile: grpc.handleUnaryCall<disk_pb.FileRequest, util_pb.ActionReply>;
  getFileContents: grpc.handleUnaryCall<disk_pb.FileRequest, disk_pb.GetFileContentsReply>;
  getFileExists: grpc.handleUnaryCall<disk_pb.FileRequest, disk_pb.GetFileExistsReply>;
  getFileInfo: grpc.handleUnaryCall<disk_pb.FileRequest, disk_pb.GetFileInfoReply>;
  getFileSize: grpc.handleUnaryCall<disk_pb.FileRequest, disk_pb.GetFileSizeReply>;
  writeFile: grpc.handleUnaryCall<disk_pb.WriteFileRequest, util_pb.ActionReply>;
}

export class DiskServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  copyFile(argument: disk_pb.CopyFileRequest, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  copyFile(argument: disk_pb.CopyFileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  copyFile(argument: disk_pb.CopyFileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  createLinkedDisk(argument: disk_pb.CopyFileRequest, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  createLinkedDisk(argument: disk_pb.CopyFileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  createLinkedDisk(argument: disk_pb.CopyFileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  deleteFile(argument: disk_pb.FileRequest, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  deleteFile(argument: disk_pb.FileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  deleteFile(argument: disk_pb.FileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  getFileContents(argument: disk_pb.FileRequest, callback: grpc.requestCallback<disk_pb.GetFileContentsReply>): grpc.ClientUnaryCall;
  getFileContents(argument: disk_pb.FileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<disk_pb.GetFileContentsReply>): grpc.ClientUnaryCall;
  getFileContents(argument: disk_pb.FileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<disk_pb.GetFileContentsReply>): grpc.ClientUnaryCall;
  getFileExists(argument: disk_pb.FileRequest, callback: grpc.requestCallback<disk_pb.GetFileExistsReply>): grpc.ClientUnaryCall;
  getFileExists(argument: disk_pb.FileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<disk_pb.GetFileExistsReply>): grpc.ClientUnaryCall;
  getFileExists(argument: disk_pb.FileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<disk_pb.GetFileExistsReply>): grpc.ClientUnaryCall;
  getFileInfo(argument: disk_pb.FileRequest, callback: grpc.requestCallback<disk_pb.GetFileInfoReply>): grpc.ClientUnaryCall;
  getFileInfo(argument: disk_pb.FileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<disk_pb.GetFileInfoReply>): grpc.ClientUnaryCall;
  getFileInfo(argument: disk_pb.FileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<disk_pb.GetFileInfoReply>): grpc.ClientUnaryCall;
  getFileSize(argument: disk_pb.FileRequest, callback: grpc.requestCallback<disk_pb.GetFileSizeReply>): grpc.ClientUnaryCall;
  getFileSize(argument: disk_pb.FileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<disk_pb.GetFileSizeReply>): grpc.ClientUnaryCall;
  getFileSize(argument: disk_pb.FileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<disk_pb.GetFileSizeReply>): grpc.ClientUnaryCall;
  writeFile(argument: disk_pb.WriteFileRequest, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  writeFile(argument: disk_pb.WriteFileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  writeFile(argument: disk_pb.WriteFileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
}
