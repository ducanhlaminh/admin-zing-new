import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  getTokenGG(code: string) {
    return this.http.get(environment.API_TOKEN_GG, { params: { code } });
  }
}
