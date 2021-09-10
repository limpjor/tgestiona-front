import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {HttpService} from '../../service/http.service'
import {ProductoModel} from '../../model/producto.model'

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



import { Observable } from 'rxjs';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  listaProducto :Observable<ProductoModel[]>= this.httpService.getProducto();

  constructor(
    public dialog: MatDialog,
    private httpService:HttpService
    ) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['codProducto', 'nombre', 'precio', 'accion'];
  dataSource = this.listaProducto;

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}


@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: './producto.component-agregar.html',
})
export class DialogElementsExampleDialog {}