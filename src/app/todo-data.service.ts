import { Injectable } from '@angular/core';
import { Todo } from './todo';

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
  
  updateTodoByName(actualTodo, description) {
    let updateTodo: {} =  this.todoArray.filter(todo => todo.title === actualTodo.title).map((item) => item.description = description);
    let newTodo: Todo = new Todo(actualTodo.title, description);
    console.log(newTodo);
    Object.assign(actualTodo, updateTodo);
    // console.log(actualTodo);
    // console.log(this.todoArray);
  }

  getAllTodos() {
    return  this.todoArray; 
  }

  getTodoById(id: number): Todo {
    return  this.todoArray.filter(todo => todo.id === id).pop();
  }

  // toggleTodoComplete (todo: Todo){
  //   let updatedTodo = this.updateTodoById(todo.id, {
  //     complete: !todo.complete
  //   });
  //   return updatedTodo;
  // }
}
