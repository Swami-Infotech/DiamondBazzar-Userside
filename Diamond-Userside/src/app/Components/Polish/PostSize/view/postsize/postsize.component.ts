import { Component, Input, OnInit } from '@angular/core';
import { Size } from '../../../Polishpost/modal/polishpost';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryDisplayStyle } from '../../../PolishType/model/polishtype';
import { DataService } from '../../../../data.service';

@Component({
  selector: 'app-postsize',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './postsize.component.html',
  styleUrl: './postsize.component.css'
})
export class PostsizeComponent implements OnInit {

  @Input() displayType!: CategoryDisplayStyle; 
  @Input() metadata: any[] = []; 

  CategoryDisplayStyle = CategoryDisplayStyle
  
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (response:any) => {
        this.metadata = response.data;  
        console.log('Fetched metadata:', this.metadata);
      },
      (error:any) => {
        console.error('Error fetching metadata', error);
      }
    );
  }







  onScroll(event: WheelEvent) {
    const container = event.currentTarget as HTMLElement;
    container.scrollLeft += event.deltaY;
    event.preventDefault(); 
  }

//   selectChip(selectedChip: any) {
//     this.numbers.forEach(chip => chip.isActive = false);
//     selectedChip.isActive = true;
// }

}
