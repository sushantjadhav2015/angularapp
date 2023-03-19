import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RapidapiService {
  url = "https://yh-finance.p.rapidapi.com/auto-complete?q=tesla&region=US";

  constructor(private httpClinet: HttpClient) {}

  getFinance() {
    let headers = new HttpHeaders({
      "X-RapidAPI-Key": "be18ed9a5bmshf3f6f2acd0a8189p1d2896jsn7625ba457b19",
      "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
    });
    return this.httpClinet.get(this.url, { headers:headers });
  }

}