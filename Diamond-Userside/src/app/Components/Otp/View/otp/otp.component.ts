import { Component } from '@angular/core';
import { Otp } from '../../model/VerifyOtp';
import { OtpService } from '../../Service/otp.service';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css',
})
export class OtpComponent {
  Otp = new Otp();
  isOtpValid: boolean = false;
  otp: string = '';
  correctOtp: string = '';

  constructor(
    private service: OtpService,
    private router: Router,
    private route:Router
    // private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // Implement any initialization logic if needed
  }

  checkOtp(): void {
    this.isOtpValid = this.otp === this.correctOtp;
  }

  OnOtp() {
    const otpid = sessionStorage.getItem('authID');
    if (otpid !== null) {
      const numericOtpid = Number(otpid);
  
      if (!isNaN(numericOtpid)) {
        this.Otp.otpid = numericOtpid;
      } else {
        alert('otpid is not valid');
        console.error('otpid is not a valid number');
        return;
      }
    } else {
      console.error('otpid is null');
    }
  
    this.service.VerifyOtp(this.Otp).subscribe(
      (response: any) => {
        if (response.status === true) {  
          sessionStorage.setItem('userid', "30");
          sessionStorage.setItem('token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwMGVlYmU0Yi1kNDY2LTRiYjEtYmVhNy1lYjBmYzNjZjcxN2UiLCJVc2VySUQiOiIzMCIsImV4cCI6MTc2MDAxNjc2NywiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA1MSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.41zVPGxkOFTatlyxGPGTY2Ec6PeACj2xWXs-Nl97mFc");
          const userid = 30;
          if (response.isSignup) {
            this.route.navigate(['/signup']);
          } else {
            this.route.navigate(['/home',userid]);
          }
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
            title: 'Error!',
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
        console.error('Error fetching data:', error);
      }
    );
  }
  
}
