import {Injectable} from '@angular/core';
//import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Headers, Http, Response ,RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Item} from './item';
import {User} from './user';


@Injectable()
export class ItemService{
    private itemsUrl = 'api/items';
    private apiUrl= 'http://mi-linux.wlv.ac.uk/~1228264/webservice/index.php/api';
    constructor(private http:Http){}
    private headers =new Headers({'Content-Type':'application/json'})

    getItems(): Observable<Item[]>{
        const url = `${this.apiUrl}/getitems/`;
		return this.http.get(url)
						.map(this.extractData)
						.catch(this.handleError);
    }

    getItem(id: number): Observable<Item> {
	  const url = `${this.apiUrl}/detail2/${id}`;
	  return this.http.get(url)
		.map(this.extractData)
        .catch(this.handleError);
    }
    create (name: string): Observable<User> {
		let options = new RequestOptions();
		const url = `${this.apiUrl}/register`;
		
		return this.http.post(url,{name},options)
						.map(this.extractData)
						.catch(this.handleError);
    }

    /// needs changing but I'm too scared
    update(item:Item):Promise<Item>{
        const url = '{this.itemsUrl}/${item.id}';
        console.log(item);
        console.log(JSON.stringify(item));
        return this.http
                   .put(url, JSON.stringify(item),{headers:this.headers})
                   .toPromise()
                   .then(()=>item)
                   .catch(this.handleError);
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