import { Component, OnInit } from '@angular/core';

import { TodosService } from '../todos.service';
import { Todo } from '../models/todo/todo.model';
import { TodoBuilder } from '../models/todo/todoBuilder';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {

  constructor(private todoService: TodosService) { }
  title: string;
  content: string;

  ngOnInit() {
    console.log('Create component');
  }

  add() {
    this.todoService.addNew(new TodoBuilder()
    .setContent(this.content).setTitle(this.title)
    .build());

    this.content = '';
    this.title = '';
  }

}
