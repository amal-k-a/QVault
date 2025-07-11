// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://your-backend.com/api'; // your API base URL

  constructor(private http: HttpClient) { }

  getQuestionPapers(course: string, year?: number, term?: string): Observable<any> {
    let params = new HttpParams().set('course', course);
    if (year) params = params.set('year', year.toString());
    if (term) params = params.set('term', term);

    return this.http.get(`${this.baseUrl}/questionpapers`, { params });
  }
}
