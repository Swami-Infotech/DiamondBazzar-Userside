import { Component } from '@angular/core';
import { Shap, Size, TextSize } from '../../modal/polishpost';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../../Footer/View/footer/footer.component';
@Component({
  selector: 'app-polishpost',
  standalone: true,
  imports: [CommonModule, FormsModule,NavComponent,FooterComponent],
  templateUrl: './polishpost.component.html',
  styleUrl: './polishpost.component.css'
})
export class PolishpostComponent {

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
