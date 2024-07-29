import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../Footer/View/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [CommonModule, FormsModule,NavComponent,FooterComponent,TranslateModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})
export class MyProfileComponent {

}