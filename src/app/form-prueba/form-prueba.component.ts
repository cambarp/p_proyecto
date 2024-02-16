import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-form-prueba',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-prueba.component.html',
  styleUrl: './form-prueba.component.css'
})
export class FormPruebaComponent {

  Grupof=new FormGroup({
      nombre: new FormControl(),
      nombre_usuario: new FormControl(),
      correo: new FormControl()
    });

  getPrueba(){
    console.log(this.Grupof.value);
  }
  
 
}


