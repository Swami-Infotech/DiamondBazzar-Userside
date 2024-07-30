import { Component } from '@angular/core';
import { SignupUser } from '../../model/Signup';
import { Router, RouterLink } from '@angular/router';
import { SignUpService } from '../../Service/sign-up.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  user = new SignupUser();

  constructor(
    private service: SignUpService,
    private router: Router,
    // private toastr: ToastrService
  ) {}

  ngOnInit(): void {
  }

  OnLogin() {
    this.service.SingUpApiData(this.user).subscribe(
      (resp: any) => {
        if (resp.status !== true) {
          // this.toastr.error(resp.message);
        } else {
          sessionStorage.setItem('token', resp.data.token);
          console.log('SignUpData>>', resp.data);
          this.router.navigate(['/profile']);
          sessionStorage.setItem('userID', resp.data.userID);
          // this.toastr.success(resp.message);
        }
      },
      (error: any) => {
        console.error('Error fetching data:', error);
        // this.toastr.error(error.message);
      }
    );
  }
}
