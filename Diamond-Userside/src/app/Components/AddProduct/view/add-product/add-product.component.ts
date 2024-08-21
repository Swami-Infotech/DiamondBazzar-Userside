import { Component } from '@angular/core';
import { MainCategory, SubCategory } from '../../model/Product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule , FormsModule , RouterLink],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  mainCategories = MainCategory;
  subCategories = SubCategory;


  selectedMainCategory: MainCategory = MainCategory.Natural;
  selectedSubCategory: SubCategory = SubCategory.Rough;

  constructor(private router: Router) {
    // Set default values if necessary

    // this.router.navigate(['/polishpost']);
  }


  onAddProduct() {
    // Implement the logic to handle product addition
    console.log('Selected Main Category:', this.selectedMainCategory);
    console.log('Selected Sub Category:', this.selectedSubCategory);
    if(this.selectedSubCategory === SubCategory.Polish){
      this.router.navigate(['/polishpost']);
    } else if(this.selectedSubCategory === SubCategory.Rough){
      this.router.navigate(['/RoughPost']);
    } else{
      console.log("Invalid SubCategory Selection");
      
    }
   
    // Make API calls or other necessary actions here
  }

}
