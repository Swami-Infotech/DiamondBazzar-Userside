import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { FileType } from '../modal/addpost';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {



  constructor(private http : HttpClient) { }

  baseURL = environment.baseURL;

  ExportCategoriesToExcel(diamondCategory:number, diamondSubCategory:number, postType:number){
    return this.http.post(`${this.baseURL}Post/ExportCategoriesToExcel?diamondCategory=${diamondCategory}&diamondSubCategory=${diamondSubCategory}&postType=${postType}`,{})
  }
    

  excelAPI(data:any){ 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.baseURL + 'Post/AddPostsWithMetadataFromExcel',data, { headers });
  }
  
 
 
  // AddPostsWithMetadataFromExcel(UserID:number,DiamondCategory:number,SubCategory:number,PostType:number,data: any){
     
  //   return this.http.post(`${this.baseURL}Post/AddPostsWithMetadataFromExcel?UserID=${UserID}&DiamondCategory=${DiamondCategory}&SubCategory=${SubCategory}&PostType=${PostType}`,data);
    
  // }

  Uploadmedia(data: FormData, fileType: FileType): Observable<any> {
    return this.http.post(`${this.baseURL}App/UploadMediaV2?fileType=${fileType}`, data);
  }
  
}


