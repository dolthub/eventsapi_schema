// package: dolt.services.eventsapi.v1alpha1
// file: dolt/services/eventsapi/v1alpha1/client_event.proto

import * as dolt_services_eventsapi_v1alpha1_client_event_pb from "../../../../dolt/services/eventsapi/v1alpha1/client_event_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ClientEventsServiceLogEvents = {
  readonly methodName: string;
  readonly service: typeof ClientEventsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof dolt_services_eventsapi_v1alpha1_client_event_pb.LogEventsRequest;
  readonly responseType: typeof dolt_services_eventsapi_v1alpha1_client_event_pb.LogEventsResponse;
};

export class ClientEventsService {
  static readonly serviceName: string;
  static readonly LogEvents: ClientEventsServiceLogEvents;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ClientEventsServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  logEvents(
    requestMessage: dolt_services_eventsapi_v1alpha1_client_event_pb.LogEventsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: dolt_services_eventsapi_v1alpha1_client_event_pb.LogEventsResponse|null) => void
  ): UnaryResponse;
  logEvents(
    requestMessage: dolt_services_eventsapi_v1alpha1_client_event_pb.LogEventsRequest,
    callback: (error: ServiceError|null, responseMessage: dolt_services_eventsapi_v1alpha1_client_event_pb.LogEventsResponse|null) => void
  ): UnaryResponse;
}

