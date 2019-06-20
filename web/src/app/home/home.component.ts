import { Component, OnInit } from '@angular/core';
import { CordovaService } from '../cordova.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  device: any;

  constructor(private cordova: CordovaService, private http: HttpClient) { }

  ngOnInit() {
    this.device = this.cordova.cordova;
    this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1').subscribe(a => console.log(a));
  }
  get keys() {
    return Object.keys(this.device);
  }

  public openExternalBrowser() {
    this.cordova.openLinkInBrowser('https://google.com/');
  }
}
