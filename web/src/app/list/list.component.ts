import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../models/todo/todo.model';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  todos: Todo[];
  listItem: string[];
  isOpen = false;

  errorMessage: string;

  constructor(private todoService: TodosService, private activatedRoute: ActivatedRoute) {}

  addItem() {
    this.listItem.push(`new-${this.listItem.length}`);
  }

  removeItem() {
    this.listItem.pop();
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
    console.log('Checking params...');
    this.activatedRoute.queryParamMap.subscribe((queryParams: ParamMap) => {
      console.log(queryParams.keys);
    });

    this.listItem = ['sample01', 'sample02'];
    this.todoService.getTodos().subscribe(
      (data) => (this.todos = data.slice(0, 5)),
      (error) => {
        this.errorMessage = `[${error.status}] - ${error.statusText} -> ${error.url}`;
        console.log(error);
      }
    );
  }
}
