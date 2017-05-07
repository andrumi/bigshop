import { Injectable } from '@angular/core';
import { Http, Headers, Response }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Item } from './item';

@Injectable()
export class ItemSearchService {
  private apiUrl= 'http://mi-linux.wlv.ac.uk/~1228264/webservice/index.php/api';
  constructor(private http: Http) {}
  private headers =new Headers({'Content-Type':'application/json'})

  result: Observable<Item[]>;

  search(term: string) {    
        const serviceUrl = `${this.apiUrl}/search/${term}`;
        this.result = this.http
            .get(serviceUrl)
            .map(response => response.json());             
        return this.result;
    
  }

  private handleError(error: any): Promise<any>{
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
}