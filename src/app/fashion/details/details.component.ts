import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FashionService } from "src/app/services/fashion.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent implements OnInit {
  productKid: any;
  array = [];
  constructor(
    private route: ActivatedRoute,
    private productService: FashionService,
    private routeNav: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.productKid = this.productService.getItemById(id);
    this.array.push(this.productKid);
  }

  addToCart() {
    this.routeNav.navigate(["/addtocard"]);
  }
}
