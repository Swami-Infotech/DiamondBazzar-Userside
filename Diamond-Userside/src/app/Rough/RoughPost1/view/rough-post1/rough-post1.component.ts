import { Component } from '@angular/core';
import { Color } from '../../model/Rough';

@Component({
  selector: 'app-rough-post1',
  templateUrl: './rough-post1.component.html',
  styleUrls: ['./rough-post1.component.css']
})
export class RoughPost1Component {

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
