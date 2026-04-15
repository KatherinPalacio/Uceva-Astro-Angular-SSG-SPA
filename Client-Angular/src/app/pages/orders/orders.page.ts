import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

/**
 * Representa un pedido mostrado en la tabla de órdenes.
 */
interface OrderItem {
  /**
   * Identificador único del pedido.
   */
  id: number;

  /**
   * Nombre del cliente que realizó el pedido.
   */
  customer: string;

  /**
   * Valor total del pedido.
   */
  total: number;

  /**
   * Estado actual del pedido.
   */
  status: string;
}

/**
 * Componente encargado de mostrar la lista de pedidos.
 */
@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.page.html',
})
export class OrdersPage {
  /**
   * Colección de pedidos mostrados en la vista.
   */
  orders: OrderItem[] = [
    {
      id: 1,
      customer: 'Juan Pérez',
      total: 120000,
      status: 'Completado',
    },
    {
      id: 2,
      customer: 'María López',
      total: 85000,
      status: 'Pendiente',
    },
    {
      id: 3,
      customer: 'Carlos Gómez',
      total: 45000,
      status: 'Cancelado',
    },
    {
      id: 4,
      customer: 'Ana Torres',
      total: 99000,
      status: 'Completado',
    },
  ];
}