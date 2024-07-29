import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../Footer/View/footer/footer.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FormsModule,NavComponent,FooterComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  mainProductImage: string = '../../../../assets/Img/slider/product1.png';
  subImages: string[] = [
    '../../../../assets/Img/slider/product2.png',
    '../../../../assets/Img/slider/product3.png',
    '../../../../assets/Img/slider/product4.png'
  ];

  changeProductImage(newSrc: string) {
    this.mainProductImage = newSrc;
  }}
