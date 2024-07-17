import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Service/login.service';
import { User } from '../../Model/Login';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();

  constructor(
    private service: LoginService, 
    private router: Router, 
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  OnLogin() {
    this.service.SendData(this.user).subscribe(
      (resp: any) => {
        if (resp.status !== true) {
          this.toastr.error(resp.message);
        } else {
          console.log("logindata>>", resp.data.otp);
          this.router.navigate(['/otp']);
          sessionStorage.setItem('id', resp.data.otp);
          sessionStorage.setItem('authID', resp.data.authOTPID);
          this.toastr.success(resp.message);
        }
      },
      (error: any) => {
        this.toastr.error(error.message);
      }
    );
  }

}
