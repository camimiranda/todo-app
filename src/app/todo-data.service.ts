import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  actual_id: number = 0;
  todoArray = [];

  constructor() { }

  addTodo(value){
    debugger;
    this.todoArray.push(value);
    console.log(this.todoArray);
  }
  // deleteTodoById(toDo: Todo): TodoDataService {
  //   this.todoArray =  this.todoArray.filter(todo => todo.id !== toDo.id);
  //   return this;
  // }
  
  // updateTodoById(id: number, values: Object = {}): Todo {
  //   let todo = this.getTodoById(id);
  //   if(!todo){
  //     return null;
  //   } 
  //   Object.assign(todo, values);
  //   return todo;
  // }

  // getAllTodos(): Todo[] {
  //   return  this.todoArray; 
  // }

  // getTodoById(id: number): Todo {
  //   return  this.todoArray.filter(todo => todo.id === id).pop();
  // }

  // toggleTodoComplete (todo: Todo){
  //   let updatedTodo = this.updateTodoById(todo.id, {
  //     complete: !todo.complete
  //   });
  //   return updatedTodo;
  // }
}
