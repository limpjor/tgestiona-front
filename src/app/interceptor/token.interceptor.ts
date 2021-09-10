import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHeaders } from '@angular/common/http';
import {HttpRequest,HttpHandler,HttpEvent} from  '@angular/common/http'
import {Observable} from 'rxjs';

import { environment } from '../../environments/environment' 

@Injectable({
  providedIn: 'root'
})

export class tokenInterceptor implements HttpInterceptor {
  constructor () {};
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    });

      return next.handle( req.clone({headers }));
  }
}