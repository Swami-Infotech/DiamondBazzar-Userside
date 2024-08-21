import { Component } from '@angular/core';
import { SignupUser } from '../../model/Signup';
import { Router, RouterLink } from '@angular/router';
import { SignUpService } from '../../Service/sign-up.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  user = new SignupUser();

  phoneNumber: string = '';

  constructor(
    private service: SignUpService,
    private router: Router,
    // private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const storedPhoneNumber = sessionStorage.getItem('Number');
    if (storedPhoneNumber) {
      this.phoneNumber = storedPhoneNumber; 
      this.user.phoneNumber = storedPhoneNumber; 
      console.log('Phone Number:', this.phoneNumber);
    }
  }

  OnLogin() {
    this.service.SingUpApiData(this.user).subscribe(
      (response: any) => {
        if (response.status !== true) {
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
        } else {
          sessionStorage.setItem('token', response.data.token);
          console.log('SignUpData>>', response.data);
          this.router.navigate(['/profile']);
          // sessionStorage.setItem('userID', response.data.userID);
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
        }
      },
      (error: any) => {
        console.error('Error fetching data:', error);
        // this.toastr.error(error.message);
      }
    );
  }
}
