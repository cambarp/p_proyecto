import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { QuienesSomosComponent } from '../quienes-somos/quienes-somos.component';
import { PiePaginaComponent } from '../pie-pagina/pie-pagina.component';
import { FormPruebaComponent } from '../form-prueba/form-prueba.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,QuienesSomosComponent,PiePaginaComponent,FormPruebaComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
