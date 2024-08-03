import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {
  activatedRoute: any;
  // apiUrl = environment.baseURL
  constructor(private _httpClient: HttpClient) { }

  UpdateUserProfile(data: any): Observable<any> {
    const url = `${environment.baseURL}App/UpdateUserProfileBy`;
    return this._httpClient.post<any>(url, data);
  }
  UserProfileBy(id: number) {
    return this._httpClient.get(`${environment.baseURL}App/GetUserProfileBy?userid=${id}`);
  }
  BusinessCategoryList(){
    return this._httpClient.get(`${environment.baseURL}Auth/GetAllBusinessCategoryList`);
  }
}