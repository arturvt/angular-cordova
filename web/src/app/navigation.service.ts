import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router, RouterEvent, NavigationStart, NavigationEnd, ActivationEnd } from '@angular/router';
import { Subject, Observable } from 'rxjs';

export interface Title {
  key: string;
  state: number;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private titleStackHistory: Title[] = [];

  private notifyTitleChange = new Subject<Title>();


  get titleChangeNotifier(): Observable<Title> {
    return this.notifyTitleChange;
  }

  get checkTitles() {
    return this.notifyTitleChange;
  }

  get titles(): Title[] {
    return this.titleStackHistory;
  }

  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe((event: RouterEvent) => this.handleEvent(event));
  }

  get currentRoute(): string {
    return this.router.url;
  }

  private handleEvent(event: RouterEvent) {
    if (event instanceof NavigationStart) {
      return;
    } else if (event instanceof NavigationEnd) {
      return;
    } else if (event instanceof ActivationEnd) {
      const title = {key: event.snapshot.data.title, state: 0};
      this.notifyTitleChange.next(title);
      this.titleStackHistory.unshift(title);
      console.log('---');
      console.log(this.titleStackHistory);
      console.log('---');
      return;
    }
  }

  get currentTitle(): Title {
    return this.titleStackHistory[0];
  }

  public goBack(): void {
    if (this.location.path() !== '') {
      this.location.back();
      this.titleStackHistory.shift();
     }
  }
}
