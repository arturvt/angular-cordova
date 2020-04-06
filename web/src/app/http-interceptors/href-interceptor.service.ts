import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HrefInterceptorService {
  private readonly appOrigin: string;
  private readonly absoluteProjectDirLocation = 'localhost:4200';
  private readonly hostAddress = 'localhost:4200';

  constructor(private router: Router) {
    this.appOrigin = window.location.origin;
  }

  private static isHandledProgrammatically(url: string): boolean {
    return url.startsWith('javascript:void(0)');
  }

  static isDashboard(url: string): boolean {
    return url.indexOf('/dashboard/') > 0;
  }

  static isExternalURL(url: string): boolean {
    if (url.startsWith('http')) {
      return true;
    }

    if (url.startsWith('/dashboard')) {
      return false;
    }

    return url.startsWith('/');
  }

  initService(): void {
    console.log('Service started!');
    window.addEventListener('click', (event) => this.interceptHref(event));
  }


  interceptHref(clickEvent: any): void {
    console.log(clickEvent);
    let currentElement = clickEvent.srcElement || clickEvent.target;
    while (currentElement) {
      if (currentElement.tagName === 'A' && currentElement.href) {
        console.log(`[intercepted!] ${currentElement.href}`);
        if (this.shouldPrevent(currentElement)) {
          clickEvent.preventDefault();
        } else if (HrefInterceptorService.isDashboard(currentElement.href)) {
          const originalUrl = currentElement.href;
          const internalURL = originalUrl.substring(originalUrl.indexOf('/dashboard/'), originalUrl.length);
          clickEvent.preventDefault();
          this.router.navigateByUrl(internalURL);
        }
        break;
      }
      currentElement = currentElement.parentElement;
    }
  }

  private addExtraParameters(urlStr: string): string {
    return urlStr + '?extraParam=true';
  }

  private shouldPrevent(element: any): boolean {
    const url = element.href;
    if (HrefInterceptorService.isHandledProgrammatically(url)) {
      return false;
    } else if (!this.isSameOrigin(url)) {
      this.requestNativeOpenExternalUrl(url);
      return true;
    } else if (this.isDifferentBaseHref(url)) {
      const newUrl = url.replace(this.appOrigin, this.hostAddress);
      this.requestNativeOpenExternalUrl(newUrl);
      return true;
    } else if (!HrefInterceptorService.isDashboard(url)) {
      this.requestNativeOpenExternalUrl(url);
      return true;
    }
    return false;
  }


  private isDifferentBaseHref(url: string): boolean {
    return url.indexOf(this.absoluteProjectDirLocation) === -1;
  }

  private isSameOrigin(url: string): boolean {
    return url.startsWith(this.appOrigin) || url.startsWith('/');
  }

  public requestNativeOpenExternalUrl(url: string): void {
    console.warn(`Requesting native to open: ${url}`);
    const urlWithExtraParams = this.addExtraParameters(url);
    if (this.shouldOpenInternal(url)) {
      window.location.href = url;
    }
  }

  private shouldOpenInternal(url: string): boolean {
    console.log(`Checking: ${url}`);
    return url.indexOf('bing.com') > -1;
  }
}
