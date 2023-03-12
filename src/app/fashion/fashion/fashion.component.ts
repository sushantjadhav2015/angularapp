import { Component, OnInit } from "@angular/core";
import { FashionNav } from "src/app/models/fashionNav";

@Component({
  selector: "app-fashion",
  templateUrl: "./fashion.component.html",
  styleUrls: ["./fashion.component.css"],
})
export class FashionComponent implements OnInit {
  title: string = "";
  fashion: FashionNav[] = [
    {
      id: 1,
      url: "https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Flips/Winter22/halo/Halo_1._SS300_QL85_.jpg",
      title: "Boys",
      link: "boys",
    },
    {
      id: 2,
      url: "https://m.media-amazon.com/images/G/31/img22/Fashion/Event/Jupiter22/teaser/Halos/Deals/11._SS300_QL85_.jpg",
      title: "Kids",
      link: "kids",
    },
    {
      id: 3,
      url: "https://m.media-amazon.com/images/G/31/img21/MA2022/Winterflip2/P0/HALO/2._SS300_QL85_.jpg",
      title: "Man's wear",
      link: "manswear",
    },
    {
      id: 4,
      url: "https://m.media-amazon.com/images/G/31/img22/Fashion/Event/Jupiter22/teaser/Halos/Deals/02._SS300_QL85_.jpg",
      title: "Women's wear",
      link: "womenwear",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
