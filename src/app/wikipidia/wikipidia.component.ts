import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { WikiServiceService } from "../services/wiki-service.service";

interface ServerResponse {
  query: {
    search: Array<any>;
  };
}

@Component({
  selector: "app-wikipidia",
  templateUrl: "./wikipidia.component.html",
  styleUrls: ["./wikipidia.component.css"],
})
export class WikipidiaComponent implements OnInit {
  arrayData=[];
  space: string;

  constructor(private wikiService: WikiServiceService) {}

  ngOnInit() {}

  getData(space: string) {
    this.wikiService.getData(this.space).subscribe((res: ServerResponse) => {
      this.arrayData = res.query.search;
      console.log("data coming from server", res);
    });
  }
}
