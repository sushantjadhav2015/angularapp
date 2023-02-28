import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Alert } from "selenium-webdriver";

@Component({
  selector: "app-template-assign",
  templateUrl: "./template-assign.component.html",
  styleUrls: ["./template-assign.component.css"],
})
export class TemplateAssignComponent implements OnInit {
  isSubmitted = false;
  defaultAge = 17;
  defaultGender = "Male";
  defaultCity = "Mumbai";
  isAgeValid = false;
  confirmpassword: any;
  formData = {
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phone:"",
    gender:"",
    city:"",
    password:"",
    confirmpassword:""
  };

  genders = [
    {
      id: "1",
      value: "Male",
    },
    {
      id: "2",
      value: "Female",
    },
  ];

  cities: string[] = ["Mumbai", "Kolkata", "Delhi"];
  model: any = {};
  constructor() {}

  ngOnInit() {}

  registrationForm(form: NgForm) {
    this.isSubmitted = true;

    console.log(form);

    this.formData.firstName = form.value.userDetail.firstName;
    this.formData.lastName = form.value.userDetail.lastName;
    this.formData.age = form.value.age;
    this.formData.email = form.value.email;
    this.formData.phone=form.value.phone;
    this.formData.city=form.value.city
    this.formData.gender=form.value.gender
    this.formData.password=form.value.password
    this.formData.confirmpassword=form.value.confirmpassword

    alert(this.model)

    form.controls["gender"].patchValue("Male");
    form.controls["city"].patchValue("Mumbai");

  }

}
