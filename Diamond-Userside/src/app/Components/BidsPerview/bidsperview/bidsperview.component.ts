import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NavComponent } from "../../Nav/view/nav/nav.component";
import { FooterComponent } from "../../Footer/View/footer/footer.component";
// import { Router } from 'express';
declare var bootstrap: any;

@Component({
  selector: 'app-bidsperview',
  standalone: true,
  imports: [RouterLink, NavComponent, FooterComponent],
  templateUrl: './bidsperview.component.html',
  styleUrl: './bidsperview.component.css'
})
export class BidsperviewComponent implements OnInit {
  

  ngOnInit(): void {

  }


  constructor(private renderer: Renderer2, private el: ElementRef,private router:Router){}


  openmodalss(){
    this.openModel();
  }


  openModel(){
    const modalElement = document.getElementById('timeSlotModal');
    if(modalElement){
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

    this.router.navigate(['/bidrank']);
  }





}
