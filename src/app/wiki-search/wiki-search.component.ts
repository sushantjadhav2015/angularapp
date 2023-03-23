import { Component, OnInit } from '@angular/core';
import { WikiServiceService } from '../services/wiki-service.service';

@Component({
  selector: 'app-wiki-search',
  templateUrl: './wiki-search.component.html',
  styleUrls: ['./wiki-search.component.css']
})
export class WikiSearchComponent {

  isLoading = false;
  constructor(private _wikipediaService: WikiServiceService) {}
  pages = [];
  onTerm(term: string) {
    this.isLoading = true;
    this._wikipediaService.search(term).subscribe((res: any) => {
      this.pages = res.query.search;
      console.log(this.pages);
      this.isLoading = false;
    });
  }
}
