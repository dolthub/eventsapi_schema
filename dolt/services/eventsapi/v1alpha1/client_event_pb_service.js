// package: dolt.services.eventsapi.v1alpha1
// file: dolt/services/eventsapi/v1alpha1/client_event.proto

var dolt_services_eventsapi_v1alpha1_client_event_pb = require("../../../../dolt/services/eventsapi/v1alpha1/client_event_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ClientEventsService = (function () {
  function ClientEventsService() {}
  ClientEventsService.serviceName = "dolt.services.eventsapi.v1alpha1.ClientEventsService";
  return ClientEventsService;
}());

ClientEventsService.LogEvents = {
  methodName: "LogEvents",
  service: ClientEventsService,
  requestStream: false,
  responseStream: false,
  requestType: dolt_services_eventsapi_v1alpha1_client_event_pb.LogEventsRequest,
  responseType: dolt_services_eventsapi_v1alpha1_client_event_pb.LogEventsResponse
};

exports.ClientEventsService = ClientEventsService;

function ClientEventsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ClientEventsServiceClient.prototype.logEvents = function logEvents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ClientEventsService.LogEvents, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ClientEventsServiceClient = ClientEventsServiceClient;

