import { Component, OnInit } from "@angular/core";
import { Country } from "../models/country";
import { Movie } from "../models/movie";

@Component({
  selector: "app-ng-for",
  templateUrl: "./ng-for.component.html",
  styleUrls: ["./ng-for.component.css"],
})
export class NgForComponent implements OnInit {
  title: string = "All movie in table form by using *ngFor directive";

  movies: Movie[] = [
    {
      title: "3 idots",
      director: "rajkumar",
      cast: "Amir",
      releaseDate: "2009",
    },
    { title: "Tumbad", director: "Rahil", cast: "Rahi", releaseDate: "2020" },
    {
      title: "Kantra",
      director: "Rishab",
      cast: "Rishab",
      releaseDate: "2022",
    },
  ];

  fevsong = ["ved", "teri meri yari", "ti sadya kay krte"];

  // assiginment of dropdown using ngFor directive
  countryList: Array<any> = [
    {
      countryName: "India",
      states: ["Maharashtra", "Gujrat", "kerla", "Karnataka"],
    },
    {
      countryName: "Australia",
      states: ["Queesland", "darwin", "Brisbane", "Sydney"],
    },
    {
      countryName: "Germany",
      states: ["Berlin", "Bavaria", "Thuringia", "Baden"],
    },
    {
      countryName: "France",
      states: ["Brittany", "Corsica", "Grand Est", "Paris Region"],
    },
  ];

  states: Array<any>;
  changeCountrys(count) {
    this.states = this.countryList.find((x) => x.countryName == count).states;
  }

  constructor() {}

  ngOnInit() {}
}
