import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../Footer/View/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { MyProfileService } from '../../Service/my-profile.service';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, NavComponent, FooterComponent, TranslateModule],
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  UserProfileData: any = {}; // Initialize the data object
  BusinessListData: any[] = [];
  constructor(
    private service: MyProfileService,
    private router: Router,
    // private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const userID = parseInt(sessionStorage.getItem('userID') || '0', 10);
    this.UserProfileBy(userID); // Corrected method call
    // this.BusinessData()
  }


  onCategoryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.UserProfileData.businessCategoryID =  Number(selectedValue);
  }


  UserProfileBy(id: number): void {
    this.service.UserProfileBy(id).subscribe(
      (data: any) => {
        console.log(data);
        this.UserProfileData = data.data;
      },
      (error: any) => {
        console.error('Error fetching business categories', error);
      }
    );
  }

  OnChangeDataAdd(): void {
    this.service.UpdateUserProfile(this.UserProfileData).subscribe(
      (resp: any) => {
        if (resp.status !== true) {
          // this.toastr.error(resp.message);
        } else {
          console.log('AddCompanyProfile>>', resp.data);
          this.router.navigate(['/home']);
          // this.toastr.success(resp.message);
        }
      },
      (error: any) => {
        console.error('Error updating data:', error);
        // this.toastr.error(error.message);
      }
    );
  }

  onFileSelectedProfile(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        const base64String = e.target.result.split(',')[1]; 
        this.UserProfileData.profilePhoto = base64String;
      };
  
      reader.readAsDataURL(file);
    }
  }

  // BusinessData(): void {
  //   this.service.BusinessCategoryList().subscribe(
  //     (data: any) => {
  //       // console.log(data);
  //       this.BusinessListData = data.data;
  //     },
  //     (error: any) => {
  //       console.error('Error fetching business categories', error);
  //     }
  //   );
  // }
  
    onFileSelectedLogo(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();
  
        reader.onload = (e: any) => {
          const base64String = e.target.result.split(',')[1];
          this.UserProfileData.companyLogo=base64String
        };
        reader.readAsDataURL(file);
      }
    }
}
