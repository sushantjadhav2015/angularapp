import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-assign-directive",
  templateUrl: "./assign-directive.component.html",
  styleUrls: ["./assign-directive.component.css"],
})
export class AssignDirectiveComponent implements OnInit {
  diplatDetails = false;
  totalClick = 0;
  str = "Button click successuful";
  buttanclicks = [];
  constructor() {}

  ngOnInit() {}

  toggleButtan() {
    this.diplatDetails = true;
    this.buttanclicks.push(this.str);
  }
}
