import { Component } from '@angular/core';
import { HolidaysService } from '../../services/holidays.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-check-holiday',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './check-holiday.component.html',
})
export class CheckHolidayComponent {
  date: string = '';
  result: string = '';

  constructor(private holidaysService: HolidaysService) {}

  checkHoliday() {
    if (!this.date) {
      this.result = 'Por favor, ingresa una fecha válida.';
      return;
    }

    this.holidaysService.isHoliday(this.date).subscribe(
      (response) => {
        this.result = response.isHoliday
          ? `Es festivo`
          : 'No es festivo.';
      },
      (error) => {
        this.result = 'Error verificando la fecha.';
        console.error(error);
      }
    );
  }
}