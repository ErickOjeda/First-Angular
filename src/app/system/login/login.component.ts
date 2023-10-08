import { Component, inject } from '@angular/core';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  roteador = inject(Router);

  usuario: Usuario = new Usuario();

  logar(){
    if(this.usuario.login == "admin" && this.usuario.senha == "admin"){
      this.roteador.navigate(['/admin/carros']);
    }else {
      alert("Usuario ou senha incorretos");
    }
  }

}
