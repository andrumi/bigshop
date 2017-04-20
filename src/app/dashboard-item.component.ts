import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Item } from './item';

@Component({
  moduleId:module.id,
  selector:    'dashboard-item',
  templateUrl: 'dashboard-item.component.html',
  styleUrls: [ 'dashboard-item.component.css' ]
})
export class DashboardItemComponent {
  @Input() item: Item;
  @Output() selected = new EventEmitter<Item>();
  click() { this.selected.emit(this.item); }
}