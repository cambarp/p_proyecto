import { Component, Output ,EventEmitter} from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';



@Component({
  selector: 'app-form-prueba',
  standalone: true,
  imports: [ReactiveFormsModule ,FormsModule],
  templateUrl: './form-prueba.component.html',
  styleUrl: './form-prueba.component.css'
})
export class FormPruebaComponent {

  Grupof=new FormGroup({
      nombre: new FormControl(''),
      nombre_usuario: new FormControl(''),
      correo: new FormControl('')
    });
  nombre=""
    

  mensaje : string =this.nombre ;
  @Output() mensajene= new  EventEmitter();


  mostrarmensaje(){
    this.mensajene.emit(this.mensaje);
  }

  getPrueba(){
   console.log(this.Grupof.value);
  }
  
 
}


