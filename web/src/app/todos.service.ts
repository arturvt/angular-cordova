import { Injectable } from '@angular/core';
import { Todo } from './models/todo/todo.model';
import { TodoBuilder } from './models/todo/todoBuilder';
import { RequesterService } from './requester.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  allTodos = this.createMockedTodos();
  constructor(private requester: RequesterService) {}

  createMockedTodos(): Array<Todo> {
    const all = new Array<Todo>();

    const todoSample = new TodoBuilder().setContent('Some content').setTitle('some title').build();

    all.push(todoSample);
    return all;
  }

  getTodos(): Observable<Todo[]> {
    return this.requester.getTodos();
  }

  addNew(todo: Todo) {
    todo.created = new Date();
    this.allTodos.unshift(todo);
  }
}
