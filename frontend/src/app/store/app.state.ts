import { State } from '@elie29/store';

export interface AppState extends State {
  loading: boolean;
  error?: string;
}

export const INITIAL_APP_STATE: AppState = {
  loading: false
};
