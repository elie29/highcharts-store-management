import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { take, tap, takeLast } from 'rxjs/operators';

import { CHART_URL, ChartAvailableOption } from '../interfaces/chart.interface';
import { ChartStore } from '../store/chart.store';

@Injectable()
export class ChartDataService {
  private availableCharts = ['bar', 'column', 'series'];

  constructor(
    private store: ChartStore,
    private http: HttpClient,
    @Inject(CHART_URL) private chartUrl: string
  ) {}

  apply(chart: ChartAvailableOption): void {
    this.store.set('chartData', undefined);

    if (this.availableCharts.includes(chart)) {
      this.http
        .get(`${this.chartUrl}/${chart}`)
        .pipe(
          tap(data => this.store.set('chartData', data)),
          takeLast(1)
        )
        .subscribe();
    }
  }
}
