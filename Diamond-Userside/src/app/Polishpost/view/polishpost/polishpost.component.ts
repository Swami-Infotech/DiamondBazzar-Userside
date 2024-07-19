import { Component, OnInit } from '@angular/core';
import { Shap, Size, TextSize } from '../../modal/polishpost';
import { OwlOptions } from 'ngx-owl-carousel-o';


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
      Number: -2,
       color:'E',
       cla:'FL',
        Colors:'Red',
        facny:'Faint'

    },
    {
      Number: +2,
       color:'E',
       cla:'IF',
        Colors:'White',
         facny:'Light'
    },
    {
      Number: +6.5,
       color:'E',
       cla:'VVS1',
        Colors:'Maroon',
         facny:'Light'
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'SkyBlue',
         facny:'Light'
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'Orange',
         facny:'Light'
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'Pink',
         facny:'Light'
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'Naviblue',
         facny:'Light'
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'Gray',
         facny:'Light'
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'Green',
         facny:'Light'
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'OffWhite',
         facny:'Light'
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'black',
         facny:'Light'
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'black',
         facny:'Light'
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'black',
         facny:'Light'
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'black',
         facny:'Faint'
    }
  ]

  textsizes:TextSize[] = [
    {
      name: '7GR',
      Colors:'Offgreen'
    },
    {
      name :'8GR',
      Colors:'Black'
    },
    {
      name :'2-3CT',
      Colors:'Blue'
    },
    {
      name :'4-8CT',
      Colors:'Brown'
    },
    {
      name :'5-6',
      Colors:'Yellow'
    }
  ]

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
        items: 2
      },
      400: {
        items: 3
      },
      760: {
        items: 5
      },
      1000: {
        items: 6
      }
    },
    nav: false
  }
  

}
