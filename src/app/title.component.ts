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
    this.sharedService.authorized$.subscribe(
      data=>{        
        var currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
        this.username = "Welcome " + currentUser.name + "! ";     
      })      
  }
  ngOnChanges():void{

  }
}