import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personalizado'
})
export class PersonalizadoPipe implements PipeTransform {

  transform(value: string,todas: boolean = true): string {
  
    value = value.toLocaleLowerCase();
    let nombre = value.split( ' ' );

    if( todas ){

      nombre = nombre.map( nombre => {
      return nombre[ 0 ].toUpperCase() + nombre.substr(1);
      }) 
    }else{

      nombre[0] = nombre[0][0].toUpperCase() +  nombre[0].substr(1);
    }
    return nombre.join( '' );
  }

}
