import { Component } from '@angular/core';
import { Otp } from '../../model/VerifyOtp';
import { OtpService } from '../../Service/otp.service';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

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
        // this.toastr.error('otpid is not valid', 'Error!');
        alert('otpid is not valid');
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
          console.log('dewdew', resp);
          alert(resp.message);
          // this.toastr.success(resp.message);
        } else {
          // this.toastr.error(resp.message, 'Error!');
          alert(`resp.message${Error!}`);
        }
      },
      (error: any) => {
        console.error('Error fetching data:', error);
        // this.toastr.error(error.message);
      }
    );
  }
}
