import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,  throwError } from 'rxjs';

import {environment} from '../../environments/environment'
import { catchError, finalize, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ProductoModel } from '../model/producto.model'
import { SucursalModel } from '../model/sucursal.model'
import { UsuarioModel } from '../model/usuario.model'



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl:string;
  constructor(private http: HttpClient) { 
    this.apiUrl = environment.urlApi;
  }

  getProducto(): Observable<ProductoModel[]> {
    
    return this.http.post<ProductoModel[]>(this.apiUrl+"producto/listar",
    {})
    .pipe(
      catchError(err => {
        return throwError(err);
      })
     );
   
  }

  getSucursal(): Observable<SucursalModel[]> {
    
    return this.http.post<SucursalModel[]>(this.apiUrl+"sucursal/listar",
    {})
    .pipe(
      catchError(err => {
        return throwError(err);
      })
     );
   
  }

  getUsuario(): Observable<UsuarioModel[]> {
    
    return this.http.post<UsuarioModel[]>(this.apiUrl+"usuario/listar",
    {})
    .pipe(
      catchError(err => {
        return throwError(err);
      })
     );
   
  }
}
