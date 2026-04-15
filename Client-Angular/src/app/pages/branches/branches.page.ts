import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

/**
 * Representa una sucursal de la empresa.
 */
interface BranchItem {
  /**
   * Identificador único de la sucursal.
   */
  id: number;

  /**
   * Nombre de la sucursal.
   */
  name: string;

  /**
   * Ciudad donde se encuentra la sucursal.
   */
  city: string;

  /**
   * Estado actual de la sucursal (activa o inactiva).
   */
  status: string;
}

/**
 * Componente encargado de mostrar la lista de sucursales.
 */
@Component({
  selector: 'app-branches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './branches.page.html',
})
export class BranchesPage {
  /**
   * Colección de sucursales disponibles en la vista.
   */
  branches: BranchItem[] = [
    {
      id: 1,
      name: 'Sucursal Centro',
      city: 'Cali',
      status: 'Activa',
    },
    {
      id: 2,
      name: 'Sucursal Norte',
      city: 'Bogotá',
      status: 'Activa',
    },
    {
      id: 3,
      name: 'Sucursal Sur',
      city: 'Medellín',
      status: 'Inactiva',
    },
    {
      id: 4,
      name: 'Sucursal Oeste',
      city: 'Barranquilla',
      status: 'Activa',
    },
  ];
}