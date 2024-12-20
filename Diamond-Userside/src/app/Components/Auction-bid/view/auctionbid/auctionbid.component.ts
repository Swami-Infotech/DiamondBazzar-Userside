import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NavComponent } from "../../../Nav/view/nav/nav.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuctionDetailsService } from './auction-details.service';
import { log } from 'console';
import { ToastrNotificationService } from '../../../Common/toastr-notification.service';
// import * as bootstrap from 'bootstrap';


declare var bootstrap: any;


@Component({
  selector: 'app-auctionbid',
  standalone: true,
  imports: [NavComponent, FormsModule,ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './auctionbid.component.html',
  styleUrl: './auctionbid.component.css'
})
export class AuctionbidComponent implements OnInit {

  inspectionTime: string = '';
  timeSlots: Record<string, AuctionTimeSlot[]> = {};



  selectedDate: string | null = null; // Store the selected date
  selectedTimeSlotDisplay: string | null = null; // Store the formatted time range
  selectedTimeSlot: any = null; // Store selected time slot object

  passingID: any;

  ngOnInit(): void {
    this.passingID = Number(this.actiRoute.snapshot.paramMap.get('id'));
    this.getbyID(this.passingID);
  }

  constructor(
    private service: AuctionDetailsService,
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router,
    private toastr: ToastrNotificationService,
    private actiRoute: ActivatedRoute
  ) { }

  // Group auction time slots by date
  groupAuctionTimeSlots(timeSlots: any): Record<string, AuctionTimeSlot[]> {
    const groupedTimeSlots: Record<string, AuctionTimeSlot[]> = {};

    timeSlots.forEach((slot: any) => {
      const date = new Date(slot.fromTime).toISOString().split('T')[0];

      if (!groupedTimeSlots[date]) {
        groupedTimeSlots[date] = [];
      }

      groupedTimeSlots[date].push(slot);
    });

    return groupedTimeSlots;
  }

  // Fetch auction details
  Pagedetails: any;

  getbyID(id: number) {
    const postID = id;
    const userID = Number(sessionStorage.getItem('userid'));
    const language = 0;

    this.service.getAuctionDetails(postID, userID, language).subscribe(
      (resp: any) => {
        console.log("auction details", resp.data);
        this.Pagedetails = resp.data;

        const availableTimeSlots = resp.data.auctionTimeSlotMasters.filter((x: { isBooked: boolean; }) => !x.isBooked);
        this.timeSlots = this.groupAuctionTimeSlots(availableTimeSlots);

      }
    );
  }





  objectKeys(obj: Record<string, any>): string[] {
    return Object.keys(obj);
  }

  onTimeSlotChange(slot: any) {
    console.log('Selected Time Slot:', slot);
    this.selectedTimeSlot = slot; // Store the selected slot
    if (this.selectedTimeSlot) {
      // Convert fromDate to a readable date format
      this.selectedDate = new Date(this.selectedTimeSlot.fromDate).toLocaleDateString();

      // Convert the time to 12-hour format with AM/PM
      const fromTime = new Date(this.selectedTimeSlot.fromTime);
      const toTime = new Date(this.selectedTimeSlot.toTime);

      this.selectedTimeSlotDisplay = this.convertTo12HourFormat(fromTime) + " - " + this.convertTo12HourFormat(toTime);

    }
  }

  convertTo12HourFormat(date: Date): string {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${formattedMinutes} ${ampm}`;
  }



  displayBid = false;



  onInspectClick() {
    const modalElement = document.getElementById('timeSlotModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.hide();
    }

    const backdropElement = document.querySelector('.modal-backdrop');
    if (backdropElement) {
      backdropElement.classList.remove('fade', 'show');
      document.body.classList.remove('modal-open');
      backdropElement.remove();
    }
    const data = {
      "auctionID": this.selectedTimeSlot.auctionID,
      "userID": Number(sessionStorage.getItem('userid')),
      "auctionTimeSlotID": this.selectedTimeSlot.auctionTimeSlotID
    }

    this.service.BookTimeSlot(data).subscribe(
      (resp: any) => {
        console.log(resp.data);
        if (resp.status == true) {
          this.toastr.showSuccess(resp.message);
          this.displayBid = true;
        }
        console.log(resp.message);
      }
    )

  }


  // const data = {
  //   "auctionID": this.selectedTimeSlot.auctionID,
  //   "userID": Number(sessionStorage.getItem('userid')), 
  //   "bidAmount": this.PlacedBid
  //   }



  writtenBid :any;

  bidForm = new FormGroup({
    auctionID: new FormControl('', Validators.required),
    userID: new FormControl(0, Validators.required),
    bidAmount: new FormControl(0,Validators.required)
  })
 
  confirmBid() {


    this.bidForm.patchValue({
      auctionID: this.Pagedetails.auctionMaster.auctionID,
      userID: Number(sessionStorage.getItem('userid')), 
    })
  
    this.service.AddBidOnAuction(this.bidForm.value).subscribe(
      (resp: any) => {
        console.log(resp.data);
        if (resp.status == true) {
          this.toastr.showSuccess(resp.message);  // Toastr success message
          this.writtenBid = 0;  // Reset the bid amount
        } else {
          this.toastr.showError(resp.message);  // Toastr error message
        }
      }
    );
  }

}

interface AuctionTimeSlot {
  auctionTimeSlotID: any;
  auctionID: any;
  fromDate: string | number | Date;
  fromTime: any;
  toTime: any;
  auctionAppointmentStatus: any;
  bookedBy: any;
  isBooked: any;
  createdBy: any;
  createdAt: any;
  updatedBy: any;
  updatedAt: any;
}
