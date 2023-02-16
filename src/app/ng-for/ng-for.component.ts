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

  countries = [
    { id: "1", name: "India" },
    { id: "2", name: "Germany" },
  ];

  arrStates: Array<any> = [
    { id: "s1", parentId: "2", name: "Bavaria" },
    { id: "s2", parentId: "2", name: "Barlin" },
    { id: "s3", parentId: "1", name: "Kerla" },
    { id: "s4", parentId: "1", name: "Goa" },
  ];

  newstates: Array<any> = [];

  ngOnInit() {}
  onCountrySelect(val) {
    this.newstates = this.arrStates.filter(
      (c) => c.parentId == val.target.value
    );
  }
}
