import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Lang: string = '';

  constructor(public translate: TranslateService) {
    this.translate.addLangs(['en', 'gu']);
    this.translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|gu/) ? browserLang : 'en');
  }

  ngOnInit(): void {
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
