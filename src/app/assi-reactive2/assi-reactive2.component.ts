import { Component, createPlatform, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-assi-reactive2",
  templateUrl: "./assi-reactive2.component.html",
  styleUrls: ["./assi-reactive2.component.css"],
})
export class AssiReactive2Component implements OnInit {
  [x: string]: any;
  myForm: FormGroup;
  // issubmitted = false;

  countrie = [
    {
      id: 91,
      country: "india",
    },
    {
      id: 941,
      country: "USA",
    },
    {
      id: 81,
      country: "Germany",
    },
    {
      id: 51,
      country: "spain",
    },
    {
      id: 82,
      country: "Argentina",
    },
  ];

  constructor() {
    this.createForm();
  }

  ngOnInit() {
    this.getDate();

    setTimeout(() => {
      this.myForm.patchValue({
        fullName: "sushant jadhav",
        username: "Codemind123",
        email: "codemind@gamil.com",
        bio: "Lorem lpsum is simple dummy text of the printing and typesetting industry. lorem lpsum has been the industrys standaed dummy text ever since the 1500s",
        userName: "sushant123",
        password: "123456789",
        phoneCode: "9096046516",
      });
    }, 1000);
  }

  getDate() {
    var date: any = new Date();
    var toDate: any = date.getDate();
    if (toDate < 10) {
      toDate = "0" + toDate;
    }

    var month: any = date.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }

    var year: any = date.getFullYear();
    this.maxDate = year + "-" + month + "-" + toDate;
  }

  createForm() {
    this.myForm = new FormGroup({
      fullName: new FormControl("", [Validators.required]),
      date: new FormControl("", Validators.required),
      gender: new FormControl("", Validators.required),
      countr: new FormControl("", Validators.required),
      phoneCode: new FormControl("", [Validators.pattern(/^[6-9]\d{9}$/)]),
      bio: new FormControl("", [
        Validators.required,
        Validators.maxLength(256),
      ]),
      userName: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.pattern(/^([a-zA-Z0-9]){10}$/),
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      checkBox: new FormControl("", Validators.requiredTrue),

      password:new FormControl ('', [Validators.required, Validators.minLength(6),Validators.pattern(/^([A-Za-z0-9])[A-Za-z0-9]{8}$/)]),
      confirmpassword: new FormControl('', Validators.required),

    }, { });
  }

  // onSubmit() {
  //   this.isSubmitted = true; //to show form data on browser
  //   // alert("method called");
  //   console.log("myFrom", this.myForm.value);
  // }

  get fullName() {
    return this.myForm.get("fullName");
  }

  get phoneCode() {
    return this.myForm.get("phoneCode");
  }
  
}
