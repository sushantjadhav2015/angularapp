import { Component, Input, OnInit } from "@angular/core";
import { DemoService } from "../services/demo.service";
import { MyserviceService } from "../services/myservice.service";

@Component({
  selector: "app-service-practice",
  templateUrl: "./service-practice.component.html",
  styleUrls: ["./service-practice.component.css"],
})
export class ServicePracticeComponent implements OnInit {
  
  products: { name: string; id: string }[];
  namesearch: string = '';
  users:any=[]; //this array is created for to display data on web page by using *ngFor 

  constructor(
    private myservice: MyserviceService,
    private demoService: DemoService
  ) {}

  ngOnInit(): void {
    this.products = this.myservice.products;

    this.demoService.getUsers().subscribe(
      (data) => {
        this.users = data;
        console.log("user api results", data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
