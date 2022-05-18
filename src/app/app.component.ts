import { Component } from '@angular/core';
import { resolve } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Batman';
  arreglo: string[] = ['batwomen','robin','linterna verde','Dr. Manhattan','Superman','Chico bestia', 'Zeus'];
  PI     : number = Math.PI;
  porcentaje : number = 0.3446;
  salario : number = 2589.51;
  fecha    : Date = new Date; 
  idioma   : string = 'es'

  valorPromesa = new Promise<string>((resolve) => {
    
    setTimeout (() => {
      resolve ('Llegue tarde pero llegue');
  },4500);

});

  heroe = {

    nombre  : 'Shang chi',
    casa    : 'Marvel',
    poder   : 'Naturaleza y anillos'
  };
}
