import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  baseurl = environment.baseURL;


  


  getwebdashboard(id:any){
    return this.http.get(this.baseurl + "Web/GetWebDashboard/" + id)
  }
}
