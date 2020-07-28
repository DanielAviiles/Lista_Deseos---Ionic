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

    return nuevaLista.id;
  }

  borrarLista(dataLista: Lista) {
    this.lista = this.lista.filter((infoList) => infoList.id !== dataLista.id);
    this.guardarStorage();
  }

  obtenerList(id: string | number) {
    id = Number(id);
    return this.lista.find((dataList) => dataList.id === id);
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
