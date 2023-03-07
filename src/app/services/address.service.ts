import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  cityName = new BehaviorSubject<any>('Kolhapur')
  stateName= new BehaviorSubject<any>('Maharshtra')

  constructor() { }
}
