import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-myapp",
  templateUrl: "./myapp.component.html",
  styleUrls: ["./myapp.component.css"],
})
export class MyappComponent {
  loginForm: FormGroup;

  error_messages = {
    fname: [{ type: "required", message: "First Name is required." }],

    lname: [{ type: "", message: "Last Name is required." }],

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
        fname: new FormControl("", Validators.compose([Validators.required])),
        lname: new FormControl(
          "",
          Validators.compose([Validators.nullValidator])
        ),
        email: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30),
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
        validators: this.password.bind(this),
      }
    );
  }

  ngOnInit() {}

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get("password");
    const { value: confirmPassword } = formGroup.get("confirmpassword");
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
}
