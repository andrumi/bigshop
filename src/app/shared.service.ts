import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';


@Injectable()
export class SharedService {

  private currentUser = new Subject<string>();  

  // Observable string streams
  username$ = this.currentUser.asObservable();

    // Service message commands
  publishData(data: string) {
    this.currentUser.next(data);
  }
}