import { Component } from '@angular/core';
import { NavComponent } from "../../../Nav/view/nav/nav.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
