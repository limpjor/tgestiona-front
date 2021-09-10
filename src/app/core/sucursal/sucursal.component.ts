import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {HttpService} from '../../service/http.service'
import {SucursalModel} from '../../model/sucursal.model'

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {

  listaSucursal :Observable<SucursalModel[]>= this.httpService.getSucursal();

  constructor(
    public dialog: MatDialog,
    private httpService:HttpService
    ) { }

  ngOnInit(): void {
    console.log("listaSucursal:",this.listaSucursal)
  }

  displayedColumns: string[] = ['codSucursal', 'nombre', 'accion'];
  dataSource = this.listaSucursal;

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}


@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: './sucursal.component-agregar.html',
})
export class DialogElementsExampleDialog {}