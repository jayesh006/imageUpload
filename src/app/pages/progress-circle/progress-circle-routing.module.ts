import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressCirclePage } from './progress-circle.page';

const routes: Routes = [
  {
    path: '',
    component: ProgressCirclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressCirclePageRoutingModule {}
