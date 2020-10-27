import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

import { ThemeService } from './themes.service'

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepter implements HttpIntercepter {
  public spinner = new BehaviorSubject<boolean>(false)
  constructor(private theme: ThemeService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.next(true)
    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.spinner.next(false)
          }
        },
        (err: any) => {
          this.spinner.next(false)
        }
      )
    )
  }
}
