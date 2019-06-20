import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const APP_HREF = window.location.origin;

@Injectable({
  providedIn: 'root'
})
export class HrefInterceptorService {
  constructor(private router: Router) {
    document.addEventListener('click', (event) => this.interceptHref(event));
  }

  public interceptHref(clickEvent): boolean {
    const windowEvent = window.event;
    let currentElement = clickEvent.srcElement || clickEvent.target;
    while (currentElement) {
      if (currentElement.tagName === 'A' && currentElement.href) {
        clickEvent.preventDefault();
        windowEvent.preventDefault();
        const url = currentElement.href;
        if (!this.isRouterLinkRoute(url)) {
          this.requestNativeOpenExternalURL(url, clickEvent);
          return false;
        }
        break;
      }
      currentElement = currentElement.parentElement;
      return true;
    }
  }

  private isRouterLinkRoute(url: string): boolean {
    return url.startsWith(APP_HREF);
  }

  private requestNativeOpenExternalURL(url: string, clickEvent): void {
    // NativeBridge.call(NativeFunction.OPEN_EXTERNAL_URL, [url])
    //   .then((shouldOpenInInternalBrowser: boolean) => {
    //     clickEvent.preventDefault();
    //     if (!shouldOpenInInternalBrowser) {
    //       window.location.href = url;
    //     }
    //   })
    //   .catch((_) => {
    //     window.location.href = url;
    //   });
  }
}
