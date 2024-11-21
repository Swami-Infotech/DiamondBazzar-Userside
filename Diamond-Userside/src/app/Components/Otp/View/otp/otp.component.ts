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
  otpInputs: string[] = ['', '', '', ''];

  constructor(
    private service: OtpService,
    private router: Router
  ) {}

  ngOnInit(): void {

  }

  moveToNext(index: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim();

    if (value && index < this.otpInputs.length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) {
        (nextInput as HTMLInputElement).focus();
      }
    } else if (!value && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) {
        (prevInput as HTMLInputElement).focus();
      }
    }
  }


  OnOtp(): void {
    const enteredOtp = this.otpInputs.join(''); 
    this.Otp.otp = enteredOtp;

    const otpid = sessionStorage.getItem('otpID');
    if (otpid !== null) {
      this.Otp.otpid = Number(otpid);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'OTP ID is missing.',
      });
      return;
    }

    this.service.VerifyOtp(this.Otp).subscribe(
      (response: any) => {
        if (response.status === true) {
          this.router.navigate(['/resetpass']);

          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: response.message,
          });
        } else {
          this.router.navigate(['/home', response.userID]);
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: response.message,
          });
        }
      },
      (error: any) => {
        console.error('Error verifying OTP:', error);
        Swal.fire({
          icon: 'error',
          title: 'Server Error',
          text: 'Unable to verify OTP. Please try again later.',
        });
      }
    );
  }
  
}
