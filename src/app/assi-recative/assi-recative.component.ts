import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatFormFieldControl } from "@angular/material";

@Component({
  selector: "app-assi-recative",
  templateUrl: "./assi-recative.component.html",
  styleUrls: ["./assi-recative.component.css"],
})
export class AssiRecativeComponent implements OnInit {
  reactiveForm: FormGroup;
  isSubmitted: boolean = false;
  defualtCourse:string="Advance"

  minDate: any = "2023-12-10";
  constructor() {
    this.createForm();
    this.getDate();
  }

  ngOnInit() {}

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
    this.minDate = year + "-" + month + "-" + toDate;
    console.log(year);
  }

  createForm() {
    this.reactiveForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      course: new FormControl("Advance"),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
      ]),
      date: new FormControl(""),
    });
  }

  onSubmit() {
    this.isSubmitted = true; //to show form data on browser
    // alert("method called");
    console.log(this.reactiveForm.value);

    }

  onReset() {
    this.reactiveForm.reset();
  }
}
