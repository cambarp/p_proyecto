import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CuerpoComponent } from '../cuerpo/cuerpo.component';
import { PiePaginaComponent } from '../pie-pagina/pie-pagina.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,HeaderComponent,CuerpoComponent,PiePaginaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export  class HomeComponent {

}
