import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface OrderItem {
  id: number;
  customer: string;
  total: number;
  status: string;
}

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.page.html',
})
export class OrdersPage {
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