import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { MyserviceService } from "../services/myservice.service";

@Component({
  selector: "app-templateform",
  templateUrl: "./templateform.component.html",
  styleUrls: ["./templateform.component.css"],
})
export class TemplateformComponent implements OnInit {
  age;
  showAge;

  isSubmitted = false;

  isEmailValid = false;

  formData = {
    email: "",
    password: "",
    course: "",
    gender: "",
  };

  emails = "";
  fullName = "";
  defaultValue = "Angular";
  defaultGender = "Male";
  courses: string[] = ["Angular", "taypscript", "JavaScript"];

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
  constructor(private objService: MyserviceService, private route:Router) {}

  ngOnInit() {
    this.showAge = this.objService.print();
  }

  // lgin from

  login(form: NgForm) {
    this.route.navigate(['/userdetail'])
    this.isSubmitted = true;

    console.log(form);

    this.formData.email = form.value.userDetail.email;
    this.formData.password = form.value.userDetail.password;
    this.formData.course = form.value.course;
    this.formData.gender = form.value.gender;
    //form.reset();

    // following line used to set a default value as its after click on login button
    form.controls["course"].setValue("Angular");
    form.controls["gender"].patchValue("Male");

    // POST api/ Saveuser(formData);
  }

  checkemail(email) {
    console.log(email.value);

    const domain = email.value.substring(email.value.lastIndexOf("@") + 1); //gmail.com

    if (domain.toLowerCase() === "codemindtechnology.com") {
      this.isEmailValid = false;
    } else {
      this.isEmailValid = true;
    }
  }

  // feedback form
  submit(submitForm: NgForm) {
    console.log(submitForm.valid);
  }

  ageCalculator() {
    this.showAge=this.objService.ageCalculator(this.age)
  }

  display(){
    this.objService.display()
  }
}
