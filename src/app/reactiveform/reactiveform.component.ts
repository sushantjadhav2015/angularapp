import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: "app-reactiveform",
  templateUrl: "./reactiveform.component.html",
  styleUrls: ["./reactiveform.component.css"],
})
export class ReactiveformComponent implements OnInit {
  [x: string]: any;
  myReactiveForm: FormGroup; // FormGroup and formControl imported from angular forms module

  isSubmited: boolean = false; //to show form data on browser
  constructor() {
    this.createForm();
  }


  notAllowedNames=['sushant','ram','sham']
  ngOnInit() {
    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     'userDetails' : {
    //       'username': 'Codemind123',
    //       'email': 'codemind@gamil.com'
    //     },
    //     'course': 'HTML',
    //     'skills': ['angular']
    //   })
    // })


    setTimeout(() => {
      this.myReactiveForm.patchValue({
        userDetails: {
          username: "Codemind123",
          email: "codemind@gamil.com",
        },
      });
    }, 1000);
  }

  createForm() {
    this.myReactiveForm = new FormGroup({
      userDeatils: new FormGroup({
        username: new FormControl(null,[Validators.required, this.NaNames.bind(this) ]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.NaEmails)}),
      // * course,username,email is the form control names
      course: new FormControl(null),

      skills: new FormArray([new FormControl(null, Validators.required)]),
    });
  }

  OnSubmit() {
    this.isSubmited = true; //to show form data on browser
    alert("method called");
    console.log("My ReactiveForm", this.myReactiveForm.value);
  }

  OnAddSkills() {
    (<FormArray>this.myReactiveForm.get("skills")).push(
      new FormControl(null, Validators.required)
    );
  }


  // custom validator using erroes code
  NaNames(control: FormControl) {
    if(this.notAllowedNames.indexOf(control.value) !== -1) {
      return {'namesNotAllowed': true}
    } else {
      return null;
    }
  }

  // custom  asyc validator for this email adress is not allowed
    NaEmails(control: FormControl) : Promise<any> | Observable<any> 
    {
      const myResponse = new Promise<any> ((resolve, reject) => {
        setTimeout(() => {
          if(control.value == 'codemindtechnology@gmail.com') {
            resolve({'emailNotAllowed': true})
          } else {
            resolve(null)
          }
        }, 3000)
      })
      return myResponse;
    }
  }
  