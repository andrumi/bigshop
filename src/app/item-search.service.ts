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
 // from github.com/bhaskeryadav
  ot: Observable<Item[]>;

  wssearch(term: string) {
        //For get method  
        const serviceUrl = `${this.apiUrl}/search/${term}`;
        this.ot = this.http
            .get(serviceUrl)
            .map(response => response.json());             
        return this.ot;
    }
  search(term: string): Observable<Item[]> {
    const url = `${this.apiUrl}/search/${term}`;
    try{
     console.log("inside search servicee");
    return this.http
               .get(url)
               .map(response => response.json().data as Item[]);
               
    }catch (error){
      console.log(error);
    }
               
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