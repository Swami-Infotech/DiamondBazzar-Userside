import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../../Footer/View/footer/footer.component';
@Component({
  selector: 'app-polishpost2',
  standalone: true,
  imports: [CommonModule, FormsModule,NavComponent,FooterComponent],
   templateUrl: './polishpost2.component.html',
  styleUrl: './polishpost2.component.css'
})
export class Polishpost2Component {

  totalpages = 3;

  currentpage = 3;

  setpage(page:number){
    this.currentpage = page;
  }

  nextpage(){
    if(this.currentpage < this.totalpages){
      this.currentpage++;
    }
  }

  prevpage(){
    if(this.currentpage > 3){
      this.currentpage--;
    }
  }

  isActive(page: number): boolean{
    return this.currentpage === page;
  }

}
