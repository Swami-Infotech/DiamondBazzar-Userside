import { Component, OnInit } from '@angular/core';
import { deflate } from 'zlib';
import { AddPostService } from './Service/add-post.service';
import { log } from 'console';
import { CommonModule } from '@angular/common';
import { NavComponent } from "../Nav/view/nav/nav.component";
import { FooterComponent } from "../Footer/View/footer/footer.component";

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

  constructor(private service : AddPostService){}

  ngOnInit(): void {
    this.FetchType();
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



  MSG:string = '';

  AddPostsWithMetadataFromExcel() { 

    if(this.EXLfile != null) {
      var  userID = Number(sessionStorage.getItem('userid'));

      this.service.AddPostsWithMetadataFromExcel(userID,this.MainCat,this.SubCat,this.PostType,this.EXLfile).subscribe(
        (resp:any)=>{
          this.MSG = resp.message;
          console.log(resp.message);
        }
      )
    }  else {
      this.MSG = "Please select a file!";
    }
    }

}
