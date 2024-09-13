import { Component } from '@angular/core';
import { size, Size, TextSize } from '../../../Polishpost/modal/polishpost';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-postcolor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './postcolor.component.html',
  styleUrl: './postcolor.component.css'
})
export class PostcolorComponent {




  numberss:size [] = [
    {
      color: 'E',
      isActive: false
    },
    {
      color: 'E',
      isActive: false
    },
    {
      color: 'E',
      isActive: false
    },
    {
      color: 'E',
      isActive: false
    },
    {
      color: 'E',
      isActive: false
    },
    {
      color: 'E',
      isActive: false
    },
    {
      color: 'E',
      isActive: false
    },
    {
      color: 'E',
      isActive: false
    },
    {
      color: 'E',
      isActive: false
    },
    {
      color: 'E',
      isActive: false
    },
    {
      color: 'E',
      isActive: false
    },
    {
      color: 'E',
      isActive: false
    },
    {
      color: 'E',
      isActive: false
    },
    {
      color: 'E',
      isActive: false
    },
    {
      color: 'E',
      isActive: false
    },
    {
      color: 'E',
      isActive: false
    },
    {
      color: 'E',
      isActive: false
    },
  ];


  numbers:Size [] = [
    {
      Number: -2,
       cla:'FL',
        Colors:'Red',
        facny:'Faint',
        isActive: false

    },
    {
      Number: +2,
       cla:'IF',
        Colors:'White',
         facny:'Light',
          isActive: false
    },
    {
      Number: +6.5,
       cla:'VVS1',
        Colors:'Maroon',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       cla:'+11',
        Colors:'SkyBlue',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       cla:'+11',
        Colors:'Orange',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       cla:'+11',
        Colors:'Pink',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       cla:'+11',
        Colors:'Naviblue',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       cla:'+11',
        Colors:'Gray',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       cla:'+11',
        Colors:'Green',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       cla:'+11',
        Colors:'OffWhite',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       cla:'+11',
        Colors:'black',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       cla:'+11',
        Colors:'black',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       cla:'+11',
        Colors:'black',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       cla:'+11',
        Colors:'black',
         facny:'Faint',
          isActive: false
    }, {
      Number: -2,
       cla:'FL',
        Colors:'Red',
        facny:'Faint',
        isActive: false

    },
    {
      Number: +2,
       cla:'IF',
        Colors:'White',
         facny:'Light',
          isActive: false
    },
    {
      Number: +6.5,
       cla:'VVS1',
        Colors:'Maroon',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       cla:'+11',
        Colors:'SkyBlue',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       cla:'+11',
        Colors:'Orange',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       cla:'+11',
        Colors:'Pink',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       cla:'+11',
        Colors:'Naviblue',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       cla:'+11',
        Colors:'Gray',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       cla:'+11',
        Colors:'Green',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       cla:'+11',
        Colors:'OffWhite',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       cla:'+11',
        Colors:'black',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       cla:'+11',
        Colors:'black',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       cla:'+11',
        Colors:'black',
         facny:'Light',
          isActive: false
    },
    {
      Number: +11,
       cla:'+11',
        Colors:'black',
         facny:'Faint',
          isActive: false
    }
  ];

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


  selectChip(chip: any) {
    this.numberss.forEach(chip => chip.isActive = false); 
    chip.isActive = true; 
  }

onScroll(event: WheelEvent) {
  const container = event.currentTarget as HTMLElement;
  container.scrollLeft += event.deltaY;
  event.preventDefault(); 
}

}
