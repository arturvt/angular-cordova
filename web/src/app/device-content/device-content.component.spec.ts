import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceContentComponent } from './device-content.component';

describe('DeviceContentComponent', () => {
  let component: DeviceContentComponent;
  let fixture: ComponentFixture<DeviceContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
