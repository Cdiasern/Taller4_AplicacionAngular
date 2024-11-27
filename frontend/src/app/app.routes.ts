import { Routes } from '@angular/router';
import { CheckHolidayComponent } from './components/check-holiday/check-holiday.component';
import { ListHolidaysComponent } from './components/list-holidays/list-holidays.component';

export const routes: Routes = [
  { path: 'check-holiday', component: CheckHolidayComponent },
  { path: 'list-holidays', component: ListHolidaysComponent },
  { path: '', redirectTo: '/check-holiday', pathMatch: 'full' } // Redirigir por defecto
];