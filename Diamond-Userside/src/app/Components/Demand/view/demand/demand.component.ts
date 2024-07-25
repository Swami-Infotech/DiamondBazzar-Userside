import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../Footer/View/footer/footer.component';
import { Demand } from '../../Modal/Demand';

@Component({
  selector: 'app-demand',
  standalone: true,
  imports: [CommonModule, FormsModule,NavComponent,FooterComponent],
  templateUrl: './demand.component.html',
  styleUrl: './demand.component.css'
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
      imageUrl: '../../../../../assets/Img/Calcu/polsi.png'
    },
    {
      name: 'Princess',
      category: 'LD',
      piece: 458,
      size: 1,
      clarity: 'VVS2',
      color: 'F',
     imageUrl: '../../../../../../assets/Img/Calcu/polsi.png'
    },
    {
      name: 'Princess',
      category: 'LD',
      piece: 458,
      size: 1,
      clarity: 'VVS2',
      color: 'F',
    imageUrl: '../../../../../assets/Img/Calcu/polsi.png'
    },
    {
      name: 'Princess',
      category: 'LD',
      piece: 458,
      size: 1,
      clarity: 'VVS2',
      color: 'F',
    imageUrl: '../../../../../assets/Img/Calcu/polsi.png'
    },
    {
      name: 'Princess',
      category: 'LD',
      piece: 458,
      size: 1,
      clarity: 'VVS2',
      color: 'F',
    imageUrl: '../../../../../assets/Img/Calcu/polsi.png'
    },
    {
      name: 'Princess',
      category: 'LD',
      piece: 458,
      size: 1,
      clarity: 'VVS2',
      color: 'F',
    imageUrl: '../../../../../assets/Img/Calcu/polsi.png'
    },
    {
      name: 'Princess',
      category: 'LD',
      piece: 458,
      size: 1,
      clarity: 'VVS2',
      color: 'F',
    imageUrl: '../../../../../assets/Img/Calcu/polsi.png'
    },
    {
      name: 'Princess',
      category: 'LD',
      piece: 458,
      size: 1,
      clarity: 'VVS2',
      color: 'F',
    imageUrl: '../../../../../assets/Img/Calcu/polsi.png'
    }
  ]
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}


