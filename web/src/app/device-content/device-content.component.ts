import { Component, OnInit } from '@angular/core';
import { CordovaService } from '../cordova.service';

@Component({
  selector: 'app-device-content',
  templateUrl: './device-content.component.html',
  styleUrls: ['./device-content.component.scss']
})
export class DeviceContentComponent implements OnInit {
  visibleItems = [
    { title: 'Platform id', key: 'platformId' },
    { title: 'Manufacturer', key: 'manufacturer' },
    { title: 'Version', key: 'version' },
    { title: 'Platform', key: 'platformId' }
  ];

  device: any;

  constructor(private cordova: CordovaService) {}

  ngOnInit() {
    this.device = this.cordova.cordova;
  }
}
