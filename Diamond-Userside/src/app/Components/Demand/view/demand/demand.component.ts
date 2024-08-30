import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../Footer/View/footer/footer.component';
import { Demand, DiamondCategory, Post } from '../../Modal/Demand';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DemandService } from '../../service/demand.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-demand',
  standalone: true,
  imports: [CommonModule, FormsModule,NavComponent,FooterComponent,TranslateModule],
  templateUrl: './demand.component.html',
  styleUrl: './demand.component.css'
})
export class DemandComponent implements OnInit {

  postdata = new Post();
  demands:any[] = [];
  mainCategory: DiamondCategory = DiamondCategory.Natural;

  public pageNumber: number = 0;
  public pageSize: number = 10;

  public totalItems: number = 0; 


  DiamondCategory = DiamondCategory;

  constructor(private service:DemandService,private router: Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.getdata();
  }


  getdata() {
    const postdata = {
      postType: 1,
      mainCategory: this.mainCategory,
      subCategory: 1, // Fixed typo from 'subCategoery' to 'subCategory'
      pageNumber: this.pageNumber,
      pageSize: this.pageSize // Fixed typo from 'PageSize' to 'pageSize'
    };
  
    this.service.getpostby(postdata).subscribe(
      (resp: any) => {
        if (resp && resp.status) { // Check if response exists and has a 'status' property
          if (resp.data && Array.isArray(resp.data)) {
            this.demands = resp.data;
            this.totalItems = resp.totalItems;
          } else {
            console.warn('API response is valid, but no data was found.');
            this.demands = []; // No data available
          }
        } else {
          console.error('Unexpected API response format or status is false:', resp);
          this.demands = []; // Fallback to an empty array
        }
      },
      (error) => {
        console.error('API request failed:', error);
        this.demands = []; // Handle API request error
      }
    );
  }
  

  onCategoryChange(category: DiamondCategory): void {
    this.mainCategory = category;
    this.getdata();
  }


  viewpostdetails(id: any): void {
    this.router.navigate(['/Productdetils', id]);
  }

  onPageChange(newPage: number): void {
    this.pageNumber = newPage;
    this.getdata();
  }
  
  // onPageChange(newPage: number): void {
  //   if (newPage >= 0 && (newPage * this.pageSize < this.totalItems)) {
  //     this.pageNumber = newPage;
  //     this.getdata();
  //   }
  // }

  // isNextDisabled(): boolean {
  //   return this.pageNumber * this.pageSize >= this.totalItems;
  //   this.getdata();
  // }

  isNextButtonDisabled(): boolean {
    return this.demands.length < this.pageSize;
  }


}


