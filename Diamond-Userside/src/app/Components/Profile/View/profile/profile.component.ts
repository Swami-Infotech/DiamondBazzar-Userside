import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Router, RouterLink } from '@angular/router';
import { profileModel } from '../../model/Profile';
import { ProfileService } from '../../service/profile.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink], 
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile = new profileModel();
  BusinessListData: any[] = [];

  constructor(
    private service: ProfileService,
    private router: Router,
    // private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.BusinessData();
    const userID = parseInt(sessionStorage.getItem('userID') || '0', 10);
    this.userProfile.userID=userID

  }
  
  BusinessData(): void {
    this.service.BusinessCategoryList().subscribe(
      (data: any) => {
        // console.log(data);
        this.BusinessListData = data.data;
      },
      (error: any) => {
        console.error('Error fetching business categories', error);
      }
    );
  }
  
  onCategoryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.userProfile.businessCategoryID =  Number(selectedValue);
  }
  onMainCategoryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.userProfile.mainCategory =  Number(selectedValue);
  }
  onSubCategoryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.userProfile.subCategory =  Number(selectedValue);
  }

 onFileSelectedProfile(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const base64String = e.target.result.split(',')[1]; 
      this.userProfile.profilePhoto = base64String;
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
        this.userProfile.companyLogo=base64String
      };
      reader.readAsDataURL(file);
    }
  }

  OnChangeDataAdd(): void {
    this.service.AddCompanyProfile(this.userProfile).subscribe(
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
        console.error('Error fetching data:', error);
        // this.toastr.error(error.message);
      }
    );
  }
}
