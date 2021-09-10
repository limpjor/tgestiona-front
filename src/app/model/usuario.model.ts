import {SucursalModel} from './sucursal.model'

export interface UsuarioModel {
    codUsuario :String,
    nombre:String,
    user :String,
    password :String,
    codSucursal :String,
    sucursal:SucursalModel
}