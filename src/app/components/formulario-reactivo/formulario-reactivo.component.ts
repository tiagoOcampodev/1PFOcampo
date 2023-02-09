import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent {
  formularioLogin : FormGroup;
  // []

  constructor(){
    let regexCorreo: string = '^[a-z]+@[a-z]+.[a-z]{2,3}$';
    let regexNombre: string = '^[a-z]';
    let controles: any = {
      correo: new FormControl('',[Validators.required, Validators.pattern(regexCorreo)]),
      nombre: new FormControl('',[Validators.required, Validators.pattern(regexNombre)]),
      contraseña: new FormControl('', [Validators.required, Validators.minLength(6)]),
      recordarCredenciales: new FormControl(true)
    }
    this.formularioLogin = new FormGroup(controles);
  }

  login(){
    console.log(this.formularioLogin["controls"]);
    if(this.formularioLogin.controls['correo'].errors?.['pattern'])
    {
      console.log("Hubo un error en el formato del correo")
    }
    console.log(this.formularioLogin["controls"]);
    if(this.formularioLogin.controls['correo'].errors?.['required'])
    {
      console.log("El correo es obligatorio")
    }
  }
}
