import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Otp } from '../model/VerifyOtp';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  baseurl = environment.baseURL;

  constructor(private http:HttpClient) { }

  VerifyOtp(otp:Otp){
    return this.http.post(this.baseurl + "Auth/VerifyOTP",otp)
  }
}
