import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../Footer/View/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { AuctionService } from '../../auction.service';
import { diamondCategory, diamondSubCategory } from '../../../Nav/Model/Nav';
@Component({
  selector: 'app-auction',
  standalone: true,
  imports: [CommonModule, FormsModule, NavComponent, FooterComponent, TranslateModule, RouterLink],
  templateUrl: './auction.component.html',
  styleUrl: './auction.component.css'
})
export class AuctionComponent implements OnInit {

  constructor(
    private service: AuctionService
  ) { }

  ngOnInit(): void {
    this.getAuctionBy(0);
  }


  mainCategory: diamondCategory = diamondCategory.Natural;
  subCategory: diamondSubCategory = diamondSubCategory.Rough;

  DiamondCategory = diamondCategory;
  DiamondSubCategory = diamondSubCategory;


  auctionList: any;


  onCategoryChange(category: diamondCategory): void {
    this.mainCategory = category;
    this.getAuctionBy(this.mainCategory);// Refresh data based on new category
  }


  getAuctionBy(id:any) {

    const reqBody = {
      "postType": 2,
      "mainCategory": id,
      "subCategory": 0,
      "pageNumber": 0,
      "pageSize": 0,
      "langauge": 0
    }
    this.service.GetAuctionby(reqBody).subscribe(
      (resp: any) => {
        console.log("auction by : ", resp.data);
        this.auctionList = resp.data;
      }
    )
  }

}
