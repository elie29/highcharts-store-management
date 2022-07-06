import { Injectable } from '@angular/core';
import { Store } from '@elie29/store';
import { identity } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ChartState, INITIAL_CHART_STATE } from './chart.state';

const JSONDeepClone = value => value && JSON.parse(JSON.stringify(value));

// Injected in ChartModule Providers only
@Injectable()
export class ChartStore extends Store<ChartState> {
  constructor() {
    super(INITIAL_CHART_STATE, {
      cloneStrategy: identity, // data are not modified so no need to clone
      // cloneStrategy: JSONDeepClone, // data are deep cloned, is it necessary in our use case??
      logChanges: environment.production === false
    });
  }
}
