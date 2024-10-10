import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SubDiamondType } from '../Model/home';
import { PostTypeSelection } from '../../products/Model/Product';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  baseurl = environment.baseURL;


  
  getpostby(data: any) {
    return this.http.post(this.baseurl + "Post/GetPostsby",data);
  }

  getwebdashboard(id:any){
    return this.http.get(this.baseurl + "Web/GetAppDashboardV2/" + id)
  }
}
