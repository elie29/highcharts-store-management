import { Injectable } from '@angular/core';
import { Store } from '@elie29/store';
import { identity } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ChartState, INITIAL_CHART_STATE } from './chart.state';

// Injected in ChartModule Providers only
@Injectable()
export class ChartStore extends Store<ChartState> {
  constructor() {
    super(INITIAL_CHART_STATE, {
      cloneStrategy: identity, // data are not modified so no need to clone
      logChanges: environment.production === false
    });
  }
}
