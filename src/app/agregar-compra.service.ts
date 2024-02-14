import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgregarCompraService    {

  constructor() { }

   add(y:number , x:number){
    return x + y ;
   }
}
