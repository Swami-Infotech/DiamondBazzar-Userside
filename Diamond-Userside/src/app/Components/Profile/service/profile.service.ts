import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  activatedRoute: any;
  // apiUrl = environment.baseURL
  constructor(private _httpClient: HttpClient) { }

  AddCompanyProfile(data: any): Observable<any> {
    const url = `${environment.baseURL}Auth/AddCompanyProfile`;
    return this._httpClient.post<any>(url, data);
  }
  BusinessCategoryList(){
    return this._httpClient.get(`${environment.baseURL}Auth/GetAllBusinessCategoryList`);
  }
}
