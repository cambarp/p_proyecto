import { Component } from '@angular/core';
import { FormPruebaComponent } from '../form-prueba/form-prueba.component';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [FormPruebaComponent],
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent {
  mensaje: string='';
  recimensaje($event : any) {
    this.mensaje = $event;
  }
}
