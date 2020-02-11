import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { AppComponent } from './containers/index/app.component';
import { HttpApiInterceptor } from './interceptors/http-api.interceptor';
import { ChartModule } from './modules/chart/chart.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OverlayComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    ChartModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: HttpApiInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
