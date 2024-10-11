import { Component, OnInit } from '@angular/core';
import { DiamondCategory, Post } from '../Home/Model/home';
import { MyDiamondService } from './Service/my-diamond.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from "../Footer/View/footer/footer.component";
import { NavComponent } from "../Nav/view/nav/nav.component";
import { NgClass, NgFor, NgIf } from '@angular/common';
import { diamondCategory, diamondSubCategory } from '../Nav/Model/Nav';

@Component({
  selector: 'app-my-diamond',
  standalone: true,
  imports: [FooterComponent, NavComponent, NgIf, NgClass, NgFor],
  templateUrl: './my-diamond.component.html',
  styleUrl: './my-diamond.component.css'
})
export class MyDiamondComponent implements OnInit {

  postdata = new Post();
  MyDiamonds: any[] = [];
  mainCategory: diamondCategory = diamondCategory.Natural; // Default to 'Natural'
  subCategory: diamondSubCategory = diamondSubCategory.Rough;

  public pageNumber: number = 0;
  public pageSize: number = 10;
  public totalItems: number = 0;

  DiamondCategory = diamondCategory;
  DiamondSubCategory = diamondSubCategory;

  constructor(private service: MyDiamondService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getdata();
  }

  getdata() {
    const postdata = {
      userid: Number(sessionStorage.getItem('userid')),
      postType: 0,
      mainCategory: this.mainCategory, // Fetch based on mainCategory (LabGrown or Natural)
      subCategory: this.subCategory,   // You can modify this if subcategory is needed
      pageNumber: this.pageNumber,
      pageSize: this.pageSize
    };

    this.service.getpostby(postdata).subscribe(
      (resp: any) => {
        this.MyDiamonds = resp.data || [];
        this.totalItems = resp.totalItems || 0;
        console.log("My Diamonds",this.MyDiamonds);
        
      },
      (error) => {
        console.error("Error fetching diamonds: ", error);
        this.MyDiamonds = []; // Clear diamonds if an error occurs
      }
    );
  }

  onCategoryChange(category: diamondCategory): void {
    this.mainCategory = category;
    this.getdata(); // Refresh data based on new category
  }

  viewpostdetails(id: any): void {
    this.router.navigate(['/Productdetils', id]);
  }

  onPageChange(newPage: number): void {
    this.pageNumber = newPage;
    this.getdata();
  }

  isNextButtonDisabled(): boolean {
    return this.MyDiamonds.length < this.pageSize;
  }
}
