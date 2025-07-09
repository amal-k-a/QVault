// src/app/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loginUrl = 'http://172.21.11.107:8080/userlog';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<string> {
    const params = new HttpParams()
      .set('Email', email)
      .set('Password', password);

    return this.http.get(this.loginUrl, { params, responseType: 'text' });
  }

}
