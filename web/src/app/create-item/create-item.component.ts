import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {

  constructor(private todoService: TodosService) { }
  current = new Todo();
  ngOnInit() {
    console.log('Create component');
  }

  add() {
    this.todoService.addNew(this.current);
    this.current = new Todo();
  }

}
