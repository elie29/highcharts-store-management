import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';

import { AppStore } from '../store/app.store';

@Injectable()
export class HttpApiInterceptor implements HttpInterceptor {
  public constructor(private store: AppStore) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(_ => this.store.set('error', undefined)),
      tap(_ => this.store.set('loading', true)),
      catchError(_ => {
        this.store.set('error', 'An error has occurred');
        return EMPTY;
      }),
      finalize(() => this.store.set('loading', false))
    );
  }
}
