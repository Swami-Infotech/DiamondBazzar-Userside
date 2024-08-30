import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandService {

  constructor(private http:HttpClient) { }

  baseurl = environment.baseURL;

  getpostby(data: any): Observable<any>{
    return this.http.post(this.baseurl + "Post/GetPostsby",data);
  }
}
