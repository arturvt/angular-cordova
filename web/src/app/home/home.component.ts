import { Component, OnInit } from '@angular/core';
import { CordovaService } from '../cordova.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  device: any;

  constructor(private cordova: CordovaService, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.device = this.cordova.cordova;
    // this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1').subscribe(a => console.log(a));
  }
  get keys() {
    return Object.keys(this.device);
  }

  public openExternalBrowser(url: string) {
    // this.router.navigateByUrl(url);
    this.cordova.openLinkInBrowser(url);
  }

  get googleUrl(): string {
    return 'https://www.google.com/';
  }

  goToUrl(url: string) {
    console.log(`Go to URL: ${url}`);
    console.log(`The change is commented`);
    // window.location.href = url;
  }
}
