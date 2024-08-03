import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavService {

 
  activatedRoute: any;
  // apiUrl = environment.baseURL
  constructor(private _httpClient: HttpClient) { }

  AddSupport(data: any): Observable<any> {
    const url = `${environment.baseURL}App/AddSupport`;
    return this._httpClient.post<any>(url, data);
  }
  GetAllSupportTypes(){
    return this._httpClient.get(`${environment.baseURL}App/GetAllSupportTypes`);
  }
  UserSubscription(id: number){
    return this._httpClient.get(`${environment.baseURL}App/GetUserSubscriptionByUserID?userID=${id}`);
  }
}
