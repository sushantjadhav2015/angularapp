import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-output-decorator",
  templateUrl: "./output-decorator.component.html",
  styleUrls: ["./output-decorator.component.css"],
})
export class OutputDecoratorComponent implements OnInit {
  @Output() fromOut: EventEmitter<string> = new EventEmitter<string>();
  name: string = "sushant jadhav";
  @Output() showingDetails: EventEmitter<string> = new EventEmitter<string>();
  emp = {
    name: 'Sushant jadhav',
    age: '27',
    employeeId:'SJ-22',
  };

  constructor() {}

  ngOnInit() {}

  sendParent() {
    this.fromOut.emit(this.name);
  }
  sendEmpTOParent() {
    this.showingDetails.emit(this.emp.name);
    this.showingDetails.emit(this.emp.age);
    this.showingDetails.emit(this.emp.employeeId);
  }
}
