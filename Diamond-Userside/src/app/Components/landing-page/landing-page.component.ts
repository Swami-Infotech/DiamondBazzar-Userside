import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CarouselModule,FormsModule,CommonModule,RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {


  constructor(private route:ActivatedRoute,private router: Router){}


  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      760: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }


  // loginpage(){
  //   this.router.navigate(['/login']);
  // }

  goToLogin() {
    this.router.navigate(['/login']);
  }
  
}
