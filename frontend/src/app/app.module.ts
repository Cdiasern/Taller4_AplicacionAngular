import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Asegúrate de este import
import { AppComponent } from './app.component';
import { CheckHolidayComponent } from './components/check-holiday/check-holiday.component';
import { ListHolidaysComponent } from './components/list-holidays/list-holidays.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckHolidayComponent,
    ListHolidaysComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // Asegúrate de este registro
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}