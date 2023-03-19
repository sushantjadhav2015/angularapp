import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class WikiServiceService {
  constructor(private http: HttpClient) {}

  getData(space: string) {
    return this.http.get("https://en.wikipedia.org/w/api.php?", {
      params: {
        action: "query",
        format: "json",
        list: "search",
        utf8: "1",
        srsearch: space,
        origin: "*",
      },
    });
  }
}
