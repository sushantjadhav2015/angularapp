import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"],
})
export class CalculatorComponent implements OnInit {
  public num1: number;
  public num2: number;
  public num3: number;
  constructor() {}
  ngOnInit() {}

  add() {
    this.num3 = this.num1 + this.num2;
  }

  sub() {
    this.num3 = this.num1 - this.num2;
  }
  multi() {
    this.num3 = this.num1 * this.num2;
  }

  divide() {
    this.num3 = this.num1 / this.num2;
  }

}
