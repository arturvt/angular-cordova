import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable, fromEvent } from 'rxjs';

function _window(): any {
  // returns global native browser window object
  return window;
}


@Injectable({
  providedIn: 'root'
})
export class CordovaService {

  private resume: BehaviorSubject<boolean>;

  constructor(private zone: NgZone) {
    this.resume = new BehaviorSubject<boolean>(null);
    fromEvent(document, 'resume').subscribe(event => {
      this.zone.run(() => {
        this.onResume();
      });
    });
   }

   get cordova(): any {
     return _window().cordova;
   }

   get onCordova(): boolean {
     return !!_window().cordova;
   }

   public onResume(): void {
     this.resume.next(true);
   }

   public openLinkInBrowser(url: string) {
      console.log(`Opening: ${url}`);
      _window().cordova.InAppBrowser.open(url, '_blank');
  }
}
