import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ElementRef, ViewChild} from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  
}
