import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FashionProduct } from 'src/app/models/fashionProduct';

@Component({
  selector: 'app-boyswear',
  templateUrl: './boyswear.component.html',
  styleUrls: ['./boyswear.component.css']
})
export class BoyswearComponent implements OnInit {

  arrProduct:FashionProduct[]=[
    {id:'B1', url:'https://m.media-amazon.com/images/I/71Dtv9KqErL._AC_UL320_.jpg',title:'T-Shirt',content:'Some quick example text to build on the card title and make up the bulk of the cards content'},
    {id:'B2', url:'https://m.media-amazon.com/images/I/61DkfcFSjBL._AC_UL320_.jpg',title:'T-Shirt',content:'Some quick example text to build on the card title and make up the bulk of the cards content'},
    {id:'B3', url:'https://m.media-amazon.com/images/I/51w7bn+zn6L._AC_UL320_.jpg',title:'T-Shirt',content:'Some quick example text to build on the card title and make up the bulk of the cards content'},
    {id:'B4', url:'https://m.media-amazon.com/images/I/71CPzIvedhL._AC_UL320_.jpg',title:'T-Shirt',content:'Some quick example text to build on the card title and make up the bulk of the cards content'},
    {id:'B5', url:'https://m.media-amazon.com/images/I/61H-RCSJ3sL._AC_UL320_.jpg',title:'T-Shirt',content:'Some quick example text to build on the card title and make up the bulk of the cards content'}


  ]
  constructor(private route:Router) { }

  ngOnInit() {
  }

  addToCard(){
    this.route.navigate(['/addtocard'])
  }

}
