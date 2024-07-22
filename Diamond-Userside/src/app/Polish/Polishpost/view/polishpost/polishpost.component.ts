import { Component, OnInit } from '@angular/core';
import { Shap, Size, TextSize } from '../../modal/polishpost';


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
      imageUrl: '../../../../assets/Img/polish/jewel.png',
      isActive: false
    },
    {
      Name: 'Pear',
      imageUrl: '../../../../assets/Img/polish/pear.png',
      isActive: false
    },
    {
      Name: 'Ovel',
      imageUrl: '../../../../assets/Img/polish/Ovel.png',
      isActive: false
    },
    {
      Name: 'Marquies',
      imageUrl: '../../../../assets/Img/polish/marquies.png',
      isActive: false
    },
    {
      Name: 'Round',
      imageUrl: '../../../../assets/Img/polish/jewel.png',
      isActive: false
    },
    {
      Name: 'Pear',
      imageUrl: '../../../../assets/Img/polish/pear.png',
      isActive: false
    },
    {
      Name: 'Round',
      imageUrl: '../../../../assets/Img/polish/jewel.png',
      isActive: false
    },
    {
      Name: 'Pear',
      imageUrl: '../../../../assets/Img/polish/pear.png',
      isActive: false
    },
    {
      Name: 'Ovel',
      imageUrl: '../../../../assets/Img/polish/Ovel.png',
      isActive: false
    },
    {
      Name: 'Marquies',
      imageUrl: '../../../../assets/Img/polish/marquies.png',
      isActive: false
    },
    {
      Name: 'Round',
      imageUrl: '../../../../assets/Img/polish/jewel.png',
      isActive: false
    },
    {
      Name: 'Pear',
      imageUrl: '../../../../assets/Img/polish/pear.png',
      isActive: false
    },
    
  ]




  numbers:Size [] = [
    {
      Number: -2,
       color:'E',
       cla:'FL',
        Colors:'Red',
        facny:'Faint',
        isActive: false

    },
    {
      Number: +2,
       color:'E',
       cla:'IF',
        Colors:'White',
         facny:'Light',
          isActive: false
    },
    {
      Number: +6.5,
       color:'E',
       cla:'VVS1',
        Colors:'Maroon',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'SkyBlue',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'Orange',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'Pink',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'Naviblue',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'Gray',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'Green',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'OffWhite',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'black',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'black',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'black',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'black',
         facny:'Faint',
          isActive: false
    }, {
      Number: -2,
       color:'E',
       cla:'FL',
        Colors:'Red',
        facny:'Faint',
        isActive: false

    },
    {
      Number: +2,
       color:'E',
       cla:'IF',
        Colors:'White',
         facny:'Light',
          isActive: false
    },
    {
      Number: +6.5,
       color:'E',
       cla:'VVS1',
        Colors:'Maroon',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'SkyBlue',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'Orange',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'Pink',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'Naviblue',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'Gray',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'Green',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'OffWhite',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'black',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'black',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'black',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       color:'E',
       cla:'+11',
        Colors:'black',
         facny:'Faint',
          isActive: false
    }
  ]

  selectChip(selectedChip: any) {
    this.numbers.forEach(chip => chip.isActive = false);
    selectedChip.isActive = true;
}

onScroll(event: WheelEvent) {
  const container = event.currentTarget as HTMLElement;
  container.scrollLeft += event.deltaY;
  event.preventDefault(); // Prevent the default vertical scroll
}

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



 
  

}