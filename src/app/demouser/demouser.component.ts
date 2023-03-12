import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-demouser",
  templateUrl: "./demouser.component.html",
  styleUrls: ["./demouser.component.css"],
})
export class DemouserComponent implements OnInit {
  arrUser: User[] = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((res) => {
      this.arrUser = res;
      console.log("Uaser array data", res);
    });
  }
}
