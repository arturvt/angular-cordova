import { Injectable } from '@angular/core';
import { timer, combineLatest, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from './models/todo/todo.model';

const timerOne$ = timer(1000, 4000);
const timerTwo$ = timer(2000, 4000);
const timerThree$ = timer(3000, 4000);

@Injectable({
  providedIn: 'root'
})
export class RequesterService {

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('api/todo');
  }
}
