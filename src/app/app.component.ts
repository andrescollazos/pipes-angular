import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre    : string = 'Andrés Collazos';
  nombre2    : string = 'aNdReS fELiPe cOLlAzOs RoZo';
  numeros   : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI        : number = Math.PI;
  porcentaje: number = 0.234;
  salario   : number = 1234.5;
  datos = {
    nombre: this.nombre,
    edad: 25,
    id: '1088332068',
    direccion: {
      calle: 79,
      casa: 2
    }
  }
  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500)
  })
  fecha: Date = new Date();
  idioma : string = 'es'

  cambiarIdioma(idioma: string) {
    this.idioma = idioma;
  }

  // Angular por defecto bloquea urls por considerarlas no seguras
  videoUrl = 'https://www.youtube.com/embed/EscDe0jG6XM';

  activar: boolean = true;
}
