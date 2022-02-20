// package: google.cloud
// file: google/cloud/extended_operations.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

  export const operationField: jspb.ExtensionFieldInfo<OperationResponseMappingMap>;

  export const operationRequestField: jspb.ExtensionFieldInfo<string>;

  export const operationResponseField: jspb.ExtensionFieldInfo<string>;

  export const operationService: jspb.ExtensionFieldInfo<string>;

  export const operationPollingMethod: jspb.ExtensionFieldInfo<boolean>;

export interface OperationResponseMappingMap {
  UNDEFINED: 0;
  NAME: 1;
  STATUS: 2;
  ERROR_CODE: 3;
  ERROR_MESSAGE: 4;
}

export const OperationResponseMapping: OperationResponseMappingMap;

