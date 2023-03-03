import { Component, createPlatform, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-assi-reactive2",
  templateUrl: "./assi-reactive2.component.html",
  styleUrls: ["./assi-reactive2.component.css"],
})
export class AssiReactive2Component implements OnInit {
  [x: string]: any;
  public myForm: FormGroup | any;
  notSame: boolean = false;

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

  constructor(private fb: FormBuilder) {
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
    this.createForm();

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

    this.myForm = this.fb.group(
      {
        fullName: this.fb.control("", [Validators.required]),
        date: this.fb.control("", Validators.required),
        gender: this.fb.control("", Validators.required),
        country: this.fb.control("", Validators.required),
        phoneCode: this.fb.control("",[Validators.pattern(/^[6-9]\d{9}$/)]),
        bio: this.fb.control("", Validators.maxLength(256)),
        userName: this.fb.control("", [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25),
          Validators.pattern(/^([a-zA-Z0-9]){10}$/),
        ]),
        email: this.fb.control("", [Validators.required, Validators.email]),
        checkBox: this.fb.control("", Validators.requiredTrue),
        password: this.fb.control("", [Validators.required]),
        confirmpassword: this.fb.control("", [Validators.required]),
      },
      this.validateAreEqual
    );
  }

  onSubmit() {
    this.isSubmitted = true; //to show form data on browser
    // alert("method called");
    console.log("myFrom", this.myForm.value);
  }

  get fullName() {
    return this.myForm.get("fullName");
  }

  get phoneCode() {
    return this.myForm.get("phoneCode");
  }

  public validateAreEqual(
    control: AbstractControl
  ): { notSame: boolean } | null {
    return control.value.password === control.value.confirmpassword
      ? null
      : { notSame: true };
  }
}
