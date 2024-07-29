import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  activatedRoute: any;
  // apiUrl = environment.baseURL
  constructor(private _httpClient: HttpClient) { }

  SingUpApiData(data: any): Observable<any> {
    const url = `${environment.baseURL}Auth/SignUp`;
    return this._httpClient.post<any>(url, data);
  }
}