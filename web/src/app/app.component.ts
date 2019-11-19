import { Component } from '@angular/core';
import { HrefInterceptorService } from './http-interceptors/href-interceptor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-cordova';

  // constructor() {console.log('empty constructor. ');}
  constructor(private hrefInterceptor: HrefInterceptorService) {}
}
