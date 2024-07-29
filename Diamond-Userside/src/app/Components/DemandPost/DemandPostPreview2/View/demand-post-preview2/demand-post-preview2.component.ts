import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../../Footer/View/footer/footer.component';
import { Color } from '../../../../Rough/RoughPost1/model/Rough';
@Component({
  selector: 'app-demand-post-preview2',
  standalone: true,
  imports: [CommonModule, FormsModule,NavComponent,FooterComponent],
  templateUrl: './demand-post-preview2.component.html',
  styleUrl: './demand-post-preview2.component.css'
})
export class DemandPostPreview2Component {

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
    Name:'Fl',
    isActive:false,
     facny:'Faint',
  },
  {
    Name:'IF',
    isActive:false,
     facny:'Faint',
  }, 
  {
    Name:'VVVs1',
    isActive:false,
     facny:'Faint',
  },
  {
    Name:'+11',
    isActive:false,
     facny:'Faint',
  },
  {
    Name:'+11',
    isActive:false,
     facny:'Faint',
  },
  {
    Name:'+11',
    isActive:false,
     facny:'Faint',
  }, {
    Name:'+11',
    isActive:false,
     facny:'Faint',
  }, {
    Name:'+11',
    isActive:false,
     facny:'Faint',
  }, {
    Name:'+11',
    isActive:false,
     facny:'Faint',
  }, {
    Name:'+11',
    isActive:false,
     facny:'Faint',
  }, {
    Name:'+11',
    isActive:false,
     facny:'Faint',
  }, {
    Name:'+11',
    isActive:false,
     facny:'Faint',
  }, {
    Name:'+11',
    isActive:false,
     facny:'Faint',
  }, {
    Name:'+11',
    isActive:false,
     facny:'Faint',
  }, {
    Name:'+11',
    isActive:false,
     facny:'Faint',
  }, {
    Name:'+11',
    isActive:false,
     facny:'Faint',
  }, {
    Name:'+11',
    isActive:false,
     facny:'Faint',
  }, {
    Name:'+11',
    isActive:false,
     facny:'Faint',
  }, {
    Name:'+11',
    isActive:false,
     facny:'Faint',
  }, {
    Name:'+11',
    isActive:false,
     facny:'Faint',
  }, {
    Name:'+11',
    isActive:false,
     facny:'Faint',
  }, {
    Name:'+11',
    isActive:false,
     facny:'Faint',
  },
]
}


