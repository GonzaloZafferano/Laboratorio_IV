import { Component } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  usuario : string = '';
  password : string = '';
  confirm : string = '';
  constructor(private logService : LogService){}

  registrar(){

    let errorEnDatos : Boolean = false;
    let mensaje : string = '';
    if(this.usuario == ''){
      errorEnDatos = true;
      mensaje += "Falta ingresar usuario. \n";
    }
    if(this.password == ''){
      errorEnDatos = true;
      mensaje += "Falta ingresar contraseña. \n";
    }
    if(this.confirm == ''){
      errorEnDatos = true;
      mensaje += "Falta reingresar la contraseña. \n";
    }

    if(this.password != this.confirm){
      errorEnDatos = true;
      mensaje += "Las contraseñas NO coinciden. \n";
    }

    if(this.password.length < 4 || this.confirm.length < 4){
      errorEnDatos = true;
      mensaje += "Las contraseñas deben tener 4 o mas caracteres. \n";
    }
    
    if(!errorEnDatos){
      this.logService.registrarUsuario(this.usuario, this.password);
      //alert("Usuario registrado con exito");
      Swal.fire({
        title: 'Registro exitoso!',
        text: "Usuario registrado con exito",
        icon: 'success',
        timer : 0,
        confirmButtonText: 'Aceptar'
      });
      this.limpiarFormulario();
    } 
    else{
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
    this.confirm = '';
  }
}
