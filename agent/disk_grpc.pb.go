// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package agent

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// DiskServiceClient is the client API for DiskService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type DiskServiceClient interface {
	CopyFile(ctx context.Context, in *CopyFileRequest, opts ...grpc.CallOption) (*ActionReply, error)
	CreateLinkedDisk(ctx context.Context, in *CopyFileRequest, opts ...grpc.CallOption) (*ActionReply, error)
	DeleteFile(ctx context.Context, in *FileRequest, opts ...grpc.CallOption) (*ActionReply, error)
	GetFileContents(ctx context.Context, in *FileRequest, opts ...grpc.CallOption) (*GetFileContentsReply, error)
	GetFileExists(ctx context.Context, in *FileRequest, opts ...grpc.CallOption) (*GetFileExistsReply, error)
	GetFileInfo(ctx context.Context, in *FileRequest, opts ...grpc.CallOption) (*GetFileInfoReply, error)
	GetFileSize(ctx context.Context, in *FileRequest, opts ...grpc.CallOption) (*GetFileSizeReply, error)
	CommitDisk(ctx context.Context, in *FileRequest, opts ...grpc.CallOption) (*ActionReply, error)
	GetDiskInfo(ctx context.Context, in *FileRequest, opts ...grpc.CallOption) (*ActionReply, error)
	MoveFile(ctx context.Context, in *MoveFileRequest, opts ...grpc.CallOption) (*ActionReply, error)
	ResizeDisk(ctx context.Context, in *ResizeDiskRequest, opts ...grpc.CallOption) (*ActionReply, error)
	UpdateDiskBacking(ctx context.Context, in *UpdateDiskBackingRequest, opts ...grpc.CallOption) (*ActionReply, error)
	WriteFile(ctx context.Context, in *WriteFileRequest, opts ...grpc.CallOption) (*ActionReply, error)
}

type diskServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewDiskServiceClient(cc grpc.ClientConnInterface) DiskServiceClient {
	return &diskServiceClient{cc}
}

