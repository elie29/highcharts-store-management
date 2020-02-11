import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2HighchartsModule } from 'ng2-highcharts';
import { environment } from 'src/environments/environment';

import { ChartHeaderComponent } from './components/header/chart-header.component';
import { ChartComponent } from './containers/index/chart.component';
import { CHART_URL } from './interfaces/chart.interface';
import { ChartDataService } from './services/chart-data.service';
import { ChartStore } from './store/chart.store';

@NgModule({
  declarations: [ChartComponent, ChartHeaderComponent],
  imports: [
    CommonModule,
    Ng2HighchartsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChartComponent
      }
    ])
  ],
  providers: [
    ChartStore,
    ChartDataService,
    {
      provide: CHART_URL,
      useValue: environment.chartUrl
    }
  ]
})
export class ChartModule {}
