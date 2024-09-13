import { Component } from '@angular/core';
import { Shap } from '../../../Polishpost/modal/polishpost';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-polishshap',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './polishshap.component.html',
  styleUrl: './polishshap.component.css'
})
export class PolishshapComponent {

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


  onScroll(event: WheelEvent) {
    const container = event.currentTarget as HTMLElement;
    container.scrollLeft += event.deltaY;
    event.preventDefault(); // Prevent the default vertical scroll
  }


  selectChip(selectedChip: any) {
    this.shaps.forEach(chip => chip.isActive = false);
    selectedChip.isActive = true;
} 

}
