import { Component } from '@angular/core';
import { Color } from '../../model/Rough';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../../Footer/View/footer/footer.component';
@Component({
  selector: 'app-roughpost1',
  standalone: true,
  imports: [CommonModule, FormsModule,NavComponent,FooterComponent],
  templateUrl: './roughpost1.component.html',
  styleUrl: './roughpost1.component.css'
})
export class Roughpost1Component {

 onScroll(event: WheelEvent) {
    const container = event.currentTarget as HTMLElement;
    container.scrollLeft += event.deltaY;
    event.preventDefault(); // Prevent the default vertical scroll
  }

  selectChip(selectedChip: any) {
    this.types.forEach(chip => chip.isActive = false);
    selectedChip.isActive = true;
}

selectedButtons: string | null = null;

selectButtons(buttons: string){
this.selectedButtons = buttons
}

types:Color[] = [
  {
    Name:'black',
    isActive:false,
     facny:'Faint',
  },
  {
    Name:'black',
    isActive:false,
     facny:'Faint',
  }, 
  {
    Name:'black',
    isActive:false,
     facny:'Faint',
  },
  {
    Name:'black',
    isActive:false,
     facny:'Faint',
  },{
    Name:'black',
    isActive:false,
     facny:'Faint',
  },
  {
    Name:'black',
    isActive:false,
     facny:'Faint',
  },
  {
    Name:'black',
    isActive:false,
     facny:'Faint',
  },
  {
    Name:'black',
    isActive:false,
     facny:'Faint',
  },
  {
    Name:'black',
    isActive:false,
     facny:'Faint',
  },
  {
    Name:'black',
    isActive:false,
     facny:'Faint',
  },
  {
    Name:'black',
    isActive:false,
     facny:'Faint',
  },
  {
    Name:'black',
    isActive:false,
     facny:'Faint',
  },
  {
    Name:'black',
    isActive:false,
     facny:'Faint',
  },
  {
    Name:'black',
    isActive:false,
     facny:'Faint',
  },
  {
    Name:'black',
    isActive:false,
     facny:'Faint',
  },
  {
    Name:'black',
    isActive:false,
     facny:'Faint',
  },
  {
    Name:'black',
    isActive:false,
     facny:'Faint',
  },
  {
    Name:'black',
    isActive:false,
     facny:'Faint',
  },
  {
    Name:'black',
    isActive:false,
     facny:'Faint',
  },
  {
    Name:'black',
    isActive:false,
     facny:'Faint',
  },
  {
    Name:'black',
    isActive:false,
     facny:'Faint',
  },
  {
    Name:'black',
    isActive:false,
     facny:'Faint',
  },
  {
    Name:'black',
    isActive:false,
     facny:'Faint',
  },

]
}

