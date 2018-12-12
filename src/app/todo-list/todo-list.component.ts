import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todoList: Array<any>;
  @Output() remove: EventEmitter<String> = new EventEmitter();

  constructor() { }
  ngOnInit(){} 
  
  onRemoveTodo(todo){
    this.remove.emit(todo);
  }

}
