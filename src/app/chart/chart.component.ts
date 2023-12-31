import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"],
})
export class ChartComponent implements OnInit, AfterViewInit {
  constructor() {}

  canvas: any;
  ctx: any;
  @ViewChild("mychart", { static: false }) mychart: any;

  ngAfterViewInit(): void {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext("2d");

    new Chart(this.ctx, {
      type: "bar",
      data: {
        datasets: [
          {
            label: "Current Value",
            data: [0, 20, 40, 50],
            backgroundColor: "rgb(115 185 243 / 65%)",
            borderColor: "#007ee7",
            fill: true,
          },
          {
            label: "Invested Amount",
            data: [0, 20, 40, 60, 80],
            backgroundColor: "#47a0e8",
            borderColor: "#007ee7",
            fill: true,
          },
        ],
        labels: ["January 2019", "February 2019", "March 2019", "April 2019"],
      },
    });
  }

  ngOnInit() {}
}
