import { Component, OnInit } from '@angular/core';
import { Shap, Size, TextSize } from '../../modal/polishpost';
import { CdkDragStart } from '@angular/cdk/drag-drop';
import { SwiperOptions } from 'swiper';


@Component({
  selector: 'app-polishpost',
  templateUrl: './polishpost.component.html',
  styleUrls: ['./polishpost.component.css']
})
export class PolishpostComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  shaps:Shap[] = [
    {
      Name: 'Round',
      imageUrl: '../../../../assets/Img/polish/jewel.png'
    },
    {
      Name: 'Pear',
      imageUrl: '../../../../assets/Img/polish/pear.png'
    },
    {
      Name: 'Ovel',
      imageUrl: '../../../../assets/Img/polish/Ovel.png'
    },
    {
      Name: 'Marquies',
      imageUrl: '../../../../assets/Img/polish/marquies.png'
    },
    {
      Name: 'Round',
      imageUrl: '../../../../assets/Img/polish/jewel.png'
    },
    {
      Name: 'Pear',
      imageUrl: '../../../../assets/Img/polish/pear.png'
    },
    
  ]




  numbers:Size [] = [
    {
      Number: -2
    },
    {
      Number: +2
    },
    {
      Number: +6.5
    },
    {
      Number: +11
    },
    {
      Number: +11
    },
    {
      Number: +11
    },
    {
      Number: +11
    },
    {
      Number: +11
    },
    {
      Number: +11
    },
    {
      Number: +11
    },
    {
      Number: +11
    },
    {
      Number: +11
    },
    {
      Number: +11
    },
    {
      Number: +11
    }
  ]

  textsizes:TextSize[] = [
    {
      name: '7GR'
    },
    {
      name :'8GR'
    },
    {
      name :'2-3CT'
    },
    {
      name :'4-8CT'
    },
    {
      name :'5-6'
    }
  ]


  

}
