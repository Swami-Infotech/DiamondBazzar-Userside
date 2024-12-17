import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NavComponent } from "../../../Nav/view/nav/nav.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
// import * as bootstrap from 'bootstrap';


declare var bootstrap: any;


@Component({
  selector: 'app-auctionbid',
  standalone: true,
  imports: [NavComponent,FormsModule,CommonModule,RouterLink],
  templateUrl: './auctionbid.component.html',
  styleUrl: './auctionbid.component.css'
})
export class AuctionbidComponent implements OnInit {

  selectedDate: string | null = null;
  timeSlots: string[] = [];
  selectedTimeSlot: string | null = null;

  inspectionTime: string = '';

 


  ngOnInit(): void {
   
  }

  constructor(private renderer: Renderer2, private el: ElementRef,private router: Router){}

  onDateChange() {
    if (this.selectedDate) {
      this.fetchTimeSlots(this.selectedDate);
    }
  }


  fetchTimeSlots(date: string) {
    this.timeSlots = [
      '09:00 AM - 10:00 AM',
      '10:00 AM - 11:00 AM',
      '11:00 AM - 12:00 PM',
      '02:00 PM - 03:00 PM',
      '03:00 PM - 04:00 PM'
    ];
  }


  onTimeSlotChange() {
    console.log('Selected Time Slot:', this.selectedTimeSlot);
    // if (this.selectedTimeSlot !== '0') {
    //   const modalElement = this.el.nativeElement.querySelector('#timeSlotModal');
    //   if (modalElement) {
    //     const modal = new Modal(modalElement);
    //     modal.show();
    //   }
    // }

    if(this.selectedTimeSlot){
      this.openModal();
    }
  }


  openModal(){
    const modalElement = document.getElementById('timeSlotModal');
    if(modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  onInspectClick(){
    const modalElement = document.getElementById('timeSlotModal');
    if(modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.hide();
    }

    const backdropElement = document.querySelector('.modal-backdrop');
    if(backdropElement){
      backdropElement.classList.remove('fade','show');
      document.body.classList.remove('modal-open');
      backdropElement.remove();
    } 

    this.router.navigate(['/bidspreview']);
  }

}
