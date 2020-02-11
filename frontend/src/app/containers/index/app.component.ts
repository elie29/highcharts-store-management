import { Component } from '@angular/core';
import { AppStore } from 'src/app/store/app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading$ = this.store.select('loading');
  error$ = this.store.select('error');

  constructor(private store: AppStore) {}
}
