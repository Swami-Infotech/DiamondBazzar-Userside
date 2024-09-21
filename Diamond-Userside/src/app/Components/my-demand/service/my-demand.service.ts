import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyDemandService {

  constructor(private http:HttpClient) { }

  baseurl = environment.baseURL;

  getpostby(data: any): Observable<any>{
    return this.http.post(this.baseurl + "Post/GetMyPosts",data);
  }
}
