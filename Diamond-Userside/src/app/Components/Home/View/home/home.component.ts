import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavComponent } from '../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../Footer/View/footer/footer.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HomeService } from '../../service/home.service';
import { environment } from '../../../../environments/environment';
import { response } from 'express';
import { log } from 'console';
import { DiamondCategory, Post, PostTypeSelection, SubDiamondType } from '../../Model/home';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, NavComponent, FooterComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgurl = environment.imgURL;
  posts: any[] = [];

  MDtype = DiamondCategory;
  SuuDtype = SubDiamondType;
  Posttypes = PostTypeSelection;

  public pageNumber: number = 0;
  public pageSize: number = 10; // Define the page size
  public totalItems: number = 0;

  mainDiamondTypes: { name: string, value: DiamondCategory }[] = [];
  subDiamondTypes: { name: string, value: SubDiamondType }[] = [];
  postTypeSelections: { name: string, value: PostTypeSelection }[] = [];

  selectedCategory: DiamondCategory = DiamondCategory.LabGrown;
  selectedCategorys: DiamondCategory = DiamondCategory.Natural;


  selectedSubCategory: SubDiamondType = SubDiamondType.Polish;
  selectedSubCategorys: SubDiamondType = SubDiamondType.Rough;
  selectedposttype : PostTypeSelection = PostTypeSelection.Post;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['userid'];
      if (id) {
        this.getdashboard(id);
      } else {
        console.error("No userID found");
      }
    });


 
  

    this.mainDiamondTypes = this.enumToArray(this.MDtype);
    this.subDiamondTypes = this.enumToArray(this.SuuDtype);
    this.postTypeSelections = this.enumToArray(this.Posttypes);
  }




  


  enumToArray(enumObj: any): { name: string, value: any }[] {
    return Object.keys(enumObj)
      .filter(key => isNaN(Number(key)))  
      .map(key => ({ name: key, value: enumObj[key] }));
  }

  constructor(private dataservice:DataService,private service:HomeService,private route:ActivatedRoute,private translate: TranslateService,private router: Router) {}

  slider:any;
  dolar:any;
  line:any;
  labgrown:any;
  labgrownrough:any;
  nautral:any;
  naturlrough:any

  getdashboard(id:any){
    sessionStorage.getItem('userid');
    this.service.getwebdashboard(id).subscribe(
      (resp:any)=>{
        this.slider = resp.data.sliderData;
        this.dolar = resp.data;
        this.line = this.translate.instant('Home.LINE',{value:resp.data.headlineData});
        this.labgrown = resp.data.labgrownPolish;
        this.labgrownrough = resp.data.labgrownRough;
        this.nautral = resp.data.naturalPolish;
        this.naturlrough = resp.data.naturalRough;
        
       
        
      }
    )
  }

  viewpostdetails(id: any): void {
    sessionStorage.setItem('postID', id);
    this.router.navigate(['/Productdetils', id]);
  }


  mainss:any[] = [];
  attch:any[] = [];

  seeAllPosts(sectionId: number) {

    var postType : PostTypeSelection;
    var mainCategory : DiamondCategory;
    var subCategory : SubDiamondType;


    // Initialize enums based on sectionId
    switch (sectionId) {
      case 0:
        // Lab Grown Polish
        postType = PostTypeSelection.Post;
        mainCategory = DiamondCategory.LabGrown;
        subCategory = SubDiamondType.Polish;
        console.log('Lab Grown Polish');
        break;
      case 1:
        // Lab Grown Rough
        postType = PostTypeSelection.Post;
        mainCategory = DiamondCategory.LabGrown;
        subCategory = SubDiamondType.Rough;
        console.log('Lab Grown Rough');
        break;
      case 2:
        // Natural Polish
        postType = PostTypeSelection.Post;
        mainCategory = DiamondCategory.Natural;
        subCategory = SubDiamondType.Polish;
        console.log('Natural Polish');
        break;
      case 3:
        // Natural Rough
        postType = PostTypeSelection.Post;
        mainCategory = DiamondCategory.Natural;
        subCategory = SubDiamondType.Rough;
        console.log('Natural Rough');
        break;
      default:
        console.log('Unknown section');
        return; // Exit if section ID is unknown
    }

    // Verify that the enums are not undefined
    if (postType === undefined || mainCategory === undefined || subCategory === undefined) {
      console.error('Enum values are undefined');
      return;
    }

    // Prepare the request body
    const postdata = {
      postType: postType, 
      mainCategory: mainCategory, 
      subCategory: subCategory, 
      pageNumber: this.pageNumber,
      pageSize: this.pageSize
    };

    this.service.getpostby(postdata).subscribe(
      (resp: any) => {
        this.mainss = resp.data;
        this.totalItems = resp.data.total;
         this.dataservice.setData(this.mainss);
         this.router.navigate(['/products']);
        console.log("mainss>>",this.mainss);
        
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
    
  }


 
}
