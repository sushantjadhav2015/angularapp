import { Component, OnInit } from '@angular/core';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-address1',
  templateUrl: './address1.component.html',
  styleUrls: ['./address1.component.css']
})
export class Address1Component implements OnInit {

  cityName
  stateName
    constructor(private addressService:AddressService) { 
      this.addressService.cityName.subscribe(res=>{
        console.log('office Address',res);
  
        this.cityName=res;
      })
      this.addressService.stateName.subscribe(res=>{
        console.log('office Address',res);
        this.stateName=res;
      })
  
    }
  
    ngOnInit() {
    }
    address(city,state){
      this.cityName=city.value;
      this.addressService.cityName.next(city.value);
    }
  
    addr(state){
      this.stateName=state.value;
      this.addressService.stateName.next(state.value)
    }
  }
