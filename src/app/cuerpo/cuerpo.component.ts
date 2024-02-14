import { Component ,  inject } from '@angular/core';
import { AgregarCompraService } from '../agregar-compra.service';


@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent  {
public Agregar = inject (AgregarCompraService);
totalcost=this.Agregar.add(50,12);

}
