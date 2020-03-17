import { Component, OnInit } from '@angular/core';
import { HrefInterceptorService } from './http-interceptors/href-interceptor.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-cordova';

  // constructor() {console.log('empty constructor. ');}
  constructor(private hrefInterceptor: HrefInterceptorService, private spinner: NgxSpinnerService) {}

  ngOnInit() {
    console.log('where is the spinner?');
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
      console.log('gone?');
    }, 5000);
  }
}
