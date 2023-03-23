import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostService } from "src/app/services/post.service";

@Component({
  selector: "app-demopostdetails",
  templateUrl: "./demopostdetails.component.html",
  styleUrls: ["./demopostdetails.component.css"],
})
export class DemopostdetailsComponent implements OnInit {
  // requred to inject activated route
arrayId=[]

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params["id"];

    this.postService.getPostById(id).subscribe((res) => {
      this.arrayId=res
      console.log("Get post by id", res);
    });
  }
}
