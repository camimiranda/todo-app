import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoArray = [];
  todoForm: FormGroup;
  todo: Todo;

  constructor( private todoDataService: TodoDataService,
    protected formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  addTodo(){
    if(this.todoForm.get('todo').value){
      this.todoArray.push(this.todoForm.get('todo').value);
      console.log(this.todoArray);
      this.todoForm.get('todo').setValue('');
    }
  }
  
  onRemoveTodo(todo){
    for(let i=0 ;i<= this.todoArray.length ;i++){
      if(todo == this.todoArray[i]){
       this.todoArray.splice(i,1)
      }
     }
  }
  buildForm():void{
    const fields: any = {
      todo: [
        null,
        Validators.compose([
          Validators.required
        ])
      ]
    };
    this.todoForm = this.formBuilder.group(fields);
  }
  isValid():Boolean {
    return true;
  }
}
