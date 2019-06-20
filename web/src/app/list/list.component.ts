import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../models/todo/todo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todos: Todo[];

  errorMessage: string;

  constructor(private todoService: TodosService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(
      // (data) => this.todos = data,
      (data) => {
        this.todos = data;
      },
      (error) => {
        this.errorMessage = `[${error.status}] - ${error.statusText} -> ${error.url}`;
        console.log(error);
      });
  }

}
