import { Component, OnInit } from '@angular/core';
import { CordovaService } from '../cordova.service';
import { Todo } from '../models/todo';
import { FormControl } from '@angular/forms';
import { TodosService } from '../todos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  device: any;
  todos: Todo[];

  constructor(private cordova: CordovaService,
              private todoService: TodosService) { }

  ngOnInit() {
    this.device = this.cordova.cordova;
    this.todos = this.todoService.allTodos;
  }
  get keys() {
    return Object.keys(this.device);
  }

  public openExternalBrowser() {
    this.cordova.openLinkInBrowser('https://google.com/');
  }
}
