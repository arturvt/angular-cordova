import { Component, OnInit } from '@angular/core';
import { CordovaService } from '../cordova.service';
import { Todo } from '../models/todo/todo.model';
import { TodosService } from '../todos.service';
import { RequesterService } from '../requester.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  device: any;
  todos: Todo[];

  constructor(private requester: RequesterService,
              private cordova: CordovaService,
              private todoService: TodosService) { }

  ngOnInit() {
    this.device = this.cordova.cordova;
    this.todos = this.todoService.allTodos;
    this.requester.startCombine();
  }
  get keys() {
    return Object.keys(this.device);
  }

  public openExternalBrowser() {
    this.cordova.openLinkInBrowser('https://google.com/');
  }
}
