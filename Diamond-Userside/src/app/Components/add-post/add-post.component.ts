import { Component, OnInit } from '@angular/core';
import { deflate } from 'zlib';
import { AddPostService } from './Service/add-post.service';
import { error, log } from 'console';
import { CommonModule } from '@angular/common';
import { NavComponent } from "../Nav/view/nav/nav.component";
import { FooterComponent } from "../Footer/View/footer/footer.component";
import { FileType } from './modal/addpost';
import { response } from 'express';
import { ToastrNotificationService } from '../Common/toastr-notification.service';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [CommonModule, NavComponent, FooterComponent],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent implements OnInit {
  MainCat!: number;
  SubCat!: number;
  PostType!: number;

  MainCatDISP!: any;
  SubCatDISP!: any;
  PostTypeDISP!: any;



  selectedFile: File | null = null;
  message: string = '';
  imagePreview: string | null = null;

  



  constructor(private service : AddPostService,private toast:ToastrNotificationService){}

  ngOnInit(): void {
    this.FetchType();
  }

  currentPage: number = 1;  
  totalPages: number = 3;   
  pages: number[] = [1, 2, 3]; 

  selectPage(page: number): void {
    if (page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
    }
  }

  // Method to go to the next page
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      
    }
  }

  prePage(){
    if(this.currentPage > 1){
      this.currentPage--;
    }
  }
 
  FetchType(){
    this.MainCat =  Number(sessionStorage.getItem('MainDiamondType'));
    this.SubCat = Number(sessionStorage.getItem('SubDiamondType'));
    this.PostType = Number(sessionStorage.getItem('PostType'));

    switch(this.MainCat){
       case 0:
        this.MainCatDISP = 'Natural';
        break;
       case 1:
        this.MainCatDISP = 'LabGrown';
        break;
       default:
        this.MainCatDISP = 'undefined';
        break;
    }
    switch(this.SubCat){
      case 0:
        this.SubCatDISP = 'Rough';
        break;
      case 1:
        this.SubCatDISP = 'Polish';
        break;
      default:
        this.SubCatDISP = 'undefined';
        break;
    }
    switch(this.PostType){
      case 0:
       this.PostTypeDISP = 'Post';
       break;
      case 1:
       this.PostTypeDISP = 'Demand';
       break;
      default:
       this.PostTypeDISP = 'undefined';
       break;
   }

  }





  ExportLink :any = '';

  ExportCategoriesToExcel() { 
    this.service.ExportCategoriesToExcel(this.MainCat, this.SubCat, this.PostType).subscribe(
      (resp:any)=>{
        this.ExportLink = resp.data;
        console.log(this.ExportLink);
        console.log(resp.message);

        if(this.ExportLink){
          const link = document.createElement('a');
          link.href= this.ExportLink;
          link.target='_blank';
          link.download = 'Categories.xlsx';

          link.click()
        } 
      }
    )
  }

  EXLfile:any;


  onFileChange(event:any){
    if (event.target.files.length > 0) {
      this.EXLfile = event.target.files[0];  
    }
  }


  base64String:any; 
  fileChangeEvent(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.base64String =  e.target.result.split(',')[1];
          console.log(this.base64String);
          
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
  





  MSG:string = '';

  AddPostsWithMetadataFromExcel() {
    // Ensure the file is base64-encoded and available
    this.EXLfile = this.base64String;
  
    if (this.EXLfile) {
      // Retrieve userID from session storage
      const userID = Number(sessionStorage.getItem('userid'));
  
      if (this.MainCat === null || this.SubCat === null || this.PostType === null || 
        this.MainCat === undefined || this.SubCat === undefined || this.PostType === undefined) {
      this.MSG = "Please fill in all required fields!";
      return;
    }
    
  
      // Create request body

      
      const reqbody = {
        userID: userID,
        diamondCategory: this.MainCat,
        subCategory: this.SubCat,
        postType: this.PostType,
        excelFile: this.EXLfile,
      };
  
      // const reqbody = {
      //   userID: 1,
      //   diamondCategory: 1,
      //   subCategory: 1,
      //   postType: 1,
      //   excelFile: "this.EXLfile,"
      // };


      // Call the API and handle the response
      this.service.excelAPI(reqbody).subscribe(
        (resp: any) => {
          this.MSG = resp.message;
          console.log('Response:', resp.message);
  
          // Optional: Handle success (e.g., refresh the view, clear form)
        },
        (error) => {
          console.error('Error:', error);
          this.MSG = "Failed to upload Excel file. Please try again.";
        }
      );
    } else {
      this.MSG = "Please select a valid file!";
    }
  }
  


    onFileSelected(event: any): void {
      this.selectedFile = event.target.files[0]; // Get the first file selected
  
      if (this.selectedFile) {
        this.message = ''; // Clear any previous messages
      }
    }

    file:any;


    uploadFile(){
     if(this.selectedFile){
      const file = this.selectedFile;
      const formData = new FormData();
      formData.append('formfile',file);

      const fileType = FileType.PostAttachment;

      this.service.Uploadmedia(formData,fileType).subscribe(
        (response:any) =>{
          if(response.status === true){
            this.imagePreview = response.data
          }else{
            
          }
        },
        (error) =>{
          console.error("uoloda media error",error);
        }
      )
     }
      }
 
}
