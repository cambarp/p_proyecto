import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { PiePaginaComponent } from '../pie-pagina/pie-pagina.component';
import { ContenidoComponent } from '../productos/contenido/contenido.component';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,ContenidoComponent,PiePaginaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export  class HomeComponent {

}
