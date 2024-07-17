import { Component, OnInit } from '@angular/core';
import { Demand } from '../../Modal/Demand';

@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.css']
})
export class DemandComponent implements OnInit {


  demands:Demand[] = [
    {
      name: 'Princess',
      category: 'LD',
      piece: 458,
      size: 1,
      clarity: 'VVS2',
      color: 'F',
      imageUrl: '../../../../assets/Img/Calcu/polsi.png'
    },
    {
      name: 'Princess',
      category: 'LD',
      piece: 458,
      size: 1,
      clarity: 'VVS2',
      color: 'F',
      imageUrl: '../../../../assets/Img/Calcu/polsi.png'
    },
    {
      name: 'Princess',
      category: 'LD',
      piece: 458,
      size: 1,
      clarity: 'VVS2',
      color: 'F',
      imageUrl: '../../../../assets/Img/Calcu/polsi.png'
    },
    {
      name: 'Princess',
      category: 'LD',
      piece: 458,
      size: 1,
      clarity: 'VVS2',
      color: 'F',
      imageUrl: '../../../../assets/Img/Calcu/polsi.png'
    },
    {
      name: 'Princess',
      category: 'LD',
      piece: 458,
      size: 1,
      clarity: 'VVS2',
      color: 'F',
      imageUrl: '../../../../assets/Img/Calcu/polsi.png'
    },
    {
      name: 'Princess',
      category: 'LD',
      piece: 458,
      size: 1,
      clarity: 'VVS2',
      color: 'F',
      imageUrl: '../../../../assets/Img/Calcu/polsi.png'
    },
    {
      name: 'Princess',
      category: 'LD',
      piece: 458,
      size: 1,
      clarity: 'VVS2',
      color: 'F',
      imageUrl: '../../../../assets/Img/Calcu/polsi.png'
    },
    {
      name: 'Princess',
      category: 'LD',
      piece: 458,
      size: 1,
      clarity: 'VVS2',
      color: 'F',
      imageUrl: '../../../../assets/Img/Calcu/polsi.png'
    }
  ]
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
