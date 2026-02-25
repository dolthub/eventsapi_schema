// source: dolt/services/eventsapi/v1alpha1/event_constants.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.dolt.services.eventsapi.v1alpha1.AppID', null, global);
goog.exportSymbol('proto.dolt.services.eventsapi.v1alpha1.AttributeID', null, global);
goog.exportSymbol('proto.dolt.services.eventsapi.v1alpha1.ClientEventType', null, global);
goog.exportSymbol('proto.dolt.services.eventsapi.v1alpha1.MetricID', null, global);
goog.exportSymbol('proto.dolt.services.eventsapi.v1alpha1.Platform', null, global);
/**
 * @enum {number}
 */
proto.dolt.services.eventsapi.v1alpha1.Platform = {
  PLATFORM_UNSPECIFIED: 0,
  LINUX: 1,
  WINDOWS: 2,
  DARWIN: 3
};

/**
 * @enum {number}
 */
proto.dolt.services.eventsapi.v1alpha1.ClientEventType = {
  TYPE_UNSPECIFIED: 0,
  INIT: 1,
  STATUS: 2,
  ADD: 3,
  RESET: 4,
  COMMIT: 5,
  SQL: 6,
  SQL_SERVER: 7,
  LOG: 8,
  DIFF: 9,
  MERGE: 10,
  BRANCH: 11,
  CHECKOUT: 12,
  REMOTE: 13,
  PUSH: 14,
  PULL: 15,
  FETCH: 16,
  CLONE: 17,
  LOGIN: 18,
  VERSION: 19,
  CONFIG: 20,
  LS: 21,
  SCHEMA: 22,
  TABLE_IMPORT: 23,
  TABLE_EXPORT: 24,
  TABLE_CREATE: 25,
  TABLE_RM: 26,
  TABLE_MV: 27,
  TABLE_CP: 28,
  TABLE_SELECT: 29,
  TABLE_PUT_ROW: 30,
  TABLE_RM_ROW: 31,
  CREDS_NEW: 32,
  CREDS_RM: 33,
  CREDS_LS: 34,
  CONF_CAT: 35,
  CONF_RESOLVE: 36,
  REMOTEAPI_GET_REPO_METADATA: 37,
  REMOTEAPI_HAS_CHUNKS: 38,
  REMOTEAPI_GET_DOWNLOAD_LOCATIONS: 39,
  REMOTEAPI_GET_UPLOAD_LOCATIONS: 40,
  REMOTEAPI_REBASE: 41,
  REMOTEAPI_ROOT: 42,
  REMOTEAPI_COMMIT: 43,
  REMOTEAPI_LIST_TABLE_FILES: 44,
  BLAME: 45,
  CREDS_CHECK: 46,
  CREDS_USE: 47,
  CREDS_IMPORT: 48,
  REMOTEAPI_ADD_TABLE_FILES: 49,
  MIGRATE: 50,
  TAG: 51,
  GARBAGE_COLLECTION: 52,
  FILTER_BRANCH: 53,
  DUMP: 54,
  CHERRY_PICK: 55,
  STASH: 56,
  STASH_CLEAR: 57,
  STASH_DROP: 58,
  STASH_LIST: 59,
  STASH_POP: 60,
  SHOW: 61,
  PROFILE: 62,
  REFLOG: 63,
  SQL_SERVER_HEARTBEAT: 64,
  REBASE: 65,
  DOLT_WORKBENCH_APP_OPENED: 66,
  DOLT_WORKBENCH_AGENT_CONNECTED: 67
};

/**
 * @enum {number}
 */
proto.dolt.services.eventsapi.v1alpha1.MetricID = {
  METRIC_UNSPECIFIED: 0,
  BYTES_DOWNLOADED: 1,
  DOWNLOAD_MS_ELAPSED: 2,
  REMOTEAPI_RPC_ERROR: 3
};

/**
 * @enum {number}
 */
proto.dolt.services.eventsapi.v1alpha1.AttributeID = {
  ATTRIBUTE_UNSPECIFIED: 0,
  REMOTE_URL_SCHEME: 2
};

/**
 * @enum {number}
 */
proto.dolt.services.eventsapi.v1alpha1.AppID = {
  APP_ID_UNSPECIFIED: 0,
  APP_DOLT: 1,
  APP_DOLTGRES: 2,
  APP_DOLT_EMBEDDED: 3,
  APP_DOLT_WORKBENCH: 4
};

goog.object.extend(exports, proto.dolt.services.eventsapi.v1alpha1);
