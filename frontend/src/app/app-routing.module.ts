import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckHolidayComponent } from './components/check-holiday/check-holiday.component';

const routes: Routes = [
  { path: 'test', component: CheckHolidayComponent }, // Ruta simple
  { path: '', redirectTo: '/test', pathMatch: 'full' } // Redirigir por defecto a la nueva ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}