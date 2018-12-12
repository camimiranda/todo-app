import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item-list-detail',
  templateUrl: './todo-item-list-detail.component.html',
  styleUrls: ['./todo-item-list-detail.component.css']
})
export class TodoItemListDetailComponent implements OnInit {
  @Input() todoItem: String;
  @Input() visible: Boolean;

  constructor() { }

  ngOnInit() {
  }

}
