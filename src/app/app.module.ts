import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {RouterModule} from'@angular/router';

import {ItemsComponent} from './items.component';
import {AppComponent} from './app.component';
import {TitleComponent} from './title.component';
import {ItemDetailComponent} from './item-detail.component';
import {ItemService} from './item.service';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'items',
                component:ItemsComponent
            }
        ])
    ],
    declarations:[
        AppComponent, 
        TitleComponent,
        ItemDetailComponent,
        ItemsComponent
    ],
    providers: [ItemService],
    bootstrap: [ AppComponent]
})
export class AppModule{}

