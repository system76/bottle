/* eslint-disable */
import { util, configure, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Observable } from "rxjs";
import {
  ListComponentAvailabilityResponse,
  ListSkuAvailabilityResponse,
  ListLocationsResponse,
  ListComponentAvailabilityRequest,
  ListSkuAvailabilityRequest,
  ListLocationsRequest,
} from "../../bottle/inventory/v1/service";

export const protobufPackage = "bottle.inventory";

export interface V1 {
  ListComponentAvailability(
    request: ListComponentAvailabilityRequest
  ): Observable<ListComponentAvailabilityResponse>;
  ListSkuAvailability(
    request: ListSkuAvailabilityRequest
  ): Observable<ListSkuAvailabilityResponse>;
  ListLocations(
    request: ListLocationsRequest
  ): Observable<ListLocationsResponse>;
}

export class V1ClientImpl implements V1 {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ListComponentAvailability = this.ListComponentAvailability.bind(this);
    this.ListSkuAvailability = this.ListSkuAvailability.bind(this);
    this.ListLocations = this.ListLocations.bind(this);
  }
  ListComponentAvailability(
    request: ListComponentAvailabilityRequest
  ): Promise<ListComponentAvailabilityResponse> {
    const data = ListComponentAvailabilityRequest.encode(request).finish();
    const promise = this.rpc.request(
      "bottle.inventory.V1",
      "ListComponentAvailability",
      data
    );
    return promise.then((data) =>
      ListComponentAvailabilityResponse.decode(new Reader(data))
    );
  }

  ListSkuAvailability(
    request: ListSkuAvailabilityRequest
  ): Promise<ListSkuAvailabilityResponse> {
    const data = ListSkuAvailabilityRequest.encode(request).finish();
    const promise = this.rpc.request(
      "bottle.inventory.V1",
      "ListSkuAvailability",
      data
    );
    return promise.then((data) =>
      ListSkuAvailabilityResponse.decode(new Reader(data))
    );
  }

  ListLocations(request: ListLocationsRequest): Promise<ListLocationsResponse> {
    const data = ListLocationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "bottle.inventory.V1",
      "ListLocations",
      data
    );
    return promise.then((data) =>
      ListLocationsResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
