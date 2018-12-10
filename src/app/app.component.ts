import { Component, EventEmitter } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo App';
  todoArray= [];
  todo: String;
  showForm: boolean = true;

  constructor(private todoDataService: TodoDataService){

  }
  addTodo(currentTodo){
    if(currentTodo){
      this.todoArray.push(currentTodo);
      console.log(this.todoArray);
     } 
  }
  
  deleteTodo(todo){
    for(let i=0 ;i<= this.todoArray.length ;i++){
      if(todo == this.todoArray[i]){
       this.todoArray.splice(i,1)
      }
     }
  }
  
  
}
