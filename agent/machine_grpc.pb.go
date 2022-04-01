// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package v2

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

// MachineServiceClient is the client API for MachineService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MachineServiceClient interface {
	GetVncPort(ctx context.Context, in *GetMachineRequest, opts ...grpc.CallOption) (*GetVncPortReply, error)
	GetMany(ctx context.Context, in *GetMachinesRequest, opts ...grpc.CallOption) (*GetMachinesReply, error)
	Create(ctx context.Context, in *CreateMachineRequest, opts ...grpc.CallOption) (*CreateMachineReply, error)
	Delete(ctx context.Context, in *GetMachinesRequest, opts ...grpc.CallOption) (*ActionReply, error)
	Start(ctx context.Context, in *GetMachinesRequest, opts ...grpc.CallOption) (*ActionReply, error)
	Stop(ctx context.Context, in *StopMachinesRequest, opts ...grpc.CallOption) (*ActionReply, error)
	LinkNetwork(ctx context.Context, in *MachineNetworkRequest, opts ...grpc.CallOption) (*ActionReply, error)
	UnlinkNetwork(ctx context.Context, in *MachineNetworkRequest, opts ...grpc.CallOption) (*ActionReply, error)
}

type machineServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewMachineServiceClient(cc grpc.ClientConnInterface) MachineServiceClient {
	return &machineServiceClient{cc}
}

