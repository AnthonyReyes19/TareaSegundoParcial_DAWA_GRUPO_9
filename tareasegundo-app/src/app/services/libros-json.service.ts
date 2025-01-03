import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../models/Libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosJsonService {
  private jsonUrl = 'http://localhost:3000/libros';

  constructor(private http: HttpClient) {}

  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.jsonUrl);
  }
}
