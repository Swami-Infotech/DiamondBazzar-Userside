import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }

  baseurl = environment.baseURL;

  getFavPostsby(userID: number, postType: number): Observable<any> {
    const url = `${this.baseurl}Post/GetFavPostsby?UserID=${userID}&PostType=${postType}`;
    const body = {}; 
    return this.http.post<any>(url, body);
  }
  
  
  
  
  
  
}
