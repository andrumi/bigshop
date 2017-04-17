import {Component} from '@angular/core';
import {TitleComponent} from './title.component';
import {Item} from './item';

import {OnInit} from '@angular/core';
import {ItemService} from './item.service';


@Component({
    selector: 'my-app',    
    templateUrl:'./app.component.html',
    styleUrls:  ['./app.component.css'],
    providers: [ItemService]
   
})
export class AppComponent implements OnInit{
    title = "Big Shop";
    selectedItem: Item;
    items:Item[];

    constructor(private itemService: ItemService){}

    getItems(): void{
        this.itemService.getItems()
        .then(items=> this.items=items);
    }
    ngOnInit(): void{
        this.getItems();
    }
    onSelect(item: Item): void{
    this.selectedItem = item;
    }
    
}



