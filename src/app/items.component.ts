import {Component} from '@angular/core';
import {TitleComponent} from './title.component';
import {Item} from './item';

import {OnInit} from '@angular/core';
import {ItemService} from './item.service';


@Component({
    selector: 'my-items',    
    templateUrl:'./items.component.html',
    styleUrls:  ['./items.component.css'],
    providers: [ItemService]
   
})
export class ItemsComponent implements OnInit{
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



