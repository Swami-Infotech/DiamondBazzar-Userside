import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from "../../Nav/view/nav/nav.component";
import { FooterComponent } from "../../Footer/View/footer/footer.component";

@Component({
  selector: 'app-bidrank',
  standalone: true,
  imports: [RouterLink, NavComponent, FooterComponent],
  templateUrl: './bidrank.component.html',
  styleUrl: './bidrank.component.css'
})
export class BidrankComponent {

}
