import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {TitleComponent} from './title.component';
import {Item} from './item';
import {User} from './user';
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
    errorMessage: string;
	mode = 'Observable';
    user:User;

    constructor(private itemService: ItemService, private router:Router){}

    goToDetail(){
        this.router.navigate(['/detail',this.selectedItem.id])
    }
    getItems(): void{
        this.itemService.getItems()
            .subscribe(
                items=>this.items=items,
                error=>this.errorMessage=<any>error);
    }
    ngOnInit(): void{
        this.getItems();
    }
    onSelect(item: Item): void{
        this.selectedItem = item;
    }
    register(name: string): void {
	  name = name.trim();
	  if (!name) { return; }
	  this.itemService.create(name)
					  .subscribe(
                       user=>this.user = user, 
					   error => this.errorMessage = <any>error);
	}
}



