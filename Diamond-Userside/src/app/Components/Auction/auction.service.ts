import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor(private http: HttpClient) { }

    baseurl = environment.baseURL;
  
  
    
    GetAuctionby(data: any) {
      return this.http.post(this.baseurl + "Auction/GetAuctionby",data);
    }
  
 
}
