import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}
  public get<T>(url: string, params?: { [key: string]: any }): Observable<T> {
    return this.http.get<T>(url, {
      params
    })
  }
}
