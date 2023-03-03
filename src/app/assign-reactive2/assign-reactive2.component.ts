import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-assign-reactive2",
  templateUrl: "./assign-reactive2.component.html",
  styleUrls: ["./assign-reactive2.component.css"],
})
export class AssignReactive2Component implements OnInit {
  loginForm: FormGroup;

  error_messages = {
    fullName: [
      { type: "required", message: "Full Name is required." },
      { type: "minlength", message: "Minimum 5 char requried" },
    ],

    birthDate: [{ type: "required", message: "Birth date is required." }],

    phoneCode: [
      { type: "required", message: "Phone number is required." },
      { type: "minlength", message: "Phone number must be contain 10 number." },
    ],

    email: [
      { type: "required", message: "Email is required." },
      { type: "minlength", message: "Email length." },
      { type: "maxlength", message: "Email length." },
      { type: "required", message: "please enter a valid email address." },
    ],

    password: [
      { type: "required", message: "password is required." },
      { type: "minlength", message: "password length." },
      { type: "maxlength", message: "password length." },
    ],
    confirmpassword: [
      { type: "required", message: "password is required." },
      { type: "minlength", message: "password length." },
      { type: "maxlength", message: "password length." },
    ],
  };

  constructor(public formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group(
      {
        fullName: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(5),
          ])
        ),
        birthDate: new FormControl(
          "",
          Validators.compose([Validators.required])
        ),

        // phoneCode: new FormControl([
        //   "",
        //   Validators.required,
        //   Validators.maxLength(10),
        // ]),

        email: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30),
          ])
        ),
        phoneCode: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(10),
          ])
        ),

        password: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30),
          ])
        ),
        confirmpassword: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30),
          ])
        ),
      },
      {
        // validators: this.password.bind(this),
      }
    );
  }

  ngOnInit() { }

  // getDate() {

  //   var date: any = new Date();
  //   var toDate: any = date.getDate();
  //   if (toDate < 10) {
  //     toDate = "0" + toDate;
  //   }

  //   var month: any = date.getMonth() + 1;
  //   if (month < 10) {
  //     month = "0" + month;
  //   }

  //   var year: any = date.getFullYear();
  //   this.maxDate = year + "-" + month + "-" + toDate;
  // }

  // password(formGroup: FormGroup) {
  //   const { value: password } = formGroup.get("password");
  //   const { value: confirmPassword } = formGroup.get("confirmpassword");
  //   return password === confirmPassword ? null : { passwordNotMatch: true };
  // }
}
