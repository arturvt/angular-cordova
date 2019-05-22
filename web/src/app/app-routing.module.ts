import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeviceContentComponent } from './device-content/device-content.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {title: 'Home'}
  },
  {
    path: 'list',
    component: ListComponent,
    data: {title: 'List Items'}
  },
  {
    path: 'info',
    component: DeviceContentComponent,
    data: {title: 'Info'}
  },
  {
    path: 'create',
    component: CreateItemComponent,
    data: {title: 'Create'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
