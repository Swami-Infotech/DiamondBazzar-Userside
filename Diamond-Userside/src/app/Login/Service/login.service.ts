import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../Model/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseurl = environment.baseURL;

  constructor(private http:HttpClient) { }

SendData(user:User){
  return this.http.post(this.baseurl + "Auth/AuthOTP",user);
}


}
