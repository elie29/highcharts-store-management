import { State } from '@elie29/store';

export interface ChartState extends State {
  chartData?: {};
}

export const INITIAL_CHART_STATE: ChartState = {};
