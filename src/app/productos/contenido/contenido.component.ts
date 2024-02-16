import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { RouterOutlet } from '@angular/router';
import { FormPruebaComponent } from '../../form-prueba/form-prueba.component';

@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [FormPruebaComponent],
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.css'
})
export class ContenidoComponent {

}
