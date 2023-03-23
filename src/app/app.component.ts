import { Content } from "@angular/compiler/src/render3/r3_ast";
import { Component, OnInit } from "@angular/core";
import { RapidapiService } from "./rapidapi.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {

dataNumber:string='red'

  arrayNews=[];
  constructor(private rapidapiService:RapidapiService) {
    this.getEmployeeCount();
  }

  ngOnInit() {
    this.rapidapiService.getFinance().subscribe(res=>{
      console.log(`rapid res`,res);
      this.arrayNews.push(res)
    })
  
  }

  parantToChild: string = "I am coming from parant"; //use for data transfer from child to paraant
  // input decorater
  posts = [
    {
      title: "pam tree",
      Content: "I love this tree",
    },
    {
      title: "Mango",
      Content: "I love this tree",
    },
  ];

  title = "angularapp";
  name = "sushant";
  empcount;
  data = {
    name: "bank of india",
    id: "bank",
  };

  // image insert
  imageUrl =
    "https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80";

  // properties of password genrator
  passwordLength = 0;
  useLetter = true;
  useNumber = true;
  useSymbole = true;
  generatepassword = "";

  private letter = "abcdefghijklmnopqrstuvwxyz";
  private number = "1234567890";
  private symbole = "!@#$%^&*=+/";

  getEmployeeCount() {
    this.empcount = 10000;
  }

  currentTime(): any {
    var currentdate = new Date();
    var datetime =
      "Last Sync: " +
      currentdate.getDay() +
      "/" +
      currentdate.getMonth() +
      "/" +
      currentdate.getFullYear() +
      " @ " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    return currentdate;
  }

  getsPassword() {
    let charset = "";

    if (this.useLetter) {
      charset += this.useLetter;
    }
    if (this.useNumber) {
      charset += this.useNumber;
    }
    if (this.useSymbole) {
      charset += this.useSymbole;
    }
    this.generatepassword = Array.from({ length: this.passwordLength }, () =>
      charset.charAt(Math.floor(Math.random() * charset.length))
    ).join("");
  }

  // output decorator
  onParent(val) {
    console.log("from child to parent", val);
  }

  toOut(name) {
    console.log("Employee name :", name);
  }

  fromEmpDetails(details) {
    console.log(`Details from Object :`, details);
  }
  
  // handleData(value) {
  //   this.dataNumber = value.target.value;
  // }
}
