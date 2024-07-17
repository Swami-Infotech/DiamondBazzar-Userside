import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Service/login.service';
import { User } from '../../Model/Login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();

  constructor(private service:LoginService, private route: Router){}

  ngOnInit(): void {

  }

  OnLogin(){
    this.service.SendData(this.user).subscribe(
      (resp:any) => {
        if(resp.status !== true){
          alert('Requested phone number does not exist. Please sign up.');
        } else{
          // sessionStorage.setItem('token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlZjFkYzIwOS02ZGEwLTQyMDYtODFiNi1mNzQ5NjE2ZDYwMmYiLCJVc2VySUQiOiIxIiwiZXhwIjoxNzUyNjU2MjQ4LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDUxIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo0MjAwIn0.apHnQOyot6BoAUnjzk2wv5bHbxbMCkqG9xJZkF-ViTs");
          console.log("logindata>>",resp.data.otp);
          this.route.navigate(['/otp']);
          sessionStorage.setItem('id',resp.data.otp)
          sessionStorage.setItem('authID',resp.data.authOTPID)


        }
    })
  }

}
