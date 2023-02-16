import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ngswitch-case",
  templateUrl: "./ngswitch-case.component.html",
  styleUrls: ["./ngswitch-case.component.css"],
})
export class SwitchCaseComponent implements OnInit {
  selectedProduct: string;

  constructor() {}
  ngOnInit() {}

  courses: any[] = [
    {
      id: 1,
      desc: "Angular core Deep Dive",
      iconURL: "https://images.app.goo.gl/ZecTCnGSZPuRteZz7",
      category: "INTERMIDEATE",
    },
    {
      id: 2,
      desc: "TypeScript zero to hero",
      iconURL: "https://images.app.goo.gl/ZecTCnGSZPuRteZz7",
      category: "BEGINEER",
    },
    {
      id: 3,
      desc: "Java Script ",
      iconURL: "https://images.app.goo.gl/ZecTCnGSZPuRteZz7",
      category: "ADVANCED",
    }
  ];

  getProductValue(val) {
    console.log("seleced value from dropdown", val.target.value);
    let selectedValue = val.target.value;
    this.selectedProduct = selectedValue;
  }
}
