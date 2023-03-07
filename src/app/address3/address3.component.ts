import { Component, OnInit } from "@angular/core";
import { AddressService } from "../services/address.service";

@Component({
  selector: "app-address3",
  templateUrl: "./address3.component.html",
  styleUrls: ["./address3.component.css"],
})
export class Address3Component implements OnInit {
  cityName;
  stateName;
  constructor(private addressService: AddressService) {
    this.addressService.cityName.subscribe((res) => {
      console.log("post Address city", res);
      this.cityName = res;
    });

    this.addressService.stateName.subscribe((res) => {
      console.log("post Address state", res);
      this.stateName = res;
    });
  }

  ngOnInit() {}
  address(city, state) {
    this.cityName = city.value;
    this.addressService.cityName.next(city.value);
  }

  addr(state) {
    this.stateName = state.value;
    this.addressService.stateName.next(state.value);
  }
}
