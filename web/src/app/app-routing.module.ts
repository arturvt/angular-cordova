import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeviceContentComponent } from './device-content/device-content.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { LinksComponent } from './views/links/links.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' },
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then((m) => m.ListModule),
    data: { title: 'List Items' },
  },
  {
    path: 'l',
    redirectTo: 'list',
  },
  {
    path: 'links',
    component: LinksComponent,
    data: { title: 'Links' },
  },
  {
    path: 'info',
    component: DeviceContentComponent,
    data: { title: 'Info' },
  },
  {
    path: 'create',
    component: CreateItemComponent,
    data: { title: 'Create' },
  },
  {
    path: '**',
    component: HomeComponent,
    data: { title: 'Home' },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
