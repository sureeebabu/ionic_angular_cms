import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChartPageRoutingModule } from './chart-routing.module';
import { ChartPage } from './chart.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsModule,
    ChartPageRoutingModule
  ],
  declarations: [ChartPage]
})
export class ChartPageModule {}
