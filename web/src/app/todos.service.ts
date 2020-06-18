import { Injectable } from '@angular/core';
import { Todo } from './models/todo/todo.model';
import { InMemoryDataService } from './inmemory-data.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  allTodos: Todo[] = [];
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return of(this.allTodos);
  }

  addNew(todo: Todo) {
    todo.created = new Date();
    this.allTodos.unshift(todo);
    console.log(this.allTodos);
  }
}
