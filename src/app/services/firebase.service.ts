import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  url = "https://angular2023-1d965-default-rtdb.firebaseio.com/";
  urlPractice = "https://fir-practice-1bcf9-default-rtdb.firebaseio.com/";

  constructor(private httpClient: HttpClient) {}

  // this logic for url or angular2023 firbase project
  createPost() {
    let postData = {
      title: "This is firebase example",
      Content: "we are calling angular post method",
    };
    return this.httpClient.post(this.url + "post.json", postData);
  }

  getPostDataFirebase() {
    return this.httpClient.get(this.url + "post.json");
  }


  

  // this logic for urlPractice or firebase practice project
  createPostPractice() {
    let postdata = {
      title: "sushant jadhav",
      location: "kolhapur",
      passout: "2017",
    };
    return this.httpClient.post(this.urlPractice + "posts.json", postdata);
  }

  getPostdataFromfriebase() {
    return this.httpClient.get(this.urlPractice + "posts.json");
  }
}
