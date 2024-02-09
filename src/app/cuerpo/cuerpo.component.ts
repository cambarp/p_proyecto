import { Component } from '@angular/core';
import { AgregarCompraService } from '../agregar-compra.service';


@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {
  constructor(public Agregar:AgregarCompraService){}

}