func (c *machineServiceClient) GetVncPort(ctx context.Context, in *GetMachineRequest, opts ...grpc.CallOption) (*GetVncPortReply, error) {
	out := new(GetVncPortReply)
	err := c.cc.Invoke(ctx, "/MachineService/GetVncPort", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *machineServiceClient) GetMany(ctx context.Context, in *GetMachinesRequest, opts ...grpc.CallOption) (*GetMachinesReply, error) {
	out := new(GetMachinesReply)
	err := c.cc.Invoke(ctx, "/MachineService/GetMany", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *machineServiceClient) Create(ctx context.Context, in *CreateMachineRequest, opts ...grpc.CallOption) (*CreateMachineReply, error) {
	out := new(CreateMachineReply)
	err := c.cc.Invoke(ctx, "/MachineService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *machineServiceClient) Delete(ctx context.Context, in *GetMachinesRequest, opts ...grpc.CallOption) (*ActionReply, error) {
	out := new(ActionReply)
	err := c.cc.Invoke(ctx, "/MachineService/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *machineServiceClient) Start(ctx context.Context, in *GetMachinesRequest, opts ...grpc.CallOption) (*ActionReply, error) {
	out := new(ActionReply)
	err := c.cc.Invoke(ctx, "/MachineService/Start", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *machineServiceClient) Stop(ctx context.Context, in *StopMachinesRequest, opts ...grpc.CallOption) (*ActionReply, error) {
	out := new(ActionReply)
	err := c.cc.Invoke(ctx, "/MachineService/Stop", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *machineServiceClient) LinkNetwork(ctx context.Context, in *MachineNetworkRequest, opts ...grpc.CallOption) (*ActionReply, error) {
	out := new(ActionReply)
	err := c.cc.Invoke(ctx, "/MachineService/LinkNetwork", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *machineServiceClient) UnlinkNetwork(ctx context.Context, in *MachineNetworkRequest, opts ...grpc.CallOption) (*ActionReply, error) {
	out := new(ActionReply)
	err := c.cc.Invoke(ctx, "/MachineService/UnlinkNetwork", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MachineServiceServer is the server API for MachineService service.
// All implementations must embed UnimplementedMachineServiceServer
// for forward compatibility
type MachineServiceServer interface {
	GetVncPort(context.Context, *GetMachineRequest) (*GetVncPortReply, error)
	GetMany(context.Context, *GetMachinesRequest) (*GetMachinesReply, error)
	Create(context.Context, *CreateMachineRequest) (*CreateMachineReply, error)
	Delete(context.Context, *GetMachinesRequest) (*ActionReply, error)
	Start(context.Context, *GetMachinesRequest) (*ActionReply, error)
	Stop(context.Context, *StopMachinesRequest) (*ActionReply, error)
	LinkNetwork(context.Context, *MachineNetworkRequest) (*ActionReply, error)
	UnlinkNetwork(context.Context, *MachineNetworkRequest) (*ActionReply, error)
	mustEmbedUnimplementedMachineServiceServer()
}

// UnimplementedMachineServiceServer must be embedded to have forward compatible implementations.
type UnimplementedMachineServiceServer struct {
}

func (UnimplementedMachineServiceServer) GetVncPort(context.Context, *GetMachineRequest) (*GetVncPortReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetVncPort not implemented")
}
func (UnimplementedMachineServiceServer) GetMany(context.Context, *GetMachinesRequest) (*GetMachinesReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetMany not implemented")
}
func (UnimplementedMachineServiceServer) Create(context.Context, *CreateMachineRequest) (*CreateMachineReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedMachineServiceServer) Delete(context.Context, *GetMachinesRequest) (*ActionReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (UnimplementedMachineServiceServer) Start(context.Context, *GetMachinesRequest) (*ActionReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Start not implemented")
}
func (UnimplementedMachineServiceServer) Stop(context.Context, *StopMachinesRequest) (*ActionReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Stop not implemented")
}
func (UnimplementedMachineServiceServer) LinkNetwork(context.Context, *MachineNetworkRequest) (*ActionReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method LinkNetwork not implemented")
}
func (UnimplementedMachineServiceServer) UnlinkNetwork(context.Context, *MachineNetworkRequest) (*ActionReply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UnlinkNetwork not implemented")
}
func (UnimplementedMachineServiceServer) mustEmbedUnimplementedMachineServiceServer() {}

// UnsafeMachineServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MachineServiceServer will
// result in compilation errors.
type UnsafeMachineServiceServer interface {
	mustEmbedUnimplementedMachineServiceServer()
}

func RegisterMachineServiceServer(s grpc.ServiceRegistrar, srv MachineServiceServer) {
	s.RegisterService(&MachineService_ServiceDesc, srv)
}

func _MachineService_GetVncPort_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetMachineRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MachineServiceServer).GetVncPort(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/MachineService/GetVncPort",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MachineServiceServer).GetVncPort(ctx, req.(*GetMachineRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MachineService_GetMany_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetMachinesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MachineServiceServer).GetMany(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/MachineService/GetMany",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MachineServiceServer).GetMany(ctx, req.(*GetMachinesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MachineService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateMachineRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MachineServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/MachineService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MachineServiceServer).Create(ctx, req.(*CreateMachineRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MachineService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetMachinesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MachineServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/MachineService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MachineServiceServer).Delete(ctx, req.(*GetMachinesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MachineService_Start_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetMachinesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MachineServiceServer).Start(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/MachineService/Start",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MachineServiceServer).Start(ctx, req.(*GetMachinesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MachineService_Stop_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(StopMachinesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MachineServiceServer).Stop(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/MachineService/Stop",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MachineServiceServer).Stop(ctx, req.(*StopMachinesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MachineService_LinkNetwork_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MachineNetworkRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MachineServiceServer).LinkNetwork(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/MachineService/LinkNetwork",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MachineServiceServer).LinkNetwork(ctx, req.(*MachineNetworkRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MachineService_UnlinkNetwork_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MachineNetworkRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MachineServiceServer).UnlinkNetwork(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/MachineService/UnlinkNetwork",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MachineServiceServer).UnlinkNetwork(ctx, req.(*MachineNetworkRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// MachineService_ServiceDesc is the grpc.ServiceDesc for MachineService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var MachineService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "MachineService",
	HandlerType: (*MachineServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetVncPort",
			Handler:    _MachineService_GetVncPort_Handler,
		},
		{
			MethodName: "GetMany",
			Handler:    _MachineService_GetMany_Handler,
		},
		{
			MethodName: "Create",
			Handler:    _MachineService_Create_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _MachineService_Delete_Handler,
		},
		{
			MethodName: "Start",
			Handler:    _MachineService_Start_Handler,
		},
		{
			MethodName: "Stop",
			Handler:    _MachineService_Stop_Handler,
		},
		{
			MethodName: "LinkNetwork",
			Handler:    _MachineService_LinkNetwork_Handler,
		},
		{
			MethodName: "UnlinkNetwork",
			Handler:    _MachineService_UnlinkNetwork_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "machine.proto",
}
