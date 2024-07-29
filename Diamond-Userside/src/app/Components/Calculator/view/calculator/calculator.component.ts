import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../Footer/View/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule,NavComponent,FooterComponent,TranslateModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

}
