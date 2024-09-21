import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../Footer/View/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { log } from 'console';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-calculator',  
  standalone: true,
  imports: [CommonModule, FormsModule, NavComponent, FooterComponent, TranslateModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  selectedCurrency: string = '₹';
  CartWeight: number | null = null;
  PriceCart: number | null = null;
  totalAmount: number = 0;
  finalamount: number = 0;
  FinalAmount: string = '0.00';
  formattedTotalAmount: string = '0.00';
  inputPlaceholder: string = '$';
  dueDays: number | null = null;
  paymentDate: Date = new Date();
  currentSign: string = '-';
  Terms: number | null = null;
  Conversionrate: number | null = null;
  Brokerage: number | null = null;
  brokerageAmount: string = '0.00';
  NetAmount: string = '0.00';

  OPcurrency: string = '₹';
  
isConversionRateSet: boolean = false;

  constructor() {
    this.calculatePaymentDate();
  }



  CopyToClickboard() {
    const CopyOBJ = `
  Diamond Calculation
  
  Total Carat Weight: ${this.CartWeight || 'N/A'}
  Price/Carat: ${this.selectedCurrency}${this.PriceCart || 'N/A'}
  Terms: ${this.currentSign} ${this.Terms ? this.Terms + '%' : 'N/A'}
  Due Date: ${this.dueDays || 'N/A'}
  Payment Date: ${this.paymentDate ? this.paymentDate.toLocaleDateString() : 'N/A'}
  Conversion Rate: ${this.selectedCurrency}${this.Conversionrate || 'N/A'}
  Total Amount: ${this.OPcurrency}${this.finalamount}
  Brokerage: ${this.OPcurrency}${this.Brokerage ? this.Brokerage + '%' : 'N/A'}
  Net Amount:${this.OPcurrency}${this.NetAmount || 'N/A'}
  
  Data provided by Diamond Bazzar Web.`;
  
    navigator.clipboard.writeText(CopyOBJ)
      .then(() => {
        Swal.fire({
          title: 'Copied To Clipboard',
          confirmButtonText: 'ok'
        })
      })
      .catch(err => {
        console.error('Failed to copy:', err);
      });
  }
  
  



  calculateTotalamount(): void {
    if (this.CartWeight !== null && this.PriceCart !== null) {
      const cartWeight = parseFloat(this.CartWeight.toString());
      const priceCart = parseFloat(this.PriceCart.toString());
      const conversionRate = this.Conversionrate ? parseFloat(this.Conversionrate.toString()) : 1;
      const terms = this.Terms ? parseFloat(this.Terms.toString()) : 0;

      let totalWeightPrice = cartWeight * priceCart;
      let convertedAmount = totalWeightPrice;

      // Conversion logic based on selected currency
      if (this.Conversionrate && this.Conversionrate > 0) {
        if (this.selectedCurrency === '₹') {
          convertedAmount = totalWeightPrice / conversionRate; // INR to USD
          this.OPcurrency = '$';
        } else if (this.selectedCurrency === '$') {
          convertedAmount = totalWeightPrice * conversionRate; // USD to INR
          this.OPcurrency = '₹';
        }
      } else {
        this.OPcurrency = this.selectedCurrency;
      }

      const finalTermsAmount = (convertedAmount * terms) / 100;
      if (this.currentSign === '-') {
        this.finalamount = parseFloat((convertedAmount - finalTermsAmount).toFixed(2));
      } else if (this.currentSign === '+') {
        this.finalamount = parseFloat((convertedAmount + finalTermsAmount).toFixed(2));
      } else {
        this.finalamount = parseFloat(convertedAmount.toFixed(2));
      }

      this.calculateBrokerageAmount();
      this.updateBrokerageAndNetAmount();
    } else {
      this.finalamount = 0;
      this.brokerageAmount = `0.00`;
      this.NetAmount = `0.00`;
      this.OPcurrency = this.selectedCurrency;
    }
  }

  ConvoRate(): void {
    var ConversionrateSTR = String(this.Conversionrate);

    if (this.Conversionrate === null || this.Conversionrate === undefined || this.Conversionrate === 0 || ConversionrateSTR.trim() === '') {
      this.isConversionRateSet = false;
      this.selectedCurrency = '₹';
      this.OPcurrency = '₹';
      this.calculateTotalamount(); // Recalculate total amount when conversion rate is not set
    } else {
      this.isConversionRateSet = true;
      this.selectedCurrency = '$';
      this.OPcurrency = '$';
      this.calculateTotalamount(); // Recalculate total amount when conversion rate is set
    }
  }

  resetForm(): void {
    this.CartWeight = null;
    this.PriceCart = null;
    this.Conversionrate = null;
    this.Terms = null;
    this.Brokerage = null;
    this.finalamount = 0;
    this.brokerageAmount = '0.00';
    this.NetAmount = '0.00';
    this.OPcurrency = '₹';
    this.paymentDate = new Date();
  }

  updatePlaceholder(): void {
    this.inputPlaceholder = this.selectedCurrency === '$' ? '₹' : '$';
    this.OPcurrency = this.selectedCurrency;
    this.calculateTotalamount(); // Recalculate total amount when placeholder changes
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

  toggleSign(): void {
    this.currentSign = this.currentSign === '-' ? '+' : '-';
    this.calculateTotalamount(); // Recalculate total amount when sign is toggled
  }

  calculateBrokerageAmount(): void {
    if (this.Brokerage !== null && !isNaN(this.Brokerage) && this.finalamount !== null) {
      const brokeragePercentage = parseFloat(this.Brokerage.toString());
      const brokerageAmount = (this.finalamount * brokeragePercentage) / 100;
      this.brokerageAmount = `${brokerageAmount.toFixed(2)}`;
    } else {
      this.brokerageAmount = `0.00`;
    }
    this.updateBrokerageAndNetAmount(); // Ensure NetAmount is updated after calculating brokerage
  }

  updateBrokerageAndNetAmount(): void {
    if (this.Brokerage !== null && !isNaN(this.Brokerage) && this.finalamount !== null) {
      const brokeragePercentage = parseFloat(this.Brokerage.toString());
      const brokerageAmount = (this.finalamount * brokeragePercentage) / 100;
      const netAmount = this.finalamount - brokerageAmount;
      this.NetAmount = `${netAmount.toFixed(2)}`;
    } else {
      this.NetAmount = `0.00`;
    }
  }
}
