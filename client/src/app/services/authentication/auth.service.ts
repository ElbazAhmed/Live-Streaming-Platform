import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl='http://localhost:8080/api/v1/auth';

  constructor(private http : HttpClient) { }

  loginUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/authenticate`,user)
  }

  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`,user)
  }
}
