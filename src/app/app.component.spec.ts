import { AppComponent } from './app.component';
import {TitleComponent} from './title.component';
import { RouterModule, Routes } from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard.component';
import {ItemDetailComponent} from './item-detail.component';
import {ItemsComponent} from './items.component';
import {ItemSearchComponent} from './item-search.component';
import {DashboardItemComponent} from './dashboard-item.component';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[
            AppRoutingModule,
            FormsModule
        ],  
        declarations: [ 
            AppComponent,
            DashboardComponent,
            TitleComponent,
            ItemDetailComponent,
            ItemsComponent,
            ItemSearchComponent,
            DashboardItemComponent
             ],
        providers:[{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/shop/i,
      '<h1> should say something about "Shop"');
  });
});