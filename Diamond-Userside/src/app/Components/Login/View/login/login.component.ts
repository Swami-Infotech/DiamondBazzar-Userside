import { Component } from '@angular/core';
import { LoginService } from '../../Service/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../Model/Login';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { ToastrNotificationService } from '../../../Common/toastr-notification.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink,ToastrModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = new User();

  constructor(
    private service: LoginService, 
    private router: Router, 
    private toastr: ToastrNotificationService
  ) {}

  OnLogin() {
   
    this.service.LoginData(this.user).subscribe(
      (response: any) => {
        if (response.status !== true) {
         this.toastr.showError(response.message)
        } else {
          console.log("logindata>>", response.data.otp);
          sessionStorage.setItem('userid',response.data.userID);
          sessionStorage.setItem('token',response.data.token);
          const userid = response.data.userID;
          this.router.navigate(['/home',userid]);
         

          this.toastr.showSuccess('response.message')
        }
      },
      (error: any) => {
        this.toastr.showError(error.message);
      }
    );
  }

}

