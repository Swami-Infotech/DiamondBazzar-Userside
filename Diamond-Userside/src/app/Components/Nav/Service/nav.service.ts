import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  baseurl = environment.baseURL;
 
  activatedRoute: any;
  // apiUrl = environment.baseURL
  constructor(private http: HttpClient) { }

  AddSupport(data: any): Observable<any> {
    const url = `${environment.baseURL}App/AddSupport`;
    return this.http.post<any>(url, data);
  }
  GetAllSupportTypes(){
    return this.http.get(`${environment.baseURL}App/GetAllSupportTypes`);
  }
  UserSubscription(id: number){
    return this.http.get(`${environment.baseURL}App/GetUserSubscriptionByUserID?userID=${id}`);
  }

  getallnotification(id:number){
    return this.http.get(`${environment.baseURL}App/GetAllNotification?userID=${id}`);
  }

 

  getcategoriesforpost(mainDiamondType: number, subDiamondType: number, postTypeSelection: number) {
    return this.http.post(
      `${environment.baseURL}Post/GetCategoriesforPost?diamondCategory=${mainDiamondType}&diamondSubCategory=${subDiamondType}&postType=${postTypeSelection}`, 
      {}
    );
  }
  
  
}
 