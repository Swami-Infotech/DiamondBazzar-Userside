import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../../Footer/View/footer/footer.component';
@Component({
  selector: 'app-demand-post-preview',
  standalone: true,
  imports: [CommonModule, FormsModule,NavComponent,FooterComponent],
  templateUrl: './demand-post-preview.component.html',
  styleUrl: './demand-post-preview.component.css'
})
export class DemandPostPreviewComponent {

}
