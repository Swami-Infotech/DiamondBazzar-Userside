import { Component, Input, OnInit } from '@angular/core';
import { displayType } from '../../../Polishpost/modal/polishpost';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../../Footer/View/footer/footer.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavService } from '../../../../Nav/Service/nav.service';
import { subscribe } from 'diagnostics_channel';
import { json } from 'stream/consumers';
import { DataService } from '../../../../data.service';
import { CategoryDisplayStyle } from '../../model/polishtype';

@Component({
  selector: 'app-polishtype',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './polishtype.component.html',
  styleUrl: './polishtype.component.css'
})
export class PolishtypeComponent implements OnInit {

  @Input() displayType!: CategoryDisplayStyle; 
  @Input() metadata: any[] = []; 

  CategoryDisplayStyle = CategoryDisplayStyle
  
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (response:any) => {
        this.metadata = response.data;  // Ensure the data structure matches what your template expects
        console.log('Fetched metadata:', this.metadata);
      },
      (error:any) => {
        console.error('Error fetching metadata', error);
      }
    );
  }


}
