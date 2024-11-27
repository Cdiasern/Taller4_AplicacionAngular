import { Component } from '@angular/core';
import { HolidaysService } from '../../services/holidays.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-check-holiday',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <h2>Verificar si una fecha es festiva</h2>
    <input [(ngModel)]="date" placeholder="dd/MM/yyyy" />
    <button (click)="checkHoliday()">Verificar</button>
    <p *ngIf="result">{{ result }}</p>
  `,
})
export class CheckHolidayComponent {
  date: string = '';
  result: string = '';

  constructor(private holidaysService: HolidaysService) {}

  checkHoliday() {
    // Validar el formato de la fecha antes de enviarla
    if (!this.isValidDate(this.date)) {
      this.result = 'Por favor, ingresa una fecha válida en formato dd/MM/yyyy.';
      return;
    }

    this.holidaysService.isHoliday(this.date).subscribe(
      (response) => {
        if (response.isHoliday) {
          this.result = `Es festivo`;
        } else {
          this.result = 'No es festivo.';
        }
      },
      (error) => {
        console.error('Error al verificar la fecha:', error);
        this.result = 'Error verificando la fecha.';
      }
    );
  }

  // Valida que la fecha tenga el formato dd/MM/yyyy
  private isValidDate(date: string): boolean {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/; // Formato dd/MM/yyyy
    if (!regex.test(date)) {
      return false;
    }

    const [day, month, year] = date.split('/').map(Number);
    const parsedDate = new Date(year, month - 1, day);
    return (
      parsedDate.getFullYear() === year &&
      parsedDate.getMonth() === month - 1 &&
      parsedDate.getDate() === day
    );
  }
}