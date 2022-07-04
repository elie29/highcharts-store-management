import { Injectable } from '@angular/core';
import { Store } from '@elie29/store';

import { AppState, INITIAL_APP_STATE } from './app.state';

@Injectable({
  providedIn: 'root' // used and accessible in all application, no need to inject in providers module
})
export class AppStore extends Store<AppState> {
  constructor() {
    super(INITIAL_APP_STATE);
  }
}
