import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { ItemSearchService } from './item-search.service';
import { Item } from './item';

@Component({
  moduleId:module.id,
  selector: 'item-search',
  templateUrl: 'item-search.component.html',
  styleUrls: [ 'dashboard.component.css','item-search.component.css' ],
  providers: [ItemSearchService]
})
export class ItemSearchComponent implements OnInit {
    items: Observable<Item[]>;
    mode ='Observable';
    private searchTerms = new Subject<string>();
    constructor(
        private itemSearchService: ItemSearchService,
        private router: Router) {}
 
  // Push a search term into the observable stream.  
  search(term: string): void {
    this.searchTerms.next(term);
  }
  wssearch(term: string) {
        this.items = this.itemSearchService.wssearch(term);

    }
  
  // the method inside has been superceded so it may be ok to remove this?
  ngOnInit(): void {

/*    console.log("inside search component");   
    this.items =this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.itemSearchService
                                     .search(term)                                     
                                     :Observable.of<Item[]>([]))
                                     .catch(error=>{
                                       console.log(error);
                                       return Observable.of<Item[]>([]);
                                     })*/
      
   
  }
  gotoDetail(item: Item): void {
    let link = ['/detail', item.id];
    this.router.navigate(link);
  }
}
