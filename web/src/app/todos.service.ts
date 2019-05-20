import { Injectable } from '@angular/core';
import { Todo } from './models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  allTodos = this.loadTodos();
  constructor() { }

  loadTodos(): Array<Todo> {
    const all = new Array<Todo>();
    const sample = new Todo();
    sample.title = 'Some title';
    sample.content = 'Some Content';
    sample.created = new Date();
    all.push(sample);
    return all;
  }

  addNew(todo: Todo) {
    todo.created = new Date();
    this.allTodos.unshift(todo);
  }
}
