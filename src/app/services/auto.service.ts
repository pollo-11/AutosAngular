import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auto } from '../model/auto';

@Injectable({
  providedIn: 'root',
})
export class AutoService {
  private apiUrl = 'http://localhost:8080/api/v1/Cars';
  constructor(private http: HttpClient) {}

  create(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  getAll(): Observable<Auto[]> {
    return this.http.get<Auto[]>(this.apiUrl);
  }
  get(id: String): Observable<Auto> {
    return this.http.get<Auto>(`${this.apiUrl}/${id}`);
  }
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  update(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
}
