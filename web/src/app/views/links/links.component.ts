import { Component, OnInit } from '@angular/core';
import { CordovaService } from 'src/app/cordova.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent implements OnInit {
  constructor(private cordovaService: CordovaService) {}

  ngOnInit(): void {}

  openExternalBrowser(url: string) {
    // this.router.navigateByUrl(url);
    console.log(`[openExternalBrowser] ${url}`);
    this.cordovaService.openLinkInBrowser(url);
  }

  get googleUrl(): string {
    return 'https://www.google.com/';
  }
}
