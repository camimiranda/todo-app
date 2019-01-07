import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo-item-list-detail',
  templateUrl: './todo-item-list-detail.component.html',
  styleUrls: ['./todo-item-list-detail.component.css']
})
export class TodoItemListDetailComponent implements OnInit {
  @Input() todoItem: Todo;
  @Input() visible: Boolean;


  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() {
  }

  editTodo(newDescription) {
    this.todoDataService.updateTodoByName(this.todoItem, newDescription);
  }

}
