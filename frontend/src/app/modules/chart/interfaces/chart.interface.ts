import { InjectionToken } from '@angular/core';

export type ChartAvailableOption = '' | 'column' | 'series' | 'bar';

export const CHART_URL = new InjectionToken<string>('chartUrl');

export interface ChartData {
  title: { text: string };
  subtitle: { text: string };
  chart: { type: string };
  xAxis: { categories: string[]; title: { text?: string } };
  yAxis: { categories: string[]; title: { text?: string } };
  [key: string]: {};
}
