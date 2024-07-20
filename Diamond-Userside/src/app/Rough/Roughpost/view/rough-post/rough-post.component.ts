import { Component, OnInit } from '@angular/core';
import { Rough } from '../../Modal/Rough';

@Component({
  selector: 'app-rough-post',
  templateUrl: './rough-post.component.html',
  styleUrls: ['./rough-post.component.css']
})
export class RoughPostComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }





  types:Rough[] = [
    {
      Name:'4-P Nakh',
      isActive: false,
      value:'2-3'
    },
    {
      Name:'Choki Craf',
      isActive: false,
      value:'3-4'
    },
    {
      Name:'Fancy Craf',
      isActive: false,
      value:'4-5'
    },
    {
      Name:'Longs',
      isActive: false,
      value:'2-3'
    },
    {
      Name:'Makeable',
      isActive: false,
      value:'6-7'
    },
    {
      Name:'Outside',
      isActive: false,
      value:'7-9'
    },
    {
      Name:'palsa',
      isActive: false,
      value:'9-11'
    },
    {
      Name:'Palsa Craf',
      isActive: false,
      value:'+11'
    },
    {
      Name:'Round Craf',
      isActive: false,
      value:'2GR'
    },
    {
      Name:'Selection',
      isActive: false,
      value:'3GR'
    },
    {
      Name:'Sid',
      isActive: false,
      value:'4GR'
    },
    {
      Name:'Soyebai',
      isActive: false,
      value:'5GR'
    },
    {
      Name:'Other',
      isActive: false,
      value:'6GR'
    },
    {
      Name:'4-P Nakh',
      isActive: false,
      value:'7GR'
    },
    {
      Name:'Choki Craf',
      isActive: false,
      value:'8GR'
    },
    {
      Name:'Fancy Craf',
      isActive: false,
      value:'2-3CT'
    },
    {
      Name:'Longs',
      isActive: false,
      value:'4-8CT'
    },
    {
      Name:'Makeable',
      isActive: false,
      value:'5-6'
    },
        {
      Name:'4-P Nakh',
      isActive: false,
      value:'2-3'
    },
    {
      Name:'Choki Craf',
      isActive: false,
      value:'3-4'
    },
    {
      Name:'Fancy Craf',
      isActive: false,
      value:'4-5'
    },
    {
      Name:'Longs',
      isActive: false,
      value:'2-3'
    },
    {
      Name:'Makeable',
      isActive: false,
      value:'6-7'
    },
    {
      Name:'Outside',
      isActive: false,
      value:'7-9'
    },
    {
      Name:'palsa',
      isActive: false,
      value:'9-11'
    },
    {
      Name:'Palsa Craf',
      isActive: false,
      value:'+11'
    },
    {
      Name:'Round Craf',
      isActive: false,
      value:'2GR'
    },
    {
      Name:'Selection',
      isActive: false,
      value:'3GR'
    },
    {
      Name:'Sid',
      isActive: false,
      value:'4GR'
    },
    {
      Name:'Soyebai',
      isActive: false,
      value:'5GR'
    },
    {
      Name:'Other',
      isActive: false,
      value:'6GR'
    },
    {
      Name:'4-P Nakh',
      isActive: false,
      value:'7GR'
    },
    {
      Name:'Choki Craf',
      isActive: false,
      value:'8GR'
    },
    {
      Name:'Fancy Craf',
      isActive: false,
      value:'2-3CT'
    },
    {
      Name:'Longs',
      isActive: false,
      value:'4-8CT'
    },
    {
      Name:'Makeable',
      isActive: false,
      value:'5-6'
    },
  ]

  onScroll(event: WheelEvent) {
    const container = event.currentTarget as HTMLElement;
    container.scrollLeft += event.deltaY;
    event.preventDefault(); // Prevent the default vertical scroll
  }

  selectChip(selectedChip: any) {
    this.types.forEach(chip => chip.isActive = false);
    selectedChip.isActive = true;
}

}
