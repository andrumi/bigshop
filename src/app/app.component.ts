import {Component} from '@angular/core';
import {TitleComponent} from './title.component';
import {User} from './user';


@Component({
    moduleId:module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls:['app.component.css']
})
export class AppComponent{
    public currentUser:User;
}