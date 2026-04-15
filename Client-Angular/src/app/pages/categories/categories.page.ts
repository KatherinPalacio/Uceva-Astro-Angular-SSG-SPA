import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

/**
 * Representa una categoría de productos.
 */
interface CategoryItem {
  /**
   * Identificador único de la categoría.
   */
  id: number;

  /**
   * Nombre de la categoría.
   */
  name: string;

  /**
   * Descripción de la categoría.
   */
  description: string;

  /**
   * Estado actual de la categoría (activa o inactiva).
   */
  status: string;
}

/**
 * Componente encargado de mostrar la lista de categorías.
 */
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.page.html',
})
export class CategoriesPage {
  /**
   * Colección de categorías disponibles en la vista.
   */
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