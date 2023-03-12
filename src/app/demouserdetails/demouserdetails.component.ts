import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-demouserdetails',
  templateUrl: './demouserdetails.component.html',
  styleUrls: ['./demouserdetails.component.css']
})
export class DemouserdetailsComponent implements OnInit {

  arrUserDetails:User[]=[];

  constructor(private route:ActivatedRoute, private userService:UserService) { }

  ngOnInit() {
    let id=this.route.snapshot.params['id'];

    this.userService.getuserById(id).subscribe(res=>{
      this.arrUserDetails.push(res);
      console.log('get user by id',res);  
    })
  }

}
