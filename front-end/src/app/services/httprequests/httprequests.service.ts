import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttprequestsService {
  private environment: string = "http://localhost:3001";

  constructor(private _http: HttpClient) {}

  public get(router_api: string, data) {
    return this._http.get(this.environment + "/api/" + router_api + "/" + data);
  }

  public post(router_api: string, data) {
    return this._http.post(this.environment + "/api/" + router_api, data, {
      headers: { "Content-Type": "application/json" }
    });
  }

  public put(router_api: string, id: String, data) {
    return this._http.put(
      this.environment + "/api/" + router_api + "/" + id,
      data,
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  }

  public delete(router_api: string, data) {
    return this._http.delete(
      this.environment + "/api/" + router_api + "/" + data
    );
  }
}
