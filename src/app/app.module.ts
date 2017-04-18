import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {RouterModule} from'@angular/router';


import {ItemsComponent} from './items.component';
import {DashboardComponent} from './dashboard.component'
import {AppComponent} from './app.component';
import {TitleComponent} from './title.component';
import {ItemDetailComponent} from './item-detail.component';
import {ItemService} from './item.service';
import {AppRoutingModule} from './app-routing.module';
import {ItemSearchComponent} from './item-search.component';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        AppRoutingModule
    ],
    declarations:[
        AppComponent, 
        TitleComponent,
        ItemDetailComponent,
        ItemsComponent,
        DashboardComponent,
        ItemSearchComponent
    ],
    providers: [ItemService],
    bootstrap: [ AppComponent]
})
export class AppModule{}

