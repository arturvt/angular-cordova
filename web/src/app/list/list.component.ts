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

  constructor(private todoService: TodosService) { }

  ngOnInit() {
    this.todos = this.todoService.allTodos;
  }

}
