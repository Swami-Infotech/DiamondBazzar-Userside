import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../Footer/View/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { MyProfileService } from '../../Service/my-profile.service';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, NavComponent, FooterComponent, TranslateModule],
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  UserProfileData: any = {}; 
  BusinessListData: any[] = [];
  userdata:any
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
        this.UserProfileData = data.data.companyData;
        this.userdata=data.data.userdata

        console.log("userdata",this.userdata);
      },
      (error: any) => {
        console.error('Error fetching business categories', error);
      }
    );
  }

  OnChangeDataAdd(): void {
    this.UserProfileData.firstName=this.userdata.firstName
    this.UserProfileData.lastName=this.userdata.lastName
    this.UserProfileData.profilePhoto=this.userdata.profilePhoto
    
    this.service.UpdateUserProfile(this.UserProfileData).subscribe(
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
          this.router.navigate(['/home']);
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
        this.userdata.profilePhoto = base64String;
        this.UserProfileData.profilePhoto= this.userdata.profilePhoto
      };
  
      reader.readAsDataURL(file);
    }
  }

 
 
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
