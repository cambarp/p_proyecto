import { Component } from '@angular/core';
import { style } from '@angular/animations';


@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [],
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.css'
})
export class ContenidoComponent {

  mostrarDestacados: boolean = false;

  toggleComponente() {
    this.mostrarDestacados = !this.mostrarDestacados;
  }

}

