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
      Name:'4-P Nakh'
    },
    {
      Name:'Choki Craf'
    },
    {
      Name:'Fancy Craf'
    },
    {
      Name:'Longs'
    },
    {
      Name:'Makeable'
    },
    {
      Name:'Outside'
    },
    {
      Name:'palsa'
    },
    {
      Name:'Palsa Craf'
    },
    {
      Name:'Round Craf'
    },
    {
      Name:'Selection'
    },
    {
      Name:'Sid'
    },
    {
      Name:'Soyebai'
    },
    {
      Name:'Other'
    }
  ]

}
