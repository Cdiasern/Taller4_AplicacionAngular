import { Component } from '@angular/core';
import { HolidaysService } from '../../services/holidays.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-list-holidays',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
  ],
  templateUrl: './list-holidays.component.html',
})
export class ListHolidaysComponent {
  year: number | null = null;
  holidays: any[] = [];
  displayedColumns: string[] = ['name', 'date']; // Columnas para la tabla

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