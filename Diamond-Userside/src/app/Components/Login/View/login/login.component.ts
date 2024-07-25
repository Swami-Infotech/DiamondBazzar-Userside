import { Component } from '@angular/core';
import { LoginService } from '../../Service/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../Model/Login';
// import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = new User();

  constructor(
    private service: LoginService, 
    private router: Router, 
    // private toastr: ToastrService
  ) {}

  OnLogin() {
    this.service.LoginData(this.user).subscribe(
      (resp: any) => {
        if (resp.status !== true) {
          // this.toastr.error(resp.message);
        } else {
          console.log("logindata>>", resp.data.otp);
          this.router.navigate(['/otp']);
          sessionStorage.setItem('id', resp.data.otp);
          sessionStorage.setItem('authID', resp.data.authOTPID);
          // this.toastr.success(resp.message);
        }
      },
      (error: any) => {
        // this.toastr.error(error.message);
      }
    );
  }

}

