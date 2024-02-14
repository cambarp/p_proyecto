import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { CuerpoComponent } from '../../cuerpo/cuerpo.component';
import { PiePaginaComponent } from '../../pie-pagina/pie-pagina.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ HeaderComponent,CuerpoComponent,PiePaginaComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

}
