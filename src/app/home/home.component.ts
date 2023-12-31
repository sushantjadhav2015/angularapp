import { Component, OnInit } from "@angular/core";
import { from, of } from "rxjs";
import { FirebaseService } from "../services/firebase.service";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private firebaseService: FirebaseService) {}

  arrayApi = [];
  data;
  ngOnInit() {
    // *following 2 examples are for refrance of pipe oprator  which is used to connect multiple opratoers
    //TODO 1) emit(1,2,3,4,5)
    // // create custom obsarable by using from method of RxJs
    // const source = from([1, 2, 3, 4, 5]);
    // // i want to filter out non even numbers
    // // pipe is used to conenct or call multipal obsarable oprators
    // const example = source.pipe(filter((num) => num % 2 === 0));
    // example.subscribe((res) => {
    //   console.log(`Even number : ${res}`);
    // });
    //TODO 2) another way to get data as like 1,2,3,4, o/p 2,3,4,
    // // we can create obsarable by using of method
    // const obs = of(1, 2, 3)
    //   .pipe(map((x) => x + 1))
    //   .subscribe((res) => {
    //     console.log(`obs data ${res}`);
    //   });
  }

  createPosts() {
    this.firebaseService.createPost().subscribe((res) => {
      console.log(res);
    });
  }

  // data is get in the form of array and with id, title, etc
  getData() {
    // this.firebaseService.getPostDataFirebase().subscribe((res) => {
    //   console.log(res);
    // });

    this.firebaseService
      .getPostDataFirebase()
      .pipe(
        map((ResponseData) => {
          // empty array
          const postArray = [];
          // for loop
          for (const key in ResponseData) {
            // check the key
            if (ResponseData.hasOwnProperty(key)) {
              // push new value in array
              postArray.push({ ...ResponseData[key], id: key });
            }
          }
          return postArray;
        })
      )
      .subscribe((res) => {
        console.log(`After manipulate data`, res);
        this.arrayApi = res;
      });
  }
}
