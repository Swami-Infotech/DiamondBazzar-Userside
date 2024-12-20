import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuctionDetailsService {
  constructor(private http:HttpClient) { }

  baseurl = environment.baseURL;


  getAuctionDetails(postID: number, userID: number, language: number) {
    return this.http.get(`${this.baseurl}Auction/GetAuctionDetails?PostID=${postID}&UserID=${userID}&Language=${language}`);
  }


  BookTimeSlot(data:any) {
    return this.http.post(`${this.baseurl}Auction/BookTimeSlot`,data);
  }


  AddBidOnAuction(data:any){ 
    return this.http.post(this.baseurl + 'Auction/AddBidOnAuction',data);
  }

  


}