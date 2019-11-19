import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HrefInterceptorService {
  private readonly appOrigin: string;
  private readonly absoluteProjectDirLocation = 'localhost:4200';
  private readonly hostAddress = 'localhost:4200';

  constructor() {
    document.addEventListener('click', (event) => this.interceptHref(event));
    this.appOrigin = window.location.origin;
  }

  public interceptHref(clickEvent): void {
    console.log('Intercepted');
    let currentElement = clickEvent.srcElement || clickEvent.target;
    console.log(currentElement)
    while (currentElement) {
      if (currentElement.tagName === 'A' && currentElement.href) {
        console.log(`It has a href: ${currentElement.href}`);
        if (this.shouldPrevent(currentElement)) {
          clickEvent.preventDefault();
        }
        break;
      }
      // angular has another option. If you start using that one, when in Safari, it won't work.
      currentElement = currentElement.parentElement;
    }
  }

  private addExtraParameters(urlStr: string): string {
    return urlStr + '?extraParam=true';
  }

  private shouldPrevent(element): boolean {
    const url = element.href;
    if (!this.isSameOrigin(url)) {
      this.requestNativeOpenExternalUrl(url);
      return true;
    } else if (this.isDifferentBaseHref(url)) {
      const newUrl = url.replace(this.appOrigin, this.hostAddress);
      this.requestNativeOpenExternalUrl(newUrl);
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
