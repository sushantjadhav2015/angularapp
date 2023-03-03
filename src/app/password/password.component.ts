import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-password",
  templateUrl: "./password.component.html",
  styleUrls: ["./password.component.css"],
})
export class PasswordComponent implements OnInit {
  public newForm: FormGroup | any;  
  notSame:boolean=false;

  constructor() {}

  ngOnInit(): void {
    this.newForm = new FormGroup({
    password: new FormControl(null, [Validators.required]),
    confirm: new FormControl(null, [Validators.required])
  }, this.validateAreEqual)
}

  public validateAreEqual(control: AbstractControl): {notSame: boolean} | null {
      return  control.value.password  ===  control.value.confirm ? {notSame:false} : {notSame: true};
   }
}
