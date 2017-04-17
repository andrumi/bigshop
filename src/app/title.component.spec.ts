import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

import { TitleComponent } from './title.component';
import { async } from '@angular/core/testing';

describe('BannerComponent (inline template)', () => {

  let comp:    TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleComponent ],
      providers: [
        {provide: ComponentFixtureAutoDetect, useValue: true}
      ] 
    })
    .compileComponents();
  }));
beforeEach(()=>{
    fixture = TestBed.createComponent(TitleComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });
it('should display original title', () => {
  // Hooray! No `fixture.detectChanges()` needed
  expect(el.textContent).toContain(comp.title);
});

it('should still see original title after comp.title change', () => {
  const oldTitle = comp.title;
  comp.title = 'Test Title';
  // Displayed title is old because Angular didn't hear the change :(
  expect(el.textContent).toContain(oldTitle);
});

it('should display updated title after detectChanges', () => {
  comp.title = 'Test Title';
  fixture.detectChanges(); // detect changes explicitly
  expect(el.textContent).toContain(comp.title);
});


});
