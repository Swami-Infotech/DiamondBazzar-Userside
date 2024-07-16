import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(public translate: TranslateService) {
    this.translate.addLangs(['en', 'gu']); // Add your supported languages here
    this.translate.setDefaultLang('en');
  }

  getLanguages(): string[] {
    return this.translate.getLangs() || [];
  }

  onLanguageChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedLang = selectElement.value;

    if (selectedLang) {
      this.translate.use(selectedLang);
    }
  }
}
