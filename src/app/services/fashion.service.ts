import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FashionService {
  arrayProducts = [
    {
      id: 201,
      url: "https://m.media-amazon.com/images/I/61hUgw1VSfL._AC_UL320_.jpg",
      title: "Shirt",
      content:
        "Some quick example text to build on the card title and make up the bulk of the cards content",
    },
    {
      id: 202,
      url: "https://m.media-amazon.com/images/I/814XsOvGXPL._AC_UL320_.jpg",
      title: "Shirt",
      content:
        "Some quick example text to build on the card title and make up the bulk of the cards content",
    },
    {
      id: 203,
      url: "https://m.media-amazon.com/images/I/A1TyKMfm-aL._AC_UL320_.jpg",
      title: "Shirt",
      content:
        "Some quick example text to build on the card title and make up the bulk of the cards content",
    },
  ];
  constructor() {}

  getKid() {
    return this.arrayProducts;
  }
  getItemById(id: number) {
    return this.arrayProducts.find(item => item.id === id);
  }

}
