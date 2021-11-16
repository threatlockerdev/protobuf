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
	DeleteFile(ctx context.Context, in *FileRequest, opts ...grpc.CallOption) (*ActionReply, error)
	GetFileContents(ctx context.Context, in *FileRequest, opts ...grpc.CallOption) (*GetFileContentsReply, error)
	GetFileSize(ctx context.Context, in *FileRequest, opts ...grpc.CallOption) (*GetFileSizeReply, error)
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

func (c *diskServiceClient) GetFileSize(ctx context.Context, in *FileRequest, opts ...grpc.CallOption) (*GetFileSizeReply, error) {
	out := new(GetFileSizeReply)
	err := c.cc.Invoke(ctx, "/DiskService/GetFileSize", in, out, opts...)
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
	DeleteFile(context.Context, *FileRequest) (*ActionReply, error)
	GetFileContents(context.Context, *FileRequest) (*GetFileContentsReply, error)
	GetFileSize(context.Context, *FileRequest) (*GetFileSizeReply, error)
	WriteFile(context.Context, *WriteFileRequest) (*ActionReply, error)
	mustEmbedUnimplementedDiskServiceServer()
}

// UnimplementedDiskServiceServer must be embedded to have forward compatible implementations.
type UnimplementedDiskServiceServer struct {
}

func (UnimplementedDiskServiceServer) CopyFile(context.Context, *CopyFileRequest) (*ActionReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CopyFile not implemented")
}
func (UnimplementedDiskServiceServer) DeleteFile(context.Context, *FileRequest) (*ActionReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteFile not implemented")
}
func (UnimplementedDiskServiceServer) GetFileContents(context.Context, *FileRequest) (*GetFileContentsReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetFileContents not implemented")
}
func (UnimplementedDiskServiceServer) GetFileSize(context.Context, *FileRequest) (*GetFileSizeReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetFileSize not implemented")
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
			MethodName: "DeleteFile",
			Handler:    _DiskService_DeleteFile_Handler,
		},
		{
			MethodName: "GetFileContents",
			Handler:    _DiskService_GetFileContents_Handler,
		},
		{
			MethodName: "GetFileSize",
			Handler:    _DiskService_GetFileSize_Handler,
		},
		{
			MethodName: "WriteFile",
			Handler:    _DiskService_WriteFile_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "disk.proto",
}
