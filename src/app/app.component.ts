import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './productos/product/product.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,HomeComponent,AboutComponent,ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nuevo_proyecto';
  
}
