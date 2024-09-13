import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AddSupportModel, diamondCategory, diamondSubCategory, PostTypeSelection } from '../../Model/Nav';
import { NavService } from '../../Service/nav.service';
import Swal from 'sweetalert2';
import { response } from 'express';
import { HomeService } from '../../../Home/service/home.service';
import { log } from 'node:console';
import { DataService } from '../../../data.service';
declare var $: any;

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, TranslateModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  SupportData = new AddSupportModel();
  SupportTypesData: any[] = [];
  SubscriptionData: any = {}; 
  noti:any[] = [];
  notification:any;
  metadata:any[] = []



  diamondCategory = diamondCategory;
  diamondSubCategory = diamondSubCategory;
  posttype = PostTypeSelection

  selectedMainDiamondType: diamondCategory | null = null;
  selectedSubDiamondType: diamondSubCategory | null = null;
  selectposttype : PostTypeSelection | null = null


  mainDiamondTypes = [
    { value: diamondCategory.Natural, name: 'Natural' },
    { value: diamondCategory.LabGrown, name: 'Lab Grown' },
  ];




  subDiamondTypes: { value: diamondSubCategory, name: string }[] = [];



  userid!:number;
  id: any;

  showModal: boolean = false;
  
  constructor(
    public translate: TranslateService,
    private service: NavService,
    private route: Router,
    private router: Router,
    private services:HomeService,
    private renderer:Renderer2,
    private dataservice:DataService
    
  ) {}

  ngOnInit(): void {
    const userID = parseInt(sessionStorage.getItem('userID') || '0', 10);
    this.SupportData.userID = userID;
    this.SupportTypes();
   this. Subscription(userID);
   this.getallnoti(userID);
   this.getID();

  }


  onMainDiamondTypeChange(selectedMainDiamondType: diamondCategory) {
    this.selectedMainDiamondType = selectedMainDiamondType;
    
    if (selectedMainDiamondType === diamondCategory.Natural) {
      this.subDiamondTypes = [
        { value: diamondSubCategory.Rough, name: 'Rough' },
        { value: diamondSubCategory.Polish, name: 'Polish' },
      ];
    } else if (selectedMainDiamondType === diamondCategory.LabGrown) {
      this.subDiamondTypes = [
        { value: diamondSubCategory.Rough, name: 'Rough' },
        { value: diamondSubCategory.Polish, name: 'Polish' },
      ];
    }
  
    this.showModal = true;
  }

  onPostTypeSelection(postType: number) {
    this.selectposttype = postType;
    // this.fetchCategories();
  }
  
  fetchCategories(selectedSubDiamondType: diamondSubCategory) {
    const postType = this.selectposttype !== null ? this.selectposttype : PostTypeSelection.Post;

    this.selectedSubDiamondType = selectedSubDiamondType;

  
    if (this.selectedMainDiamondType !== null && selectedSubDiamondType !== null) {
      this.service.getcategoriesforpost(this.selectedMainDiamondType, selectedSubDiamondType, postType).subscribe(
        (response: any) => {
          if (response.status === true) {
            // console.log("category",response.data);

            this.metadata = response.data;

            console.log("meata",response.data);

            this.dataservice.setData(this.metadata);

            
            
            this.showModal = false;
            this.removebackdrop();
            this.enableScrolling();
  
            setTimeout(() => {
              if (this.selectedSubDiamondType === diamondSubCategory.Polish) {
                this.router.navigate(['/polishpost']);
              } else if (this.selectedSubDiamondType === diamondSubCategory.Rough) {
                this.router.navigate(['/RoughPost']);
              }
            }, 300); ;
          } else {
            console.error('API response status is not true');
          }
        },
        error => {
          console.error('API call error:', error);
        }
      );
    } else {
      console.error('Missing main or sub diamond type');
    }
  }
  

  removebackdrop() {
    const backdrops = document.getElementsByClassName('modal-backdrop');
    Array.from(backdrops).forEach((backdrop) => {
      if (backdrop && backdrop.parentNode === document.body) {
        document.body.removeChild(backdrop);  
      }
    });
  }

  enableScrolling(){
    document.body.style.overflow = '';
    document.body.classList.remove('modal-open')
  }

  closeModal() {
    this.showModal = false;
  }




  getLanguages(): { code: string, name: string }[] {
    return [
      { code: 'en', name: 'English' },
      { code: 'gu', name: 'ગુજરાતી' }
    ];
  }

  onLanguageChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const lang = target.value;
    this.translate.use(lang);
  }

  SupportTypes(): void {
    this.service.GetAllSupportTypes().subscribe(
      (data: any) => {
        console.log(data);
        this.SupportTypesData = data.data;
      },
      (error: any) => {
        console.error('Error fetching business categories', error);
      }
    );
  }

  getID() {
    if (typeof sessionStorage !== 'undefined') {
      this.id = sessionStorage.getItem("userid");
      this.userid = parseInt(this.id);

    } else {

    }



  }


  
  Subscription(id: number): void {
    this.service.UserSubscription(id).subscribe(
      (data: any) => {
        console.log(data);
        this.SubscriptionData = data.data;
      },
      (error: any) => {
        console.error('Error fetching business categories', error);
      }
    );
  }
  getPaymentMethod(paymentMode: number): string {
    switch (paymentMode) {
      case 1:
        return 'Online';
      case 2:
        return 'Offline';
      default:
        return 'Unknown';
    }
  }
  
  onCategoryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.SupportData.supportTypeID = Number(selectedValue);
  }

  OnChangeDataAdd(): void {
    this.service.AddSupport(this.SupportData).subscribe(
      (response: any) => {
        if (response.status === true) {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: response.message,
            confirmButtonText: 'OK',
            customClass: {
                confirmButton: 'btn btn-success'
            },
            buttonsStyling: false
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'error!',
            text: response.message,
            confirmButtonText: 'OK',
            customClass: {
                confirmButton: 'btn btn-danger'
            },
            buttonsStyling: false
          });
         
         window.location.reload()
        }
      },
      (error: any) => {
        console.error('Error AddSupport data:', error);
        // this.toastr.error(error.message);  // Display error message
      }
    );
  }

  resetForm(): void {
    this.SupportData = new AddSupportModel();  // Reset form data
    const userID = parseInt(sessionStorage.getItem('userID') || '0', 10);
    this.SupportData.userID = userID;
  }

  onFileSelectedLogo(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const base64String = e.target.result.split(',')[1];
        this.SupportData.attachement = base64String;
      };
      reader.readAsDataURL(file);
    }
  }

  getallnoti(id:number) :void {
    this.service.getallnotification(id).subscribe(
      (data:any)=>{
        this.noti = data.data;
        this.notification  = this.noti
        console.log(this.noti);
      }
    )
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']).then(()=>{
      $("ajax-loading").hide();
    })
  }

  dolar:any
  getdashboard(id:any){
    sessionStorage.getItem('userID');
    this.services.getwebdashboard(id).subscribe(
      (resp:any)=>{
        this.dolar = resp.data.dollar
        
      }
    )
  }
}
