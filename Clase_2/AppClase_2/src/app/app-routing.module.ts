import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const appMisRutas:Routes= [
  {path:'',component: LoginComponent},//http://localhost:4200/bienvenido
  {path:'bienvenido',component: BienvenidoComponent},//http://localhost:4200/bienvenido
  {path:'login',component: LoginComponent}, //http://localhost:4200/login
  {path:'registrar',component: RegisterComponent}, //http://localhost:4200/login
  {path:'**',component: ErrorComponent} //http://localhost:4200/ Cualquier ruta que no haya matcheado con las anteriores.
];


@NgModule({
  declarations: [],
  imports: [   
    CommonModule,
    RouterModule.forRoot(appMisRutas),
  ], 
  exports: [RouterModule],
})
export class AppRoutingModule { }
