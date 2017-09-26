import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  nombre: string;
  apellido; string;

  public oUsuario: {nombre: string, apellido: string};

  public aAficiones: Array<string>;

  constructor() { }

  ngOnInit() {
    this.oUsuario = {nombre: 'Pepe', apellido: 'Perez'};
    this.aAficiones = ['Leer', 'Viajar', 'Comer'];
  }

  btnBorrar() {
    this.oUsuario.nombre = '';
    this.oUsuario.apellido = '';
  }

}
