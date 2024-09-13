import { Component } from '@angular/core';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.page.html',
  styleUrls: ['./venta.page.scss'],
})
export class VentaPage {
  cliente = {
    nombre: '',
    apellido: '',
    edad: 0 
  };

  eventos = [
    { nombre: 'Concierto', precio: 65000 },
    { nombre: 'Pelicula', precio: 7500 },
    { nombre: 'Partido de Futbol', precio: 25000 },
  ];

  selectedEvento: { nombre: string; precio: number } | null = null;
  cantidadEntradas = 1;
  total = 0;
  descuento = 0;

  constructor() {}

  calcularSubtotal() {
    if (this.selectedEvento && this.cantidadEntradas > 0) {
      return this.selectedEvento.precio * this.cantidadEntradas;
    }
    return 0;
  }

  calcularDescuento() {
    const subtotal = this.calcularSubtotal();
    if (this.cliente.edad < 18) {
      return subtotal * 0.1; 
    } else if (this.cliente.edad > 60) {
      return subtotal * 0.2; 
    }
    return 0; 
  }

  calcularTotal() {
    const subtotal = this.calcularSubtotal();
    const descuento = this.calcularDescuento();
    this.total = subtotal - descuento;
  }

/*VERIFICAR SI FALTA POR SELECCIONAR ALGO*/
  confirmarCompra() {
    if (!this.cliente.nombre || !this.cliente.apellido || this.cliente.edad <= 0) {
      alert('Por favor, ingrese su informacion.');
      return;
    }
  
    if (!this.selectedEvento) {
      alert('Por favor, selecciona un evento.');
      return;
    }
  
    if (this.cantidadEntradas <= 0) {
      alert('Por favor, ingresa una cantidad de entradas.');
      return;
    }
  
    if (this.total > 0) {
      console.log('Compra confirmada:', this.total);
      alert(`Compra confirmada. Total a pagar: $${this.total}`);
    } else {
      alert('Por favor, ingresa todos los datos correctamente.');
    }
  }
  
}
