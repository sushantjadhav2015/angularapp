import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-user-can-deactive',
  templateUrl: './add-user-can-deactive.component.html',
  styleUrls: ['./add-user-can-deactive.component.css']
})
export class AddUserCanDeactiveComponent implements OnInit {
  userName : FormControl = new FormControl();
  constructor() { }

  ngOnInit() {
  }

}
