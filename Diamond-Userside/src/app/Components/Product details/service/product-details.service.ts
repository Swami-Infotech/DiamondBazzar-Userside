import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private http:HttpClient) { }

  baseurl = environment.baseURL;


  getpostdetails(id:number){
    return this.http.get(this.baseurl + "Post/GetPostDetailsby/" + id)
   }

   addfavourite(data:any){
    return this.http.post(this.baseurl + "Post/AddPostasFavourite",data)
   }


  //  addfavourite(favs: any): Observable<any> {
  //   return this.http.post(`${this.baseurl}/wishlist/add`, favs);
  // }


  

}
