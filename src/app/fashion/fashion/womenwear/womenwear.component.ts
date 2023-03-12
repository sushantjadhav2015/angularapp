import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-womenwear',
  templateUrl: './womenwear.component.html',
  styleUrls: ['./womenwear.component.css']
})
export class WomenwearComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  addToCard(){
    this.route.navigate(['/addtocard'])
  }
}
