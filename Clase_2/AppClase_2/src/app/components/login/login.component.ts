import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from 'src/app/services/log.service';
import Swal from 'sweetalert2';
//import Toastify from 'toastify-js';
import * as Toastify from 'toastify-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    usuario : string = '';
  password : string = '';
  constructor(private logService : LogService, private router: Router){}

  loguearUsuario(){
    let errorEnDatos : Boolean = false;
    let mensaje : string = '';
    if(this.usuario == ''){
      errorEnDatos = true;
      mensaje += "Falta ingresar usuario.\r\n";
    }

    if(this.password == ''){
      errorEnDatos = true;
      mensaje += "Falta ingresar contraseña. \n";
    }   

    if(this.password.length < 4){
      errorEnDatos = true;
      mensaje += "La contraseña debe tener 4 o mas caracteres. \n";
    }
  
/*
    Toastify({
      text: "This is a toast",
      duration: 3000,
      //destination: "https://github.com/apvarun/toastify-js",
      //newWindow: true,
      //close: true,
      offset: {
        x: 1950, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
        y: 50 // vertical axis - can be a number or a string indicating unity. eg: '2em'
      },
      gravity: "bottom", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      //onClick: function(){} // Callback after click
    }).showToast();

    */
    if(!errorEnDatos){

      let retorno = this.logService.loguearUsuario(this.usuario, this.password);

      if(retorno == true){

        Swal.fire({
          title: 'Login exitoso!',
          text: 'Bienvenido! Los datos suministrados son correctos!',
          icon: 'success',
          timer : 0,
          confirmButtonText: 'Aceptar'
        });

        //alert("OK");
        this.limpiarFormulario();

        this.router.navigate(['bienvenido']);
      }else{
        errorEnDatos = true;
        mensaje = retorno;
      }      
    }

    if(errorEnDatos){
      Swal.fire({
        title: 'Error!',
        text: mensaje,
        icon: 'error',
        timer : 0,
        confirmButtonText: 'Aceptar'
      });
    }
  }

  limpiarFormulario(){
    this.usuario = '';
    this.password = '';
  }
}
