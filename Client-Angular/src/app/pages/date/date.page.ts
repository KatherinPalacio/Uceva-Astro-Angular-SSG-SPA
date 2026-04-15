import { Component } from '@angular/core';
import { BadgeAtom } from '@brejcha13320/design-system-bootstrap';

/**
 * Componente encargado de mostrar la fecha actual del sistema.
 */
@Component({
  selector: 'app-date.page',
  imports: [BadgeAtom],
  templateUrl: './date.page.html',
})
export class DatePage {

  /**
   * Fecha actual del sistema que se muestra en la vista.
   */
  currentDate = new Date();

}