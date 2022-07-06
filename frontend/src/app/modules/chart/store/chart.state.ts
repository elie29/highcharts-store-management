import { State } from '@elie29/store';
import { ChartData } from '../interfaces/chart.interface';

export interface ChartState extends State {
  chartData?: ChartData;
}

export const INITIAL_CHART_STATE: ChartState = {};
