import { Component, OnInit } from '@angular/core';
import { NavComponent } from "../../../Nav/view/nav/nav.component";
import { DiamondCategory, Post, PostTypeSelection, SubDiamondType } from '../../Model/Product';
import { ProductsService } from '../../service/products.service';
import { response } from 'express';
import { log } from 'console';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavComponent,CommonModule, FormsModule,],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  postdata = new Post();

  mains: any[] = [];

  MDtype = DiamondCategory;
  SuuDtype = SubDiamondType;
  Posttypes = PostTypeSelection;

  mainCategory: number | null = null;
  subCategory: number | null = null;
  postType: number | null = null;
  pageNumber: number = 1;
  pageSize: number = 10;


  DiamondCategory = DiamondCategory;
  SubDiamondType = SubDiamondType;
  PostTypeSelection = PostTypeSelection;

  mainDiamondTypes: { name: string, value: DiamondCategory }[] = [];
  subDiamondTypes: { name: string, value: SubDiamondType }[] = [];
  postTypeSelections: { name: string, value: PostTypeSelection }[] = [];

  selectedMainDiamondType: DiamondCategory | null = null;
  selectedSubDiamondType: SubDiamondType | null = null;
  selectedPostTypeSelection: PostTypeSelection | null = null;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const sectionId = params['section'];
      this.getallpost(sectionId);
    });
  }

  enumToArray(enumObj: any): { name: string, value: any }[] {
    return Object.keys(enumObj)
      .filter(key => isNaN(Number(key)))  
      .map(key => ({ name: key, value: enumObj[key] }));
  }

  constructor(private service:ProductsService,private router: Router,private route:ActivatedRoute){}

  getallpost(sectionId: number) {
    // Set the enums based on the sectionId
    switch (sectionId) {
      case 0:
        this.postType = PostTypeSelection.Post;
        this.mainCategory = DiamondCategory.LabGrown;
        this.subCategory = SubDiamondType.Polish;
        break;
      case 1:
        this.postType = PostTypeSelection.Post;
        this.mainCategory = DiamondCategory.LabGrown;
        this.subCategory = SubDiamondType.Rough;
        break;
      case 2:
        this.postType = PostTypeSelection.Post;
        this.mainCategory = DiamondCategory.Natural;
        this.subCategory = SubDiamondType.Polish;
        break;
      case 3:
        this.postType = PostTypeSelection.Post;
        this.mainCategory = DiamondCategory.Natural;
        this.subCategory = SubDiamondType.Rough;
        break;
      default:
        console.log('Unknown section');
        return; // Exit if section ID is unknown
    }

    // Prepare the request body
    const requestBody = {
      postType: this.postType,
      mainCategory: this.mainCategory,
      subCategory: this.subCategory,
      pageNumber: this.pageNumber,
      pageSize: this.pageSize
    };

    // Call the API service method
    this.service.getpostby(requestBody).subscribe(
      (resp: any) => {
        this.mains = resp.data; // Handle the response data
        console.log("Fetched data:", this.mains);
      },
      (error) => {
        console.error('Error fetching posts:', error); // Handle errors
      }
    );
  }



}
