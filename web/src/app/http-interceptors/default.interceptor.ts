import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import {
  Observable
} from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
    private readonly TAG = 'DefaultInterceptor';

    private host = '10.10.4.96';

    intercept(req: HttpRequest <any> , next: HttpHandler): Observable <HttpEvent<any>> {
      console.log(`[${this.TAG}] Intercepting ${req.url}`);
      const newUrl = `http://${this.host}:3000/${req.url}`;
      // console.log(`Changing to: ${newUrl}`);
      // req = req.clone({ headers: req.headers, url: newUrl });
      return next.handle(req);
    }
}
