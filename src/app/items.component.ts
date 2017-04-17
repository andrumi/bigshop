import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {TitleComponent} from './title.component';
import {Item} from './item';
import {ItemService} from './item.service';


@Component({
    moduleId:module.id,
    selector: 'my-items',    
    templateUrl:'items.component.html',
    styleUrls:  ['items.component.css'],
    providers: [ItemService]
   
})
export class ItemsComponent implements OnInit{
    // title = "Big Shop";
    selectedItem: Item;
    items:Item[];

    constructor(private itemService: ItemService, private router:Router){}

    goToDetail(){
        this.router.navigate(['/detail',this.selectedItem.id])
    }
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



