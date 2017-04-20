import {Component, OnInit} from '@angular/core';
import { Router }            from '@angular/router';

import {Item} from './item';
import {ItemService} from './item.service';

@Component({
    moduleId:module.id,
    selector: 'my-dashboard',
    templateUrl:'dashboard.component.html',
    styleUrls:['dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    items: Item[];
    errorMessage: string;
	mode = 'Observable';
    constructor(
        private router:Router,
        private itemService: ItemService){}

    ngOnInit(): void {
        this.itemService.getItems()
                .subscribe(
                items=>this.items=items.slice(1,5),
                error => this.errorMessage = <any>error);
    }
    goToDetail(item: Item) {
       let url = `/detail/${item.id}`;
       this.router.navigateByUrl(url);
    }
}