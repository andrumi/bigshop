import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Item } from './item';

@Injectable()
export class ItemSearchService {
  private apiUrl= 'http://mi-linux.wlv.ac.uk/~1228264/webservice/index.php/api';
  constructor(private http: Http) {}

  search(term: string): Observable<Item[]> {
    const url = `${this.apiUrl}/search/${term}`; 
    return this.http
               .get(url)
               .map(response => response.json().data as Item[]);
  }
}