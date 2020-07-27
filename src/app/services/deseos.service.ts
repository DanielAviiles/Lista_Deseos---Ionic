import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  lista: Lista[] = [];

  constructor() {
    this.cargarStorage();
  }


  crearLista(titulo: string) {
    const nuevaLista = new Lista(titulo);
    this.lista.push(nuevaLista);
    this.guardarStorage();
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.lista));
  }

  cargarStorage() {
    if (localStorage.getItem('data')) {
      this.lista = JSON.parse(localStorage.getItem('data'));
    }
  }
}
