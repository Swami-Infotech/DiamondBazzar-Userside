import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Shap, Size, TextSize } from '../../modal/polishpost';

@Component({
  selector: 'app-polishpost',
  templateUrl: './polishpost.component.html',
  styleUrls: ['./polishpost.component.css'],
})
export class PolishpostComponent implements OnInit {
  @ViewChild('wrapper') wrapper: ElementRef | undefined;

  numbers: Size[] = [
    { Number: -2, color: 'E', cla: 'FL', Colors: 'Red', facny: 'Faint' },
    { Number: +2, color: 'E', cla: 'IF', Colors: 'White', facny: 'Light' },
    { Number: +6.5, color: 'E', cla: 'VVS1', Colors: 'Maroon', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+1', Colors: 'SkyBlue', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+2', Colors: 'Orange', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+3', Colors: 'Pink', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+4', Colors: 'Naviblue', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+5', Colors: 'Gray', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+6', Colors: 'Green', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+7', Colors: 'OffWhite', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+8', Colors: 'black', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+9', Colors: 'black', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+10', Colors: 'black', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+11', Colors: 'black', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+12', Colors: 'black', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+13', Colors: 'black', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+14', Colors: 'black', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+15', Colors: 'black', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+16', Colors: 'black', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+17', Colors: 'black', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+18', Colors: 'black', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+19', Colors: 'black', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+19', Colors: 'black', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+19', Colors: 'black', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+19', Colors: 'black', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+19', Colors: 'black', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+19', Colors: 'black', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+19', Colors: 'black', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+19', Colors: 'black', facny: 'Light' },
    { Number: +11, color: 'E', cla: '+19', Colors: 'black', facny: 'Light' },
    
    { Number: +11, color: 'E', cla: '+20', Colors: 'black', facny: 'Light' },

    { Number: +11, color: 'E', cla: '+11', Colors: 'black', facny: 'Faint' }
  ];

  shaps: Shap[] = [
    { Name: 'Round', imageUrl: '../../../../assets/Img/polish/jewel.png' },
    { Name: 'Pear', imageUrl: '../../../../assets/Img/polish/pear.png' },
    { Name: 'Ovel', imageUrl: '../../../../assets/Img/polish/Ovel.png' },
    { Name: 'Marquies', imageUrl: '../../../../assets/Img/polish/marquies.png' },
    { Name: 'Round', imageUrl: '../../../../assets/Img/polish/jewel.png' },
    { Name: 'Pear', imageUrl: '../../../../assets/Img/polish/pear.png' }
  ];

  ngOnInit(): void {
    // Your initialization logic here
  }

  scrollItem(event: MouseEvent): void {
    const clickedItem = event.currentTarget as HTMLElement;
    const wrapper = this.wrapper?.nativeElement;

    if (wrapper) {
      const wrapperRect = wrapper.getBoundingClientRect();
      const clickedItemRect = clickedItem.getBoundingClientRect();
      const wrapperCenter = wrapperRect.left + wrapperRect.width / 2;
      const scrollAmount = clickedItemRect.width + 2; // Include margin-right

      // Remove 'active' class from all items
      wrapper.querySelectorAll('.item').forEach((item: { classList: { remove: (arg0: string) => void; }; }) => item.classList.remove('active'));

      // Add 'active' class to the clicked item
      clickedItem.classList.add('active');

      if (clickedItemRect.left < wrapperCenter) {
        // Scroll left
        wrapper.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
        });
      } else {
        // Scroll right
        wrapper.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  }
  textsizes: TextSize[] = [
    {
      name: '7GR',
      Colors: 'Offgreen',
    },
    {
      name: '8GR',
      Colors: 'Black',
    },
    {
      name: '2-3CT',
      Colors: 'Blue',
    },
    {
      name: '4-8CT',
      Colors: 'Brown',
    },
    {
      name: '5-6',
      Colors: 'Yellow',
    },
  ];
}
