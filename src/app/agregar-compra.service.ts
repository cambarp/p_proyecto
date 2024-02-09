import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgregarCompraService {

  constructor() { }

  capturar: string[] =['nose ', 'tip'];

  agregar(capturar: string) {
    this.capturar.push(capturar);
  }
}
