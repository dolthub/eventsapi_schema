// package: dolt.services.eventsapi.v1alpha1
// file: dolt/services/eventsapi/v1alpha1/client_event.proto

import * as jspb from "google-protobuf";
import * as dolt_services_eventsapi_v1alpha1_event_constants_pb from "../../../../dolt/services/eventsapi/v1alpha1/event_constants_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ClientEventAttribute extends jspb.Message {
  getId(): dolt_services_eventsapi_v1alpha1_event_constants_pb.AttributeIDMap[keyof dolt_services_eventsapi_v1alpha1_event_constants_pb.AttributeIDMap];
  setId(value: dolt_services_eventsapi_v1alpha1_event_constants_pb.AttributeIDMap[keyof dolt_services_eventsapi_v1alpha1_event_constants_pb.AttributeIDMap]): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientEventAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: ClientEventAttribute): ClientEventAttribute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientEventAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientEventAttribute;
  static deserializeBinaryFromReader(message: ClientEventAttribute, reader: jspb.BinaryReader): ClientEventAttribute;
}

export namespace ClientEventAttribute {
  export type AsObject = {
    id: dolt_services_eventsapi_v1alpha1_event_constants_pb.AttributeIDMap[keyof dolt_services_eventsapi_v1alpha1_event_constants_pb.AttributeIDMap],
    value: string,
  }
}

export class ClientEventMetric extends jspb.Message {
  hasDuration(): boolean;
  clearDuration(): void;
  getDuration(): google_protobuf_duration_pb.Duration | undefined;
  setDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasCount(): boolean;
  clearCount(): void;
  getCount(): number;
  setCount(value: number): void;

  getMetricId(): dolt_services_eventsapi_v1alpha1_event_constants_pb.MetricIDMap[keyof dolt_services_eventsapi_v1alpha1_event_constants_pb.MetricIDMap];
  setMetricId(value: dolt_services_eventsapi_v1alpha1_event_constants_pb.MetricIDMap[keyof dolt_services_eventsapi_v1alpha1_event_constants_pb.MetricIDMap]): void;

  getMetricOneofCase(): ClientEventMetric.MetricOneofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientEventMetric.AsObject;
  static toObject(includeInstance: boolean, msg: ClientEventMetric): ClientEventMetric.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientEventMetric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientEventMetric;
  static deserializeBinaryFromReader(message: ClientEventMetric, reader: jspb.BinaryReader): ClientEventMetric;
}

export namespace ClientEventMetric {
  export type AsObject = {
    duration?: google_protobuf_duration_pb.Duration.AsObject,
    count: number,
    metricId: dolt_services_eventsapi_v1alpha1_event_constants_pb.MetricIDMap[keyof dolt_services_eventsapi_v1alpha1_event_constants_pb.MetricIDMap],
  }

  export enum MetricOneofCase {
    METRIC_ONEOF_NOT_SET = 0,
    DURATION = 1,
    COUNT = 2,
  }
}

export class ClientEvent extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getType(): dolt_services_eventsapi_v1alpha1_event_constants_pb.ClientEventTypeMap[keyof dolt_services_eventsapi_v1alpha1_event_constants_pb.ClientEventTypeMap];
  setType(value: dolt_services_eventsapi_v1alpha1_event_constants_pb.ClientEventTypeMap[keyof dolt_services_eventsapi_v1alpha1_event_constants_pb.ClientEventTypeMap]): void;

  clearAttributesList(): void;
  getAttributesList(): Array<ClientEventAttribute>;
  setAttributesList(value: Array<ClientEventAttribute>): void;
  addAttributes(value?: ClientEventAttribute, index?: number): ClientEventAttribute;

  clearMetricsList(): void;
  getMetricsList(): Array<ClientEventMetric>;
  setMetricsList(value: Array<ClientEventMetric>): void;
  addMetrics(value?: ClientEventMetric, index?: number): ClientEventMetric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ClientEvent): ClientEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientEvent;
  static deserializeBinaryFromReader(message: ClientEvent, reader: jspb.BinaryReader): ClientEvent;
}

export namespace ClientEvent {
  export type AsObject = {
    id: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    type: dolt_services_eventsapi_v1alpha1_event_constants_pb.ClientEventTypeMap[keyof dolt_services_eventsapi_v1alpha1_event_constants_pb.ClientEventTypeMap],
    attributesList: Array<ClientEventAttribute.AsObject>,
    metricsList: Array<ClientEventMetric.AsObject>,
  }
}

export class LogEventsRequest extends jspb.Message {
  getMachineId(): string;
  setMachineId(value: string): void;

  getExtra(): string;
  setExtra(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getPlatform(): dolt_services_eventsapi_v1alpha1_event_constants_pb.PlatformMap[keyof dolt_services_eventsapi_v1alpha1_event_constants_pb.PlatformMap];
  setPlatform(value: dolt_services_eventsapi_v1alpha1_event_constants_pb.PlatformMap[keyof dolt_services_eventsapi_v1alpha1_event_constants_pb.PlatformMap]): void;

  clearEventsList(): void;
  getEventsList(): Array<ClientEvent>;
  setEventsList(value: Array<ClientEvent>): void;
  addEvents(value?: ClientEvent, index?: number): ClientEvent;

  getApp(): dolt_services_eventsapi_v1alpha1_event_constants_pb.AppIDMap[keyof dolt_services_eventsapi_v1alpha1_event_constants_pb.AppIDMap];
  setApp(value: dolt_services_eventsapi_v1alpha1_event_constants_pb.AppIDMap[keyof dolt_services_eventsapi_v1alpha1_event_constants_pb.AppIDMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogEventsRequest): LogEventsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogEventsRequest;
  static deserializeBinaryFromReader(message: LogEventsRequest, reader: jspb.BinaryReader): LogEventsRequest;
}

export namespace LogEventsRequest {
  export type AsObject = {
    machineId: string,
    extra: string,
    version: string,
    platform: dolt_services_eventsapi_v1alpha1_event_constants_pb.PlatformMap[keyof dolt_services_eventsapi_v1alpha1_event_constants_pb.PlatformMap],
    eventsList: Array<ClientEvent.AsObject>,
    app: dolt_services_eventsapi_v1alpha1_event_constants_pb.AppIDMap[keyof dolt_services_eventsapi_v1alpha1_event_constants_pb.AppIDMap],
  }
}

export class LogEventsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogEventsResponse): LogEventsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogEventsResponse;
  static deserializeBinaryFromReader(message: LogEventsResponse, reader: jspb.BinaryReader): LogEventsResponse;
}

export namespace LogEventsResponse {
  export type AsObject = {
  }
}

