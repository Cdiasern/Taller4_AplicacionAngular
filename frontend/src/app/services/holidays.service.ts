import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HolidaysService {
  private apiUrl = 'https://localhost:7298/api/holidays'; // Asegúrate de que esta URL sea la correcta

  constructor(private http: HttpClient) {}

  // Validar si una fecha es festiva
  isHoliday(date: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/is-holiday?date=${date}`);
  }  

  // Listar festivos de un año
  getHolidays(year: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get-holidays?year=${year}`);
  }
}