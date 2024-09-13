import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-postspecial',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './postspecial.component.html',
  styleUrl: './postspecial.component.css'
})
export class PostspecialComponent {

  totalpages = 3;

  currentpage = 2;

  setpage(page:number){
    this.currentpage = page;
  }

  nextpage(){
    if(this.currentpage < this.totalpages){
      this.currentpage++;
    }
  }

  prevpage(){
    if(this.currentpage > 2){
      this.currentpage--;
    }
  }

  isActive(page: number): boolean{
    return this.currentpage === page;
  }



  selectedButton: string | null = null;
  selectedButtons: string | null = null;
  selectButton(button: string) {
      this.selectedButton = button;
  }
  selectButtons(buttons: string){
    this.selectedButtons = buttons
  }
  

}
