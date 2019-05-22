import { Component, OnInit } from '@angular/core';
import { CordovaService } from '../cordova.service';
import { RequesterService } from '../requester.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  device: any;

  constructor(private requester: RequesterService,
              private cordova: CordovaService) { }

  ngOnInit() {
    this.device = this.cordova.cordova;
  }
  get keys() {
    return Object.keys(this.device);
  }

  public openExternalBrowser() {
    this.cordova.openLinkInBrowser('https://google.com/');
  }
}
