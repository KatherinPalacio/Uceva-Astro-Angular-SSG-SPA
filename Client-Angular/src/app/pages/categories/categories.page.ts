import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface CategoryItem {
  id: number;
  name: string;
  description: string;
  status: string;
}

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.page.html',
})
export class CategoriesPage {
  categories: CategoryItem[] = [
    {
      id: 1,
      name: 'Tecnología',
      description: 'Productos electrónicos y accesorios',
      status: 'Activa',
    },
    {
      id: 2,
      name: 'Hogar',
      description: 'Artículos para uso doméstico',
      status: 'Activa',
    },
    {
      id: 3,
      name: 'Papelería',
      description: 'Materiales escolares y de oficina',
      status: 'Activa',
    },
    {
      id: 4,
      name: 'Deportes',
      description: 'Implementos y accesorios deportivos',
      status: 'Inactiva',
    },
  ];
}