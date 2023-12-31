import { Component, OnInit } from "@angular/core";
import { InterivewService } from "../services/interivew.service";

@Component({
  selector: "app-interview",
  templateUrl: "./interview.component.html",
  styleUrls: ["./interview.component.css"],
})
export class InterviewComponent implements OnInit {
title1:string="Template Driven Form"

  dataArray: any = [
    { name: "sushant jadhav", age: 28, location: "kolhapur" },
    { name: "shital jadhav", age: 26, location: "kolhapur" },
    { name: "sushant jadhav", age: 28, location: "kolhapur" },
    { name: "sushant jadhav", age: 28, location: "kolhapur" },
  ];

  constructor(private interviewSer: InterivewService) {}

  array: any = [];
  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.interviewSer.getData().subscribe((res) => {
      console.log(res);
      this.array.push(res);
    });
  }

  login(data:any){
    console.log(data.value);
    
  }
}
