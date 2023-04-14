import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  constructor() { }

  //Solo carga, no valida nada
  registrarUsuario(usuario:string, clave:string){
    localStorage.setItem(usuario, clave);
  }

  loguearUsuario(usuario:string, password:string){
    let pass = localStorage.getItem(usuario);
    let mensaje = '';

    if(pass){
      if(pass === password){
        return true;
      }else
      mensaje = "La contraseña es invalida";
    }else
    mensaje = "Usuario no encontrado";
    
    return mensaje;
  }
}
