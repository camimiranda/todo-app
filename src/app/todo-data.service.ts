import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  todoArray: Array<Todo>;

  constructor() {
    this.todoArray = [];
  }

  addTodo(todo){
      this.todoArray.push(todo);
      return this.todoArray;
  }
  deleteTodoById(toDo: Todo): TodoDataService {
    this.todoArray =  this.todoArray.filter(todo => todo.id !== toDo.id);
    return this;
  }
  
  updateTodoByName(actualTodo, value) {
    let updateTodo: {} =  this.todoArray.filter(todo => todo.title === actualTodo.title).map((item => item.description = value), item => item.complete = value.complete);
    let newTodo: Todo = new Todo(actualTodo.title, value);
    console.log(newTodo);
    Object.assign(actualTodo, updateTodo);
    console.log();
    this.todoArray.push(actualTodo);
    // console.log(actualTodo);
    // console.log(this.todoArray);
  }

  getAllTodos() {
    return this.todoArray; 
  }

  getTodoById(index): Todo {
    return this.todoArray.filter(todo => todo.id === index).pop();
  }

  toggleTodoComplete (todo: Todo){
    let updatedTodo = this.updateTodoByName(todo, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
