import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    data: { title: 'List' }
  }
];

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ListModule {}
