import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-firebase-practice',
  templateUrl: './firebase-practice.component.html',
  styleUrls: ['./firebase-practice.component.css']
})
export class FirebasePracticeComponent implements OnInit {

  constructor(private firebasePracticeService:FirebaseService) { }

  ngOnInit() {}

  createData(){
    this.firebasePracticeService.createPostPractice().subscribe(responce =>{
      console.log(`data coming from firebase Practice server: ${responce}`);
    })
  }

  getData(){
    this.firebasePracticeService.getPostdataFromfriebase().subscribe(res=>{
      console.log(res);
      
    })
  }


}
