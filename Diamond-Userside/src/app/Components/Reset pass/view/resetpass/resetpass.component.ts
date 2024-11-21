import { Component, OnInit } from '@angular/core';
import { Resetpass } from '../../model/resetpass';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ResetpassService } from '../../service/resetpass.service';
import { log } from 'console';
import { ToastrNotificationService } from '../../../Common/toastr-notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpass',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './resetpass.component.html',
  styleUrl: './resetpass.component.css'
})
export class ResetpassComponent implements OnInit {

  newpass = new Resetpass();
  isPasswordVisible: boolean = false;
  confirmPassword:string = '';
  isConfirmPasswordVisible :boolean = false

  ngOnInit(): void {
    
  }

  constructor(private service:ResetpassService,private toast:ToastrNotificationService,private router:Router){}


  reset(){
    if(this.newpass.password !== this.confirmPassword){
      this.toast.showError('password not match');
      return;
      
    }
    this.service.newpass(this.newpass).subscribe(
      (resp:any)=>{
        if(resp.status === true){
          this.router.navigate(['/login'])
          this.toast.showSuccess(resp.message)
        } else{
          this.toast.showError(resp.message)
        }
      }
    )
  }


  togglePassword(){
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  toggleConfirmPasswordVisibility(){
    this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
  }



}
