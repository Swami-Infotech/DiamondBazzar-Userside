import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgetpassService {

  baseurl = environment.baseURL
  constructor(private http:HttpClient) { }

  forgate(data:any){
    return this.http.post(this.baseurl + "Auth/ForgetPassword",data)
  }


}
