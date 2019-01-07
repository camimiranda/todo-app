import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() remove: EventEmitter<String> = new EventEmitter();
  // @Output() edit: EventEmitter<
  visible: boolean;

  constructor() { }

  ngOnInit() {
    this.visible = false;
  }

  removeTodo(todo) {
    this.remove.emit(todo);
  }
  onChangeVisiblity() {
    if (this.visible) {
      this.visible = false;
    } else {
      this.visible = true;
    }
  }

}
