import { Injectable } from '@angular/core';
import { Store } from '@elie29/store';

import { AppState, INITIAL_APP_STATE } from './app.state';

@Injectable({
  providedIn: 'root'
})
export class AppStore extends Store<AppState> {
  constructor() {
    super(INITIAL_APP_STATE);
  }
}
