import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from '../shared/services/loading.service';

@Injectable()
export class HttpParamsInterceptor implements HttpInterceptor {

  constructor(private loader: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loader.show()
    request = request.clone({
      setParams: {
        key: '173fb73188b54cbfa78f3a3ab39b30a9',
      },
    });
    return next.handle(request)
      .pipe(
        finalize(() => {
          this.loader.hide();
        })
      );
  }
}
