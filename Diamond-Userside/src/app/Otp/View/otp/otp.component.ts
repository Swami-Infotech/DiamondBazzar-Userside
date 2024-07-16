import { Component, OnInit } from '@angular/core';
import { OtpService } from '../../service/otp.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  constructor(private service:OtpService) { }



}
