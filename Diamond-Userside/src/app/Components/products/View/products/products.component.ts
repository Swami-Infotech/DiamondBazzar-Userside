import { Component, OnInit } from '@angular/core';
import { NavComponent } from "../../../Nav/view/nav/nav.component";
import { DiamondCategory, Post, PostTypeSelection, SubDiamondType } from '../../Model/Product';
import { ProductsService } from '../../service/products.service';
import { response } from 'express';
import { error, log } from 'console';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../Home/service/data.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavComponent,CommonModule, FormsModule,],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  mainss:any[]  = [];
   public totalItems: number = 0; 
  public pageNumber: number = 0;
  public pageSize: number = 10;


  MC : any;
  SC : any;

  constructor(private service:ProductsService,private router: Router,private route:ActivatedRoute,private dataservice:DataService){}
 

  ngOnInit(): void {
    
    this.getdatas();

    this.FetchHeading();
  }


  FetchHeading(){
    this.MC = Number(localStorage.getItem('mainCategorySA'));
    this.SC = Number(localStorage.getItem('subCategorySA'));

    if(this.MC == 0){
        this.MC = 'Natural'
    }
    else{
      this.MC = 'Lab Grown'
    }

    if(this.SC == 0){
      this.SC = 'Rough'
    }
    else{
      this.SC = 'Polish'
    }
 
  }

  getdatas(){
    this.mainss = this.dataservice.getData();
    if(this.mainss){
      console.log("Recivded Data aignains:",this.mainss);
    } else{
      console.error("No data recived");
    }
  }


  viewpostdetails(id: any): void {
    this.router.navigate(['/Productdetils', id]);
  }


  onPageChange(newPage: number): void {
    if (newPage >= 0 && (newPage * this.pageSize < this.totalItems)) {
      this.pageNumber = newPage;
      this.getdatas();
    }
  }


  isNextDisabled(): boolean {
    return this.pageNumber * this.pageSize >= this.totalItems;
  }
  

 

}
