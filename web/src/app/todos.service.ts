import { Injectable } from '@angular/core';
import { Todo } from './models/todo/todo.model';
import { TodoBuilder } from './models/todo/todoBuilder';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  allTodos = this.loadTodos();
  constructor() { }

  loadTodos(): Array<Todo> {
    const all = new Array<Todo>();

    const todoSample = new TodoBuilder()
      .setContent('Some content')
      .setTitle('some title')
      .build();

    all.push(todoSample);
    return all;
  }

  addNew(todo: Todo) {
    todo.created = new Date();
    this.allTodos.unshift(todo);
  }
}
