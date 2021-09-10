import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule}from '@angular/platform-browser/animations'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


import { SucursalComponent } from './core/sucursal/sucursal.component';
import { ProductoComponent } from './core/producto/producto.component';
import { UsuarioComponent } from './core/usuario/usuario.component';
import { tokenInterceptor } from './interceptor/token.interceptor'


import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    SucursalComponent,
    ProductoComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule
   
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:tokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
