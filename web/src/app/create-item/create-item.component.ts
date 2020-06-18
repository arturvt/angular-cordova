import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss'],
})
export class CreateItemComponent implements OnInit, AfterViewInit {
  constructor(private todoService: TodosService) {}
  title: string;
  content: string;
  @ViewChild('firstFocusInput', { static: true }) firstFocusInput: ElementRef;

  ngAfterViewInit(): void {
    this.firstFocusInput.nativeElement.focus();
  }

  ngOnInit() {
    console.log('Create component');
  }

  add() {
    this.todoService.addNew({
      id: 1,
      title: this.title,
      content: this.content,
      created: new Date(),
    });

    this.content = '';
    this.title = '';
  }
}
