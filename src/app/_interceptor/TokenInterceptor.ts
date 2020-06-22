import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor  {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const userToken = 'csrftoken';
        const modifiedReq = req.clone({
          headers: req.headers.set('X-CSRFTOKEN', `${userToken}`),
        });
        return next.handle(modifiedReq);
      }
}
