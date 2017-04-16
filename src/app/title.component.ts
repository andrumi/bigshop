import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'app-banner',
  templateUrl: 'title.component.html',
  styleUrls:  ['title.component.css']
})
export class TitleComponent {
  title = 'Big Shop';
}