import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../../Footer/View/footer/footer.component';

@Component({
  selector: 'app-rough-post-preview',
  standalone: true,
  imports: [CommonModule, FormsModule,NavComponent,FooterComponent],
  templateUrl: './rough-post-preview.component.html',
  styleUrl: './rough-post-preview.component.css'
})
export class RoughPostPreviewComponent {

}
