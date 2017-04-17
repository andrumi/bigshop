import {Component, OnInit} from '@angular/core';

import {Item} from './item';
import {ItemService} from './item.service';

@Component({
    selector: 'my-dashboard',
    templateUrl:'./dashboard.component.html'
})
export class DashboardComponent implements OnInit{
    items: Item[];
    constructor(private itemService: ItemService){}

    ngOnInit(): void {
        this.itemService.getItems()
            .then(items => this.items = items.slice(1,5));
    }
}