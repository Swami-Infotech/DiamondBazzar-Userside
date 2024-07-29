import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../../Footer/View/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-polishpost1',
  standalone: true,
  imports: [CommonModule, FormsModule,NavComponent,FooterComponent,RouterLink],
  templateUrl: './polishpost1.component.html',
  styleUrl: './polishpost1.component.css'
})
export class Polishpost1Component {
  selectedButton: string | null = null;
  selectedButtons: string | null = null;
  selectButton(button: string) {
      this.selectedButton = button;
  }
  selectButtons(buttons: string){
    this.selectedButtons = buttons
  }
  
}
