/* eslint-disable */
import { util, configure, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Observable } from "rxjs";
import {
  ComponentAvailabilityListResponse,
  LocationListResponse,
  ComponentAvailabilityListRequest,
  LocationListRequest,
} from "../../bottle/inventory/v1/service";

export const protobufPackage = "bottle.inventory";

export interface V1 {
  ComponentAvailabilityList(
    request: ComponentAvailabilityListRequest
  ): Observable<ComponentAvailabilityListResponse>;
  LocationList(request: LocationListRequest): Observable<LocationListResponse>;
}

export class V1ClientImpl implements V1 {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ComponentAvailabilityList = this.ComponentAvailabilityList.bind(this);
    this.LocationList = this.LocationList.bind(this);
  }
  ComponentAvailabilityList(
    request: ComponentAvailabilityListRequest
  ): Promise<ComponentAvailabilityListResponse> {
    const data = ComponentAvailabilityListRequest.encode(request).finish();
    const promise = this.rpc.request(
      "bottle.inventory.V1",
      "ComponentAvailabilityList",
      data
    );
    return promise.then((data) =>
      ComponentAvailabilityListResponse.decode(new Reader(data))
    );
  }

  LocationList(request: LocationListRequest): Promise<LocationListResponse> {
    const data = LocationListRequest.encode(request).finish();
    const promise = this.rpc.request(
      "bottle.inventory.V1",
      "LocationList",
      data
    );
    return promise.then((data) =>
      LocationListResponse.decode(new Reader(data))
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
