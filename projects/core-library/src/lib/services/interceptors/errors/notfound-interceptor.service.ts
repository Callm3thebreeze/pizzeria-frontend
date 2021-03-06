import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class NotFoundInterceptorService implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe( tap(() => {},
    (err: any) => {
      if (err instanceof HttpErrorResponse){
        if (err.status !== 404) {
          return;
        }
        this.router.navigate(['not-found']);
      }
    }));
  }
}
