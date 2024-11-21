import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
import { Forget } from '../../modal/forgetpass';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ForgetpassService } from '../../service/forgetpass.service';
import { ToastrNotificationService } from '../../../Common/toastr-notification.service';;
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpass',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './forgetpass.component.html',
  styleUrl: './forgetpass.component.css'
})
export class ForgetpassComponent implements OnInit {

  pass = new Forget();

  ngOnInit(): void {
    
  }

  constructor(private service:ForgetpassService,private toast:ToastrNotificationService,private router: Router){}

  forgetpass(){
    this.pass.otpType = 0
    this.service.forgate(this.pass).subscribe(
      (resp:any)=>{
        if(resp.status == true){
          this.toast.showSuccess(resp.message);
          this.router.navigate(['/otp']);
          sessionStorage.setItem('otpID',resp.data.authOTPID)
        } else{
          this.toast.showError(resp.message);
        }
       
      }
    )
  }



}
