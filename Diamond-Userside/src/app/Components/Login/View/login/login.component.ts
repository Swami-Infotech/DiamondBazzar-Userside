import { Component } from '@angular/core';
import { LoginService } from '../../Service/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../Model/Login';
// import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

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
          console.log("logindata>>", response.data.otp);
          this.router.navigate(['/otp']);
          sessionStorage.setItem('id', response.data.otp);
          sessionStorage.setItem('authID', response.data.authOTPID);
          sessionStorage.setItem('Number',response.data.phoneNumber);
         

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
        // this.toastr.error(error.message);
      }
    );
  }

}

