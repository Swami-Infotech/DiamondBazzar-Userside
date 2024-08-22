import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseurl = environment.baseURL;
  constructor(private http:HttpClient) { }

  getpostby(data:any): Observable<any>{
    return this.http.post(this.baseurl + "Post/GetPostsby",data);
  }
}
