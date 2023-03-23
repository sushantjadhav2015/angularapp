import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit {

  data:string='red'
  appChildExist:boolean=true
  myObservable: any;
  constructor() { }

  ngOnInit() {
    this.myObservable = of('This is custom observable').pipe(delay(3000));}

    handleData(value:any) {
    this.data = value.target.value;
  }

  OnDestroy(){
    this.appChildExist=false
  }

}
