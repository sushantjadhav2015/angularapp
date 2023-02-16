import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-templateform",
  templateUrl: "./templateform.component.html",
  styleUrls: ["./templateform.component.css"],
})
export class TemplateformComponent implements OnInit {
  emails = "";
  fullName = "";
  defaultValue = "Angular";
  defaultGender = "Male";
  courses: string[] = ["Angular", "taypscript", "JavaScript"];

  genders= [
    {
      id: '1',
      value: 'Male'
    },
    {
      id: '2',
      value: 'Female'
    }
  ];
  constructor() {}

  ngOnInit() {}

  // lgin from
  login(form: NgForm) {
    console.log(form.valid);
  }

  // feedback form
  submit(submitForm: NgForm) {
    console.log(submitForm.valid);
  }
}
