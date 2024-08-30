import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
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

  selectedCurrency:string = '₹';
  CartWeight:number | null = null;
  PriceCart:number | null = null;
  totalAmount:number = 0;
  finalamount:number = 0;
  FinalAmount : string = '0.00'
  formattedTotalAmount: string = '';
  inputPlaceholder:string = '$';
  dueDays:number | null = null;
  paymentDate:Date = new Date();
  currentSign: string = '-';
  Terms:number = 0;
  Conversionrate :number | null = null;
  Brokerage:number | null = null;
  brokerageAmount:string = '0.00';
  NetAmount!: string;


  constructor(){
    this.calculatePaymentDate();
  }

  // calculateTotalamount(): void {
    
  //   if (this.CartWeight && this.PriceCart) {
  //     let totalWeightPrice = this.CartWeight * this.PriceCart;
  
  //     let conversion = 0;
  //     let finalTermsAmount = 0;
  //     let finalTotal = 0;
  
  //     if (this.Conversionrate && this.Conversionrate !== 0) {
  //       if (this.selectedCurrency === '₹') {
  //         conversion = this.Conversionrate * totalWeightPrice;
  //       } else {
  //         conversion = totalWeightPrice / this.Conversionrate;
  //       }
  //     } else {
  //       conversion = totalWeightPrice;
  //     }
  
  //     finalTermsAmount = (conversion * this.Terms) / 100;
  
  //     if (this.currentSign === '-') {
  //       finalTotal = conversion - finalTermsAmount;
  //     } else if (this.currentSign === '+') {
  //       finalTotal = conversion + finalTermsAmount;
  //     } else {
  //       finalTotal = conversion;
  //     }
  
  //     this.finalamount = finalTotal;
  //   } else {
  //     this.finalamount = 0;
  //   }
  // }


  calculateTotalamount(): void {
    if (this.CartWeight !== null && this.PriceCart !== null) {
        const cartWeight = parseFloat(this.CartWeight.toString());
        const priceCart = parseFloat(this.PriceCart.toString());
        const conversionRate = this.Conversionrate ? parseFloat(this.Conversionrate.toString()) : 1;
        const terms = this.Terms ? parseFloat(this.Terms.toString()) : 0;

        let totalWeightPrice = cartWeight * priceCart;
        let conversion = totalWeightPrice;

        if (this.selectedCurrency === '₹') {
            conversion *= conversionRate;
        } else if (this.selectedCurrency === '$') {
            conversion /= conversionRate;
        }

        const finalTermsAmount = (conversion * terms) / 100;

        const brokeragePercentage = this.Brokerage ? parseFloat(this.Brokerage.toString()) : 0;
        const brokerageAmount = (conversion * brokeragePercentage) / 100;


        const currency: string = '₹';

        this.FinalAmount = `Total Amount: ${currency}${totalWeightPrice.toFixed(2)}`;


        if (this.currentSign === '-') {
            this.finalamount = parseFloat((conversion - finalTermsAmount - brokerageAmount).toFixed(2));
        } else if (this.currentSign === '+') {
            this.finalamount = parseFloat((conversion + finalTermsAmount + brokerageAmount).toFixed(2));
        } else {
            this.finalamount = parseFloat((conversion + brokerageAmount).toFixed(2));
        }

        this.updateBrokerageAndNetAmount();
    } else {
        this.finalamount = 0;
        this.updateBrokerageAndNetAmount();
    }
}

  
  
  
  


  updatePlaceholder(){
    this.inputPlaceholder = this.selectedCurrency === '₹' ? '$' : '₹';
     this.calculateTotalamount();
  }

  calculatePaymentDate(): void {
    const dueDays = Number(this.dueDays);
  
    if (!isNaN(dueDays)) {
      const today = new Date();
  
      today.setDate(today.getDate() + dueDays);
  
      this.paymentDate = today;
    } else {
      this.paymentDate = new Date();
    }
  }
  

  toggleSign(){
    this.currentSign = this.currentSign === '-' ? '+' : '-';
    this.calculateTotalamount();
  }

  calculateBrokerageAmount(): void {
    if (this.Brokerage !== null && this.Brokerage !== undefined && !isNaN(this.Brokerage)) {
        const BrokerageRate: number = (this.Brokerage * this.finalamount) / 100;
        const NetAmountRate: number = this.finalamount - BrokerageRate;

        // Assuming you have currency symbol in a variable, e.g., '₹'
        const currency: string = '₹';

        this.brokerageAmount = `Brokerage Amount : ${currency}${BrokerageRate.toFixed(2)}`;
        this.NetAmount = `Net Amount : ${currency}${NetAmountRate.toFixed(2)}`;
    } else {
        this.brokerageAmount = 'Brokerage Amount : ₹0.00';
        this.NetAmount = 'Net Amount : ₹0.00';
    }
}

updateBrokerageAndNetAmount(): void {
  if (this.Brokerage !== null && this.Brokerage !== undefined && !isNaN(this.Brokerage) && this.finalamount !== null) {
    const brokerageRate = (this.Brokerage * this.finalamount) / 100;
    const netAmountRate = this.finalamount - brokerageRate;

    this.brokerageAmount = `Brokerage Amount : ${this.selectedCurrency}${brokerageRate.toFixed(2)}`;
    this.NetAmount = `Net Amount : ${this.selectedCurrency}${netAmountRate.toFixed(2)}`;
  } else {
    this.brokerageAmount = `Brokerage Amount : ${this.selectedCurrency}0.00`;
    this.NetAmount = `Net Amount : ${this.selectedCurrency}0.00`;
  }
}

}
