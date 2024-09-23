import { Component } from '@angular/core';
import { NavComponent } from "../Nav/view/nav/nav.component";
import { AddDemandService } from './Service/add-demand.service';

@Component({
  selector: 'app-add-demand',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './add-demand.component.html',
  styleUrl: './add-demand.component.css'
})
export class AddDemandComponent {

  MainCat!: number;
  SubCat!: number;
  PostType!: number;

  MainCatDISP!: any;
  SubCatDISP!: any;
  PostTypeDISP!: any;

  constructor(private service : AddDemandService){}

  ngOnInit(): void {
    this.FetchType();
  }
 
  FetchType(){
    this.MainCat =  Number(sessionStorage.getItem('MainDiamondType'));
    this.SubCat = Number(1);
    this.PostType = Number(1);

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
