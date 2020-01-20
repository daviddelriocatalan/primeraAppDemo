import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/alumno.modelo';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css']
})
export class ViewmodeloComponent implements OnInit {

  titulo: String = 'Probando Interpolación con Clases';
  alumno1 = new Alumno(1, 'David', 'del Rio', 'Valencia');

  curso: number = 125;
  getCurso(){
    return this.curso;
  }

  texto = 'Escribe algo';
  foto: String = '../../assets/foto.jpg';

  texto1 = 'La hidrocefalia es un mito';
  modTexto(){
    this.texto1 = 'EL SIDA SI QUE ES UN MITO';
  }

  cambiarCosas(){
    var nuevoTitulo = prompt('Dime algo puto');
    alert(nuevoTitulo);
  }

  Ciudad : String = "Valencia";

  cambiarCiudad(){
    this.Ciudad = "Madrid";
  }
  nombre : String;

  constructor() { 
    setTimeout(()=> {
      this.texto = 'por favor';
    }, 3000);
  }

  ngOnInit() {
  }

}
