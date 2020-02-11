import { Token } from '@angular/compiler';
import { InjectionToken } from '@angular/core';

export type ChartAvailableOption = '' | 'column' | 'series' | 'bar';

export const CHART_URL = new InjectionToken<string>('chartUrl');
