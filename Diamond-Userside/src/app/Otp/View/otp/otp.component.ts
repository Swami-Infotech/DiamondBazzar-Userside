import { Component, OnInit } from '@angular/core';
import { OtpService } from '../../service/otp.service';
import { Router } from '@angular/router';
import { Otp } from '../../model/VerifyOtp';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent implements OnInit {
  Otp = new Otp();
  isOtpValid: boolean = false;
  otp: string = '';
  correctOtp: string = '';

  constructor(private service: OtpService, private router: Router) {}

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
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'otpid is not valid',
          confirmButtonText: 'OK',
          customClass: {
            confirmButton: 'btn btn-danger',
          },
          buttonsStyling: false,
        });
        console.error('otpid is not a valid number');
        return;
      }
    } else {
      console.error('otpid is null');
    }

    this.service.VerifyOtp(this.Otp).subscribe(
      (resp: any) => {
        if (resp.status === true) {
          this.router.navigate(['/signup']);
          this.ngOnInit();
          console.log('dewdew',resp);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: resp.message,
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'btn btn-danger',
            },
            buttonsStyling: false,
          });
        }
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
