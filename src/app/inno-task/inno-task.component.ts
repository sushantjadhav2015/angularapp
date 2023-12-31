import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-inno-task",
  templateUrl: "./inno-task.component.html",
  styleUrls: ["./inno-task.component.css"],
})
export class InnoTaskComponent implements OnInit {
  url = "https://jsonplaceholder.typicode.com/posts/1";

  array: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get(this.url).subscribe((res) => {
      console.log(res);
      this.array.push(res);
    });
  }
}
