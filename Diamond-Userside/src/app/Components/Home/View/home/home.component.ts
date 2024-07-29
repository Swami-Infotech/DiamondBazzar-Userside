import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavComponent } from '../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../Footer/View/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, NavComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // constructor(public translate: TranslateService) {}

  // getLanguages(): string[] {
  //   return ['en', 'gu'];
  // }

  // onLanguageChange(event: Event) {
  //   const target = event.target as HTMLSelectElement;
  //   const lang = target.value;
  //   this.translate.use(lang);
  // }
}
