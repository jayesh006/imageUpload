import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressCirclePageRoutingModule } from './progress-circle-routing.module';

import { ProgressCirclePage } from './progress-circle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressCirclePageRoutingModule
  ],
  declarations: [ProgressCirclePage]
})
export class ProgressCirclePageModule {}
