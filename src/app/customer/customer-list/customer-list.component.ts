import { Component, OnInit } from "@angular/core";
import { RapidapiService } from "src/app/rapidapi.service";

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.css"],
})
export class CustomerListComponent implements OnInit {
  arrayQuotes = [];
  arrayNews = [];
  constructor(private rapidapiService: RapidapiService) {}

  ngOnInit() {
    this.rapidapiService.getFinance().subscribe((res) => {
      // console.log(`rapid API`, res);
      this.arrayQuotes = res["quotes"];
      this.arrayNews = res["news"];
    });
  }
}