func (c *diskServiceClient) CopyFile(ctx context.Context, in *CopyFileRequest, opts ...grpc.CallOption) (*ActionReply, error) {
	out := new(ActionReply)
	err := c.cc.Invoke(ctx, "/DiskService/CopyFile", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *diskServiceClient) CreateLinkedDisk(ctx context.Context, in *CopyFileRequest, opts ...grpc.CallOption) (*ActionReply, error) {
	out := new(ActionReply)
	err := c.cc.Invoke(ctx, "/DiskService/CreateLinkedDisk", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *diskServiceClient) DeleteFile(ctx context.Context, in *FileRequest, opts ...grpc.CallOption) (*ActionReply, error) {
	out := new(ActionReply)
	err := c.cc.Invoke(ctx, "/DiskService/DeleteFile", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *diskServiceClient) GetFileContents(ctx context.Context, in *FileRequest, opts ...grpc.CallOption) (*GetFileContentsReply, error) {
	out := new(GetFileContentsReply)
	err := c.cc.Invoke(ctx, "/DiskService/GetFileContents", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *diskServiceClient) GetFileExists(ctx context.Context, in *FileRequest, opts ...grpc.CallOption) (*GetFileExistsReply, error) {
	out := new(GetFileExistsReply)
	err := c.cc.Invoke(ctx, "/DiskService/GetFileExists", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *diskServiceClient) GetFileInfo(ctx context.Context, in *FileRequest, opts ...grpc.CallOption) (*GetFileInfoReply, error) {
	out := new(GetFileInfoReply)
	err := c.cc.Invoke(ctx, "/DiskService/GetFileInfo", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *diskServiceClient) GetFileSize(ctx context.Context, in *FileRequest, opts ...grpc.CallOption) (*GetFileSizeReply, error) {
	out := new(GetFileSizeReply)
	err := c.cc.Invoke(ctx, "/DiskService/GetFileSize", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *diskServiceClient) CommitDisk(ctx context.Context, in *FileRequest, opts ...grpc.CallOption) (*ActionReply, error) {
	out := new(ActionReply)
	err := c.cc.Invoke(ctx, "/DiskService/CommitDisk", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *diskServiceClient) GetDiskInfo(ctx context.Context, in *FileRequest, opts ...grpc.CallOption) (*ActionReply, error) {
	out := new(ActionReply)
	err := c.cc.Invoke(ctx, "/DiskService/GetDiskInfo", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *diskServiceClient) MoveFile(ctx context.Context, in *MoveFileRequest, opts ...grpc.CallOption) (*ActionReply, error) {
	out := new(ActionReply)
	err := c.cc.Invoke(ctx, "/DiskService/MoveFile", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *diskServiceClient) ResizeDisk(ctx context.Context, in *ResizeDiskRequest, opts ...grpc.CallOption) (*ActionReply, error) {
	out := new(ActionReply)
	err := c.cc.Invoke(ctx, "/DiskService/ResizeDisk", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *diskServiceClient) UpdateDiskBacking(ctx context.Context, in *UpdateDiskBackingRequest, opts ...grpc.CallOption) (*ActionReply, error) {
	out := new(ActionReply)
	err := c.cc.Invoke(ctx, "/DiskService/UpdateDiskBacking", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *diskServiceClient) WriteFile(ctx context.Context, in *WriteFileRequest, opts ...grpc.CallOption) (*ActionReply, error) {
	out := new(ActionReply)
	err := c.cc.Invoke(ctx, "/DiskService/WriteFile", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// DiskServiceServer is the server API for DiskService service.
// All implementations must embed UnimplementedDiskServiceServer
// for forward compatibility
type DiskServiceServer interface {
	CopyFile(context.Context, *CopyFileRequest) (*ActionReply, error)
	CreateLinkedDisk(context.Context, *CopyFileRequest) (*ActionReply, error)
	DeleteFile(context.Context, *FileRequest) (*ActionReply, error)
	GetFileContents(context.Context, *FileRequest) (*GetFileContentsReply, error)
	GetFileExists(context.Context, *FileRequest) (*GetFileExistsReply, error)
	GetFileInfo(context.Context, *FileRequest) (*GetFileInfoReply, error)
	GetFileSize(context.Context, *FileRequest) (*GetFileSizeReply, error)
	CommitDisk(context.Context, *FileRequest) (*ActionReply, error)
	GetDiskInfo(context.Context, *FileRequest) (*ActionReply, error)
	MoveFile(context.Context, *MoveFileRequest) (*ActionReply, error)
	ResizeDisk(context.Context, *ResizeDiskRequest) (*ActionReply, error)
	UpdateDiskBacking(context.Context, *UpdateDiskBackingRequest) (*ActionReply, error)
	WriteFile(context.Context, *WriteFileRequest) (*ActionReply, error)
	mustEmbedUnimplementedDiskServiceServer()
}

// UnimplementedDiskServiceServer must be embedded to have forward compatible implementations.
type UnimplementedDiskServiceServer struct {
}

func (UnimplementedDiskServiceServer) CopyFile(context.Context, *CopyFileRequest) (*ActionReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CopyFile not implemented")
}
func (UnimplementedDiskServiceServer) CreateLinkedDisk(context.Context, *CopyFileRequest) (*ActionReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateLinkedDisk not implemented")
}
func (UnimplementedDiskServiceServer) DeleteFile(context.Context, *FileRequest) (*ActionReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteFile not implemented")
}
func (UnimplementedDiskServiceServer) GetFileContents(context.Context, *FileRequest) (*GetFileContentsReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetFileContents not implemented")
}
func (UnimplementedDiskServiceServer) GetFileExists(context.Context, *FileRequest) (*GetFileExistsReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetFileExists not implemented")
}
func (UnimplementedDiskServiceServer) GetFileInfo(context.Context, *FileRequest) (*GetFileInfoReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetFileInfo not implemented")
}
func (UnimplementedDiskServiceServer) GetFileSize(context.Context, *FileRequest) (*GetFileSizeReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetFileSize not implemented")
}
func (UnimplementedDiskServiceServer) CommitDisk(context.Context, *FileRequest) (*ActionReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CommitDisk not implemented")
}
func (UnimplementedDiskServiceServer) GetDiskInfo(context.Context, *FileRequest) (*ActionReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetDiskInfo not implemented")
}
func (UnimplementedDiskServiceServer) MoveFile(context.Context, *MoveFileRequest) (*ActionReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method MoveFile not implemented")
}
func (UnimplementedDiskServiceServer) ResizeDisk(context.Context, *ResizeDiskRequest) (*ActionReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ResizeDisk not implemented")
}
func (UnimplementedDiskServiceServer) UpdateDiskBacking(context.Context, *UpdateDiskBackingRequest) (*ActionReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateDiskBacking not implemented")
}
func (UnimplementedDiskServiceServer) WriteFile(context.Context, *WriteFileRequest) (*ActionReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method WriteFile not implemented")
}
func (UnimplementedDiskServiceServer) mustEmbedUnimplementedDiskServiceServer() {}

// UnsafeDiskServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to DiskServiceServer will
// result in compilation errors.
type UnsafeDiskServiceServer interface {
	mustEmbedUnimplementedDiskServiceServer()
}

func RegisterDiskServiceServer(s grpc.ServiceRegistrar, srv DiskServiceServer) {
	s.RegisterService(&DiskService_ServiceDesc, srv)
}

func _DiskService_CopyFile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CopyFileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DiskServiceServer).CopyFile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/DiskService/CopyFile",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DiskServiceServer).CopyFile(ctx, req.(*CopyFileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DiskService_CreateLinkedDisk_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CopyFileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DiskServiceServer).CreateLinkedDisk(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/DiskService/CreateLinkedDisk",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DiskServiceServer).CreateLinkedDisk(ctx, req.(*CopyFileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DiskService_DeleteFile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DiskServiceServer).DeleteFile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/DiskService/DeleteFile",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DiskServiceServer).DeleteFile(ctx, req.(*FileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DiskService_GetFileContents_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DiskServiceServer).GetFileContents(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/DiskService/GetFileContents",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DiskServiceServer).GetFileContents(ctx, req.(*FileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DiskService_GetFileExists_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DiskServiceServer).GetFileExists(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/DiskService/GetFileExists",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DiskServiceServer).GetFileExists(ctx, req.(*FileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DiskService_GetFileInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DiskServiceServer).GetFileInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/DiskService/GetFileInfo",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DiskServiceServer).GetFileInfo(ctx, req.(*FileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DiskService_GetFileSize_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DiskServiceServer).GetFileSize(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/DiskService/GetFileSize",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DiskServiceServer).GetFileSize(ctx, req.(*FileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DiskService_CommitDisk_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DiskServiceServer).CommitDisk(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/DiskService/CommitDisk",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DiskServiceServer).CommitDisk(ctx, req.(*FileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DiskService_GetDiskInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DiskServiceServer).GetDiskInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/DiskService/GetDiskInfo",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DiskServiceServer).GetDiskInfo(ctx, req.(*FileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DiskService_MoveFile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MoveFileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DiskServiceServer).MoveFile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/DiskService/MoveFile",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DiskServiceServer).MoveFile(ctx, req.(*MoveFileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DiskService_ResizeDisk_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ResizeDiskRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DiskServiceServer).ResizeDisk(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/DiskService/ResizeDisk",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DiskServiceServer).ResizeDisk(ctx, req.(*ResizeDiskRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DiskService_UpdateDiskBacking_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateDiskBackingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DiskServiceServer).UpdateDiskBacking(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/DiskService/UpdateDiskBacking",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DiskServiceServer).UpdateDiskBacking(ctx, req.(*UpdateDiskBackingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DiskService_WriteFile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(WriteFileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DiskServiceServer).WriteFile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/DiskService/WriteFile",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DiskServiceServer).WriteFile(ctx, req.(*WriteFileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// DiskService_ServiceDesc is the grpc.ServiceDesc for DiskService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var DiskService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "DiskService",
	HandlerType: (*DiskServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CopyFile",
			Handler:    _DiskService_CopyFile_Handler,
		},
		{
			MethodName: "CreateLinkedDisk",
			Handler:    _DiskService_CreateLinkedDisk_Handler,
		},
		{
			MethodName: "DeleteFile",
			Handler:    _DiskService_DeleteFile_Handler,
		},
		{
			MethodName: "GetFileContents",
			Handler:    _DiskService_GetFileContents_Handler,
		},
		{
			MethodName: "GetFileExists",
			Handler:    _DiskService_GetFileExists_Handler,
		},
		{
			MethodName: "GetFileInfo",
			Handler:    _DiskService_GetFileInfo_Handler,
		},
		{
			MethodName: "GetFileSize",
			Handler:    _DiskService_GetFileSize_Handler,
		},
		{
			MethodName: "CommitDisk",
			Handler:    _DiskService_CommitDisk_Handler,
		},
		{
			MethodName: "GetDiskInfo",
			Handler:    _DiskService_GetDiskInfo_Handler,
		},
		{
			MethodName: "MoveFile",
			Handler:    _DiskService_MoveFile_Handler,
		},
		{
			MethodName: "ResizeDisk",
			Handler:    _DiskService_ResizeDisk_Handler,
		},
		{
			MethodName: "UpdateDiskBacking",
			Handler:    _DiskService_UpdateDiskBacking_Handler,
		},
		{
			MethodName: "WriteFile",
			Handler:    _DiskService_WriteFile_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "disk.proto",
}
