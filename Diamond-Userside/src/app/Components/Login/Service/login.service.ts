import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  activatedRoute: any;
  // apiUrl = environment.baseURL
  constructor(private _httpClient: HttpClient) { }

  LoginData(data: any): Observable<any> {
    const url = `${environment.baseURL}Auth/AuthOTP`;
    return this._httpClient.post<any>(url, data);
  }
}
