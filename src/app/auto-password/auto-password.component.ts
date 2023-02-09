import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { generate } from "rxjs";

@Component({
  selector: "app-auto-password",
  templateUrl: "./auto-password.component.html",
  styleUrls: ["./auto-password.component.css"],
})
export class AutoPasswordComponent implements OnInit {
  @Output() password: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  getPassword() {
    this.password.emit();
  }
}
