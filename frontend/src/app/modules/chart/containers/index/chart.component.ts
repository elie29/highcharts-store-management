import { Component } from '@angular/core';

import { ChartAvailableOption } from '../../interfaces/chart.interface';
import { ChartDataService } from '../../services/chart-data.service';
import { ChartStore } from '../../store/chart.store';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  title = 'Highcharts Application';
  chartData$ = this.store.select('chartData');

  constructor(
    private store: ChartStore,
    private chartDataService: ChartDataService
  ) {}

  onChangeSelect(option: ChartAvailableOption): void {
    this.chartDataService.apply(option);
  }
}
