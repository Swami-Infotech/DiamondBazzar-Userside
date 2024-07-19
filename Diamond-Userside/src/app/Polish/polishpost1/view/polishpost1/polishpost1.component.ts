import { Component } from '@angular/core';

@Component({
  selector: 'app-polishpost1',
  templateUrl: './polishpost1.component.html',
  styleUrls: ['./polishpost1.component.css']
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
