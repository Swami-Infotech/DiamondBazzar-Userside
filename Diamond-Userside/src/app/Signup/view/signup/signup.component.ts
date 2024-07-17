import { Component, OnInit } from '@angular/core';
import { SignupUser } from '../../model/Signup';
import { SignupService } from '../../service/signup.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = new SignupUser();

  constructor(private service: SignupService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    // Implement any initialization logic if needed
  }

  OnLogin() {
    this.service.SingUpApiData(this.user).subscribe(
      (resp: any) => {
        if (resp.status !== true) {
          this.toastr.error(resp.message);
        } else {
          sessionStorage.setItem('token', resp.data.token);
          console.log("SignUpData>>", resp.data);
          this.router.navigate(['/home']);
          sessionStorage.setItem('userID', resp.data.userID);
          this.toastr.success(resp.message);
        }
      },
      (error: any) => {
        console.error('Error fetching data:', error);
        this.toastr.error(error.message);
      }
    );
  }

}
