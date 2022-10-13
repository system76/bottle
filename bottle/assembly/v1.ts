/* eslint-disable */
import { util, configure, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Observable } from "rxjs";
import {
  GetBuildResponse,
  ListPickableBuildsResponse,
  ListComponentDemandsResponse,
  GetBuildRequest,
  ListPickableBuildsRequest,
  ListComponentDemandsRequest,
} from "./v1/service";

export const protobufPackage = "bottle.assembly";

export interface V1 {
  GetBuild(request: GetBuildRequest): Promise<GetBuildResponse>;
  ListPickableBuilds(
    request: ListPickableBuildsRequest
  ): Observable<ListPickableBuildsResponse>;
  ListComponentDemands(
    request: ListComponentDemandsRequest
  ): Observable<ListComponentDemandsResponse>;
}

export class V1ClientImpl implements V1 {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetBuild = this.GetBuild.bind(this);
    this.ListPickableBuilds = this.ListPickableBuilds.bind(this);
    this.ListComponentDemands = this.ListComponentDemands.bind(this);
  }
  GetBuild(request: GetBuildRequest): Promise<GetBuildResponse> {
    const data = GetBuildRequest.encode(request).finish();
    const promise = this.rpc.request("bottle.assembly.V1", "GetBuild", data);
    return promise.then((data) => GetBuildResponse.decode(new Reader(data)));
  }

  ListPickableBuilds(
    request: ListPickableBuildsRequest
  ): Promise<ListPickableBuildsResponse> {
    const data = ListPickableBuildsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "bottle.assembly.V1",
      "ListPickableBuilds",
      data
    );
    return promise.then((data) =>
      ListPickableBuildsResponse.decode(new Reader(data))
    );
  }

  ListComponentDemands(
    request: ListComponentDemandsRequest
  ): Promise<ListComponentDemandsResponse> {
    const data = ListComponentDemandsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "bottle.assembly.V1",
      "ListComponentDemands",
      data
    );
    return promise.then((data) =>
      ListComponentDemandsResponse.decode(new Reader(data))
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
