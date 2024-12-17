import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../Footer/View/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-auction',
  standalone: true,
  imports: [CommonModule, FormsModule,NavComponent,FooterComponent,TranslateModule,RouterLink],
  templateUrl: './auction.component.html',
  styleUrl: './auction.component.css'
})
export class AuctionComponent {

}
  