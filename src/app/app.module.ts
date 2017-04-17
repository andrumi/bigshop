import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {RouterModule} from'@angular/router';

import {ItemsComponent} from './items.component';
import {DashboardComponent} from './dashboard.component'
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
                path:'',
                redirectTo:'/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'items',
                component: ItemsComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ])
    ],
    declarations:[
        AppComponent, 
        TitleComponent,
        ItemDetailComponent,
        ItemsComponent,
        DashboardComponent
    ],
    providers: [ItemService],
    bootstrap: [ AppComponent]
})
export class AppModule{}

