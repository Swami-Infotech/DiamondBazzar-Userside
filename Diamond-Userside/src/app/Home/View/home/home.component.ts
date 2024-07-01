import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Lang:string = '';

  constructor(private translateservice:TranslateService){}

  ngOnInit(): void {
    this.Lang = localStorage.getItem('Lang') || 'en';
  }

  translations: any = {
    en: {
      BEST_COLLECTION: "Best Collection",
      RANGE_OF_JEWELRY: "A Range Of jewelry",
      NEW_PRICE: "New Price: ₹18,900",
      SHOP_NOW: "Shop Now",
      HAPPY_EVER_AFTER: "Happy Ever After",
      WEDDING_GIFT: "Wedding Gift",
      LOREM_IPSUM: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    hn: {
      BEST_COLLECTION: "सर्वश्रेष्ठ संग्रह",
      RANGE_OF_JEWELRY: "गहनों की एक श्रृंखला",
      NEW_PRICE: "नई कीमत: ₹18,900",
      SHOP_NOW: "अभी खरीदें",
      HAPPY_EVER_AFTER: "सदा सुखी रहें",
      WEDDING_GIFT: "शादी का तोहफा",
      LOREM_IPSUM: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    gu: {
      BEST_COLLECTION: "શ્રેષ્ઠ કલેક્શન",
      RANGE_OF_JEWELRY: "ગહનાનો શ્રેણી",
      NEW_PRICE: "નવી કિંમત: ₹૧૮,૯૦૦",
      SHOP_NOW: "હમણાં ખરીદો",
      HAPPY_EVER_AFTER: "સદા સુખી રહો",
      WEDDING_GIFT: "લગ્નની ભેટ",
      LOREM_IPSUM: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
  };


  ChangeLang(event: any) {
    this.Lang = event.target.value;
  }
   getTranslation(key: string): string {
    return this.translations[this.Lang][key];
  }
}
