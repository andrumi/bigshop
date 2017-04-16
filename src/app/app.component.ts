import {Component} from '@angular/core';
import {TitleComponent} from './title.component';

export class Item {
    id: number;
    name: string;
    type: string;
    price: number;
    
}
@Component({
    selector: 'my-app',    
    templateUrl:'./app.component.html',
    styleUrls:  ['./app.component.css']
   
})
export class AppComponent{
    title = "Big Shop";
    selectedItem: Item;
    items = ITEMS;

    onSelect(item: Item): void{
    this.selectedItem = item;
}
}
const ITEMS: Item[] = [
  { id: 11, name: 'Topper', type: "Hat" , price:2.50},
  { id: 12, name: 'Trilby', type: "Hat" , price:2.50},
  { id: 13, name: 'Bowler',type: "Hat" , price:4.50 },
  { id: 14, name: 'Stetson',type: "Hat" , price:3.50 }
];


