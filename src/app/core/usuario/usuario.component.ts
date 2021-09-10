import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {HttpService} from '../../service/http.service'
import {UsuarioModel} from '../../model/usuario.model'

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  listaSucursal :Observable<UsuarioModel[]>= this.httpService.getUsuario();

  constructor(
    public dialog: MatDialog,
    private httpService:HttpService
    ) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['codUsuario', 'nombre','user', 'password', 'codSucursal', 'sucursal',  'accion'];
  dataSource = this.listaSucursal;

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}


@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: './usuario.component-agregar.html',
})
export class DialogElementsExampleDialog {}
