import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root",
})
export class UserService {
  url = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpUser: HttpClient) {}

  getUsers(): Observable<any> {
    return this.httpUser.get(this.url);
  }

  getuserById(id: number): Observable<any> {
    return this.httpUser.get(this.url + "/" + id);
  }
}
