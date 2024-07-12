import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  mainProductImage: string = '../../../../assets/Img/slider/product1.png';
  subImages: string[] = [
    '../../../../assets/Img/slider/product2.png',
    '../../../../assets/Img/slider/product3.png',
    '../../../../assets/Img/slider/product4.png'
  ];

  changeProductImage(newSrc: string) {
    this.mainProductImage = newSrc;
  }
}
