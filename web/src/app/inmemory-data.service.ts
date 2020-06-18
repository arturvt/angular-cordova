import { Injectable } from '@angular/core';
import { Todo } from './models/todo/todo.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos: Todo[] = [
      { id: 1, title: 'Play videogame', content: 'specs: FIFA ', created: new Date() },
      { id: 2, title: 'Play foobal', content: 'at the park ', created: new Date() },
    ];
    return { todos };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 11;
  }
}
