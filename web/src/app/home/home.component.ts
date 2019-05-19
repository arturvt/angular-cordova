import { Component, OnInit } from '@angular/core';
import { CordovaService } from '../cordova.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  device: any;

  constructor(private cordova: CordovaService) { }

  ngOnInit() {
    console.log('onInit Home');
    console.log(this.cordova.cordova);
    this.device = this.cordova.cordova;
  }

  get keys() {
    return Object.keys(this.device);
  }

  public openExternalBrowser() {
    console.log('Open external');
    
    this.cordova.openLinkInBrowser('https://google.com/');

  }
}
