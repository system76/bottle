/* eslint-disable */
import { util, configure, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Observable } from "rxjs";
import {
  BuildListResponse,
  ComponentDemandResponse,
  BuildListRequest,
  ComponentDemandRequest,
} from "../../bottle/assembly/v1/service";

export const protobufPackage = "bottle.assembly";

export interface V1 {
  BuildList(request: BuildListRequest): Observable<BuildListResponse>;
  ComponentDemand(
    request: ComponentDemandRequest
  ): Promise<ComponentDemandResponse>;
}

export class V1ClientImpl implements V1 {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.BuildList = this.BuildList.bind(this);
    this.ComponentDemand = this.ComponentDemand.bind(this);
  }
  BuildList(request: BuildListRequest): Promise<BuildListResponse> {
    const data = BuildListRequest.encode(request).finish();
    const promise = this.rpc.request("bottle.assembly.V1", "BuildList", data);
    return promise.then((data) => BuildListResponse.decode(new Reader(data)));
  }

  ComponentDemand(
    request: ComponentDemandRequest
  ): Promise<ComponentDemandResponse> {
    const data = ComponentDemandRequest.encode(request).finish();
    const promise = this.rpc.request(
      "bottle.assembly.V1",
      "ComponentDemand",
      data
    );
    return promise.then((data) =>
      ComponentDemandResponse.decode(new Reader(data))
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
