import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  constructor(private http : HttpClient) { }

  baseURL = environment.baseURL;

  ExportCategoriesToExcel(diamondCategory:number, diamondSubCategory:number, postType:number){
    return this.http.post(`${this.baseURL}Post/ExportCategoriesToExcel?diamondCategory=${diamondCategory}&diamondSubCategory=${diamondSubCategory}&postType=${postType}`,{})
  }

  AddPostsWithMetadataFromExcel(UserID: number, DiamondCategory: number, SubCategory: number, PostType: number, data: any) {
    const headers = new HttpHeaders({
      'Accept': 'application/json', 
    });
  
    const options = {
      headers: headers,
      withCredentials: true  
    };
  
    return this.http.post(`${this.baseURL}Post/AddPostsWithMetadataFromExcel?UserID=${UserID}&DiamondCategory=${DiamondCategory}&SubCategory=${SubCategory}&PostType=${PostType}`, data, options);
  }
 
  // AddPostsWithMetadataFromExcel(UserID:number,DiamondCategory:number,SubCategory:number,PostType:number,data: any){
     
  //   return this.http.post(`${this.baseURL}Post/AddPostsWithMetadataFromExcel?UserID=${UserID}&DiamondCategory=${DiamondCategory}&SubCategory=${SubCategory}&PostType=${PostType}`,data);
    
  // }
}


