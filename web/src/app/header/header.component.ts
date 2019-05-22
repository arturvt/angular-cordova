import { Component, OnInit } from '@angular/core';
import { fadeAnimation, titleAnimations } from '../animations';
import { NavigationService, Title } from '../navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [titleAnimations, fadeAnimation]
})
export class HeaderComponent implements OnInit {

  constructor(private navigationServive: NavigationService) { }
  private isFirst: boolean = true;
  currentTitle: string;

  ngOnInit() {
    this.navigationServive.titleChangeNotifier
    .subscribe((title) => {
      this.currentTitle = title.key;
    });
  }

  get titles(): Title[] {
    const titles: Title[] = this.navigationServive.titles.slice(0);
    const lastThreeTitles: Title[] = titles.splice(0, 3);
    return lastThreeTitles;
  }

  public titleState(index: number, element: Element): object {

    if (index === 0 && this.isRoot && this.isFirst) {
      this.isFirst = false;
      return { value: 'static-title' };
    }

    if (index === 0 && this.isAndroid) {
      return { value: 'static-title' };
    }

    if (index !== 0 && this.isAndroid) {
      return { value: 'invisible' };
    }
    // Get translateX value
    const h1: Element = element.firstElementChild;
    const style: CSSStyleDeclaration = window.getComputedStyle(h1);
    const matrix: WebKitCSSMatrix = new WebKitCSSMatrix(style.transform);
    const offset: number = matrix.m41;

    switch (index) {
      case 0:
        return { value: 'title', params: { offset } };
      case 1:
        return { value: 'back', params: { offset } };
      case 2:
        return { value: 'leave', params: { offset } };
      default:
        return { value: 'invisible' };
    }
  }

  back() {
    console.log('back');
    this.navigationServive.goBack();
  }

  get isRoot(): boolean {
    return this.navigationServive.currentRoute === '/';
  }

  get isAndroid(): boolean {
    return true;
  }

  get isIOS(): boolean {
    return false;
  }

}
