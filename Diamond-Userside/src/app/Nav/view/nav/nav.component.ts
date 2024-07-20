// nav.component.ts
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(public translate: TranslateService) {
    this.translate.addLangs(['en', 'gu']);
    this.translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|gu/) ? browserLang : 'en');
  }

  ngOnInit(): void {}

  getLanguages(): string[] {
    return this.translate.getLangs() || [];
  }

  onLanguageChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedLang = selectElement.value;

    if (selectedLang) {
      this.translate.use(selectedLang);
      console.log('Language changed to:', selectedLang);
    }
  }
}
