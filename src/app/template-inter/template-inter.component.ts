import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-template-inter",
  templateUrl: "./template-inter.component.html",
  styleUrls: ["./template-inter.component.css"],
})
export class TemplateInterComponent implements OnInit {
  username = "";
  password = "";
  invalidCredentials = false;
  sampleForm: FormGroup;

  constructor(private route: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.sampleForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      skills: this.fb.array([]),
    });
  }

  login() {
    if (this.username === "sushant" && this.password === "123456") {
      this.route.navigate(["/list"], {
        queryParams: { username: this.username, password: this.password },
      });
    } else {
      this.invalidCredentials = true;
    }
  }

  OnAddSkills() {
    (<FormArray>this.sampleForm.get("skills")).push(
      new FormControl(null, Validators.required)
    );
  }

  removeSkill(i) {
    <FormArray>this.sampleForm.get("skills");
    // myArray.removeAt(index);
  }

  onSubmit() {}
}
