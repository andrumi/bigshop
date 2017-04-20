import {async,TestBed} from '@angular/core/testing';
import {ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {DashboardItemComponent} from './dashboard-item.component';
import {DashboardComponent} from './dashboard.component';
import {ItemSearchComponent} from './item-search.component';
import {Item} from './item';
import { addMatchers} from '../testing/jasmine-matchers';
import { click } from '../testing/index';

import {APP_BASE_HREF} from '@angular/common';

beforeEach( addMatchers );///??????

describe('DashboardItemComponent', function(){
    let comp: DashboardItemComponent;
    let fixture: ComponentFixture<DashboardItemComponent>
    let itemEl: DebugElement;
    let expectedItem: Item;
    
    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            declarations:[DashboardItemComponent, DashboardComponent,ItemSearchComponent],
            providers: [{provide: APP_BASE_HREF, useValue : '/' }]
        })
        .compileComponents();
    }));
    beforeEach(()=>{
        fixture = TestBed.createComponent(DashboardItemComponent);
        comp = fixture.componentInstance;
        itemEl = fixture.debugElement.query(By.css('.item'));

        expectedItem = new Item(2, 'Test Name','Hat',2);
        comp.item = expectedItem;
        fixture.detectChanges();
    });
    it ('should display item name', ()=>{
        const expectedPipeName = expectedItem.name.toUpperCase();
        expect(itemEl.nativeElement.textContent).toContain(expectedPipeName);

    });
    it ('should raise selected event when clicked', ()=>{
        let selectedItem: Item;
        comp.selected.subscribe((item:Item)=> selectedItem=item);

        itemEl.triggerEventHandler('click', null);
        expect(selectedItem).toBe(expectedItem);
    });
    it ('should raise selected event when clicked', ()=>{
        let selectedItem: Item;
        comp.selected.subscribe((item: Item)=> selectedItem = item);
        click(itemEl);
        expect(selectedItem).toBe(expectedItem);
    })
            
});
//~~~~~~~~~~~~~~~~~
import {Component} from '@angular/core';
@Component({
    template:`
    <dashboard-item [item] = "item" (selected) = "onSelected($event)"></dashboard-item>`
    
})
class TestHostComponent{
    item = new Item(2, 'Test Name','Hat',2);
    selectedItem: Item;
    onSelected(item: Item){this.selectedItem = item;}
}

describe('DashboardCompenent when inside testhost', ()=>{
    let testHost: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>
    let itemEl: DebugElement;

    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            declarations:[DashboardItemComponent, TestHostComponent],
        })
        .compileComponents();
    }));
    beforeEach(()=>{
        fixture = TestBed.createComponent(TestHostComponent);
        testHost = fixture.componentInstance;
        itemEl = fixture.debugElement.query(By.css('.item'));
        fixture.detectChanges();
    });
    it ('should display item name', ()=>{
        const expectedPipeName = testHost.item.name.toUpperCase();
        expect(itemEl.nativeElement.textContent).toContain(expectedPipeName);
    });
    it ('should raise selected event when clicked', ()=>{
        click(itemEl);
        expect(testHost.selectedItem).toBe(testHost.item);
    })

})