import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  apiUrl = "http://localhost:3000/todos";

  header = new HttpHeaders().set("Content-type", "apllication/json");

  constructor(private httpClient: HttpClient) {}
  // create method
  create(data: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, data);
  }

  // read
  list() {
    return this.httpClient.get(this.apiUrl);
  }

  // update method
  update(id: any, data: any) {
    let Api_Url = `${this.apiUrl}/${id}`;
    return this.httpClient.put(Api_Url, data);
  }

  delete(id: any) {
    let Api_Url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete(Api_Url);
  }
}
