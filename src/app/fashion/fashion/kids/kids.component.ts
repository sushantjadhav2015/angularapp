import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FashionService } from "src/app/services/fashion.service";

@Component({
  selector: "app-kids",
  templateUrl: "./kids.component.html",
  styleUrls: ["./kids.component.css"],
})
export class KidsComponent implements OnInit {

  products:any[];

  constructor(private route: Router, private fashionService: FashionService) {}

  ngOnInit(): void {
    //get data from service arrayProdut
    this.products=this.fashionService.getKid()
  }

  addToCard() {
    this.route.navigate(["/addtocard"]);
  }

}
