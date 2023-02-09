import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
// import { log } from "console";

@Component({
  selector: "app-test2",
  templateUrl: "./test2.component.html",
  styleUrls: ["./test2.component.css"],
})
export class Test2Component implements OnInit {
  @Input() child: string; //input property decorator (data transfer from paraent to chaild)

  @Output() fromChild: EventEmitter<string> = new EventEmitter<string>(); // output decorater property

  count: number = 0;
  fristName: string = "rocy";
  userName: string;
  password: number | string;

  lastname: string = "Bhai";

  myName: string = "sushant jadhav";
  currentVale = "";
  constructor() {}

  ngOnInit() {
    console.log(this.child);
  }

  // click event
  getName(myName) {
    alert(myName);
  }
  // keyup event
  keyUpEvent(eve) {
    console.log(eve);
  }

  getData(val) {
    console.log(val);
    this.currentVale = val;
  }

  // on click button
  onButtuonClick() {
    let count = (this.count += 1);
    console.log(count);
  }

  // this is keyup event ...when we preass any key
  onKeyUp(value) {
    console.log(`$event`, value.target.value);
  }
  // login page
  // login button
  status1 = "userName";
  login(userName) {
    if (this.status1 === "userName") {
      console.log(`User name: ${this.userName} and password: ${this.password}`);
    } else {
      console.log(`enter valid data`);
    }
  }
  // clear button
  clear() {
    this.userName = "";
    this.password = "";
  }
  sendToParent() {
    this.fromChild.emit(this.lastname);
  }
}
