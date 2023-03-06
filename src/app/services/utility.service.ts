import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  // userName = new Subject<any>(); // observable

  userName = new BehaviorSubject<any>('Codemind1122');
  constructor() { }
}
