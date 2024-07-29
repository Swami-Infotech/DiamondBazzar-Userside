import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  activatedRoute: any;
  // apiUrl = environment.baseURL
  constructor(private _httpClient: HttpClient) { }

  VerifyOtp(data: any): Observable<any> {
    const url = `${environment.baseURL}Auth/VerifyOTP`;
    return this._httpClient.post<any>(url, data);
  }
}