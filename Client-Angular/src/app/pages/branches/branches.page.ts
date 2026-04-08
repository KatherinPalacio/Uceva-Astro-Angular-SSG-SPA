import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface BranchItem {
  id: number;
  name: string;
  city: string;
  status: string;
}

@Component({
  selector: 'app-branches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './branches.page.html',
})
export class BranchesPage {
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