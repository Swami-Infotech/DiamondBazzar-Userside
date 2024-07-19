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
      Name:''
    }
  ]

}
