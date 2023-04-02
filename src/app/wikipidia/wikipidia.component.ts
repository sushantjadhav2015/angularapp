import { Component, OnInit } from "@angular/core";
import { WikiServiceService } from "../services/wiki-service.service";


@Component({
  selector: "app-wikipidia",
  templateUrl: "./wikipidia.component.html",
  styleUrls: ["./wikipidia.component.css"],
})
export class WikipidiaComponent implements OnInit {
  constructor(private wikiService: WikiServiceService) {}
  arrayData = [];
  ngOnInit() {}

  getdata(uname: any) {
    this.wikiService.search(uname.value).subscribe((res:any) => {
      this.arrayData = res.query.search;
      console.log("data coming from server", res);
      // console.log(uname.value);
      
    });
  }
}
