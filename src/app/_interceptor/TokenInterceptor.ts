import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor  {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const userToken = localStorage.getItem('Token');
        const modifiedReq = req.clone({
          headers: req.headers.set('X-CSRFTOKEN', `${userToken}`),
          withCredentials: true
        });
        return next.handle(modifiedReq);
      }
}
