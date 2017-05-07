import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {ItemService} from './item.service';
import {User} from './user';
import {SharedService} from './shared.service';


@Component({
    moduleId:module.id,
    selector:'register',
    templateUrl: 'register.component.html',
    styleUrls:['item-detail.component.css']
})
export class RegisterComponent implements OnInit{
    user: User;
    errorMessage: string;
    mode = 'Observable';
    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private location: Location,
        private sharedService: SharedService
    ){}
    ngOnInit(): void {

    }
    storeUser():void{       
        window.localStorage.setItem('currentUser',JSON.stringify(this.user));
        this.sharedService.publishData('authorized');
        this.location.back();
    }
    goBack(): void{     
        this.location.back();
    }
	register(username:string, password: string, email: string): void {
        this.user = new User;
        this.user.name= username;
        this.user.email= email;
        this.user.password = password;

        this.itemService.register(this.user)
            .subscribe(
                user => {this.user = user,this.storeUser()},
                error=> this.errorMessage = <any>error);
		
	}
}