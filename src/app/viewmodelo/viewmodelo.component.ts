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

  futbolista : String;
  mostrarFutbolista(){
    alert(this.futbolista);
  }

  capital : String;
  setResultado(){
    return this.capital === "Madrid" ? true : false; 
  }

  puntuacion: number;
  setColor() {
    return this.puntuacion >= 5 ? 'green' : 'red'; 
  }

  bandas : String[];

  musicos:Array<Alumno> = [
    {id: 1 , nombre: 'Freddie', apellidos: 'Mercury', ciudad: 'Londres'}
  ];

  verMusico(musico){
    alert(musico.id + " - " + musico.nombre + " - " + musico.apellidos + " - " + musico.ciudad);
  }

  constructor() { 
    setTimeout(()=> {
      this.texto = 'por favor';
    }, 3000);

    this.bandas = ['Queen', 'Pink Floyd', 'Metallica'];

    /* this.musicos = [
      {id: 1 , nombre: 'Freddie', apellidos: 'Mercury', ciudad: 'Londres'},
      {id: 2 , nombre: 'Eric', apellidos: 'Clapton', ciudad: 'Londres'},
      {id: 3 , nombre: 'James', apellidos: 'Hetfield', ciudad: 'San Francisco'},
      {id: 4 , nombre: 'Adam', apellidos: 'Lambert', ciudad: 'Los Angeles'},
      {id: 5 , nombre: 'Robert', apellidos: 'Plant', ciudad: 'London'}
    ]; */
    this.musicos.push({id: 2 , nombre: 'Eric', apellidos: 'Clapton', ciudad: 'Londres'});
    this.musicos.push({id: 3 , nombre: 'James', apellidos: 'Hetfield', ciudad: 'San Francisco'});
    this.musicos.push({id: 4 , nombre: 'Adam', apellidos: 'Lambert', ciudad: 'Los Angeles'});
    this.musicos.push({id: 5 , nombre: 'Robert', apellidos: 'Plant', ciudad: 'London'});


  }

  ngOnInit() {
  }

}
