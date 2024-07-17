import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SignupUser } from '../model/Signup';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  baseurl = environment.baseURL;

  constructor(private http:HttpClient) { }

SingUpApiData(user:SignupUser){
  return this.http.post(this.baseurl + "Auth/SignUp",user);
}

}