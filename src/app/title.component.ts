import { Component , OnInit, OnChanges} from '@angular/core';
import {User} from './user';
import {SharedService} from './shared.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  moduleId:module.id,
  selector: 'app-banner',
  templateUrl: 'title.component.html',
  styleUrls:  ['title.component.css']
})
export class TitleComponent implements OnChanges{
  title = 'Big Shop';
  user:User;
  username: any ='';
  
  constructor(private sharedService:SharedService){
    this.sharedService.username$.subscribe(
      data=>{
        // console.log("In banner with "+data);
        this.username= "Welcome " + data + "! ";
        // console.log("username is "+ this.username + "! ");
        
      }
    )
  }
  ngOnChanges():void{

  }

/*  ngOnInit(): void {
    console.log("In detect changes");
        try {
          var currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
          if (currentUser != null){
            this.user = new User;
            this.user.name = currentUser.name;
            this.user.email = currentUser.email;
            console.log("name inside header "+ this.user.name);
          }  else {
            console.log("in header with nothing");
          }  
        }catch (e){
            console.log("not working");
        }  
  }
 }*/
}