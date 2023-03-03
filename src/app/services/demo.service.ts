import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// apiUrl is free source servver linck from google
//this service is created to get data from srver and display on web pages
export class DemoService {
apiUrl="https://jsonplaceholder.typicode.com/users"


  constructor(private httpClient:HttpClient) { }

  getUsers(){
    return this.httpClient.get(this.apiUrl)
    
  }

}
