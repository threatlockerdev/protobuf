// GENERATED CODE -- DO NOT EDIT!

// package: 
// file: snapshot.proto

import * as snapshot_pb from "./snapshot_pb";
import * as util_pb from "./util_pb";
import * as grpc from "@grpc/grpc-js";

interface ISnapshotServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getMany: grpc.MethodDefinition<snapshot_pb.GetSnapshotsRequest, snapshot_pb.GetSnapshotsReply>;
  create: grpc.MethodDefinition<snapshot_pb.CreateSnapshotRequest, util_pb.ActionReply>;
  delete: grpc.MethodDefinition<snapshot_pb.GetSnapshotRequest, util_pb.ActionReply>;
  revertTo: grpc.MethodDefinition<snapshot_pb.GetSnapshotRequest, util_pb.ActionReply>;
}

export const SnapshotServiceService: ISnapshotServiceService;

export interface ISnapshotServiceServer extends grpc.UntypedServiceImplementation {
  getMany: grpc.handleUnaryCall<snapshot_pb.GetSnapshotsRequest, snapshot_pb.GetSnapshotsReply>;
  create: grpc.handleUnaryCall<snapshot_pb.CreateSnapshotRequest, util_pb.ActionReply>;
  delete: grpc.handleUnaryCall<snapshot_pb.GetSnapshotRequest, util_pb.ActionReply>;
  revertTo: grpc.handleUnaryCall<snapshot_pb.GetSnapshotRequest, util_pb.ActionReply>;
}

export class SnapshotServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getMany(argument: snapshot_pb.GetSnapshotsRequest, callback: grpc.requestCallback<snapshot_pb.GetSnapshotsReply>): grpc.ClientUnaryCall;
  getMany(argument: snapshot_pb.GetSnapshotsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<snapshot_pb.GetSnapshotsReply>): grpc.ClientUnaryCall;
  getMany(argument: snapshot_pb.GetSnapshotsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<snapshot_pb.GetSnapshotsReply>): grpc.ClientUnaryCall;
  create(argument: snapshot_pb.CreateSnapshotRequest, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  create(argument: snapshot_pb.CreateSnapshotRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  create(argument: snapshot_pb.CreateSnapshotRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  delete(argument: snapshot_pb.GetSnapshotRequest, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  delete(argument: snapshot_pb.GetSnapshotRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  delete(argument: snapshot_pb.GetSnapshotRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  revertTo(argument: snapshot_pb.GetSnapshotRequest, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  revertTo(argument: snapshot_pb.GetSnapshotRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
  revertTo(argument: snapshot_pb.GetSnapshotRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<util_pb.ActionReply>): grpc.ClientUnaryCall;
}
