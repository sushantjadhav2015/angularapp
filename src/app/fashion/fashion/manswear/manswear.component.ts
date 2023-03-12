import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manswear',
  templateUrl: './manswear.component.html',
  styleUrls: ['./manswear.component.css']
})
export class ManswearComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  addToCard(){
    this.route.navigate(['/addtocard'])
  }

}
