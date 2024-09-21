import { Component, OnInit } from '@angular/core';
import { DiamondCategory, Post } from '../Home/Model/home';
import { MyDiamondService } from './Service/my-diamond.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from "../Footer/View/footer/footer.component";
import { NavComponent } from "../Nav/view/nav/nav.component";
import { NgClass, NgFor, NgIf } from '@angular/common';
import { diamondSubCategory } from '../Nav/Model/Nav';

@Component({
  selector: 'app-my-diamond',
  standalone: true,
  imports: [FooterComponent, NavComponent,
    NgIf,NgClass,NgFor

  ],
  templateUrl: './my-diamond.component.html',
  styleUrl: './my-diamond.component.css'
})
export class MyDiamondComponent implements OnInit {


  postdata = new Post();
  MyDiamonds: any[] = [];
  mainCategory: DiamondCategory = Number(sessionStorage.getItem('DiamondCatageryforMD'));
  subCategory: diamondSubCategory = diamondSubCategory.Rough;

  public pageNumber: number = 0;
  public pageSize: number = 10;

  public totalItems: number = 0;


  DiamondCategory = DiamondCategory;
  DiamondSubCategory = diamondSubCategory;

  constructor(private service: MyDiamondService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getdata();
  }


  getdata() {
    const postdata = {
      userid : Number(sessionStorage.getItem('userid')),
      postType: 0,
      mainCategory: this.mainCategory,
      subCategory: this.subCategory,
      pageNumber: this.pageNumber,
      pageSize: this.pageSize
    };

    this.service.getpostby(postdata).subscribe(
      (resp: any) => {
        this.MyDiamonds = resp.data;
        console.log("My Diamonds :",this.MyDiamonds)
        this.totalItems = resp.totalItems;
        console.log("Total Items :",this.totalItems)

      }
    );
  }


  onCategoryChange(category: diamondSubCategory): void {
    this.subCategory = category;

    console.log("sub Category is : ", this.subCategory);
    console.log("Main category is : ", sessionStorage.getItem('DiamondCatageryforMD') )
    this.getdata();
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

