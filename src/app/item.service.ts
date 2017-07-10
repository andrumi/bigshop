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
	private AUTHENTICATOR_KEY = '12345H';
	private secret: string;
    private itemsUrl = 'api/items';
    private apiUrl= 'http://***************************';
    constructor(private http:Http){}
    private headers = new Headers({'Content-Type':'application/json'})

	register(newuser: User): Observable<User>{
		let options = new RequestOptions();
		const url = `${this.apiUrl}/register`;
		var userJString =JSON.stringify(newuser);
		return this.http.post(url,{userJString},options)
						.map(this.extractData)
						.catch(this.handleError);
	}

    getItems(): Observable<Item[]>{
        const url = `${this.apiUrl}/getitems/${this.AUTHENTICATOR_KEY}`;

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
    create (name: string): Observable<Item> {
		let options = new RequestOptions();
		const url = `${this.apiUrl}/newitem`;
		
		return this.http.post(url,{name},options)
						.map(this.extractData)
						.catch(this.handleError);
    }
	delete(id: number): Observable<void> {
		let options = new RequestOptions();
		const url = `${this.apiUrl}/delete_item`;
		console.log(id);
		return this.http.post(url,{id},options)
						.map(this.extractData)
						.catch(this.handleError);
	}

    update(item: Item): Observable<Item> {
		let options = new RequestOptions();
	    const url = `${this.apiUrl}/updateitem`;
		console.log(item);
		var itemJString =JSON.stringify(item);
		console.log(itemJString);
		return this.http.post(url,{itemJString},options)
				   .map(this.extractData)
				   .catch(this.handleError);		
	}


    private handleError(error: any): Promise<any>{
        console.error('An error occurred', error);

		var modalButton = document.getElementById('modalButton');
		modalButton.click();		
        return Promise.reject(error.message || error);
    }
    private extractData(res: Response) {
		let body = res.json();
		return body || { };
    }
}
