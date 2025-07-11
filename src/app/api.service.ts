// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://172.21.11.107:8080/courseclick'; // Replace with your actual backend URL

  constructor(private http: HttpClient) {}

  getQuestionPapers(program: string): Observable<any[]> {
    const params = new HttpParams().set('program', program);
    return this.http.get<any[]>(`${this.baseUrl}/searchfilterpage`, { params });
  }
}
