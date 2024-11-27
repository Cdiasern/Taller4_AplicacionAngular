import { Component } from '@angular/core';
import { HolidaysService } from '../../services/holidays.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-holidays',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <h2>Listar festivos de un año</h2>
    <input [(ngModel)]="year" placeholder="Año (ej: 2024)" type="number" />
    <button (click)="listHolidays()">Listar</button>
    <ul>
      <li *ngFor="let holiday of holidays">
        {{ holiday.name }} - {{ holiday.date }}
      </li>
    </ul>
  `,
})
export class ListHolidaysComponent {
  year: number | null = null;
  holidays: any[] = [];

  constructor(private holidaysService: HolidaysService) {}

  listHolidays() {
    if (!this.year) {
      alert('Por favor, ingresa un año válido.');
      return;
    }

    this.holidaysService.getHolidays(this.year).subscribe(
      (response) => {
        this.holidays = response;
      },
      (error) => {
        console.error('Error obteniendo los festivos:', error);
        this.holidays = [];
      }
    );
  }
}