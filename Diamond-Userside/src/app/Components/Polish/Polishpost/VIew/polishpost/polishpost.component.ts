import { Component, Input, OnInit } from '@angular/core';
import { displayType, Shap, Size, TextSize } from '../../modal/polishpost';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../../Footer/View/footer/footer.component';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PolishtypeComponent } from "../../../PolishType/view/polishtype/polishtype.component";
import { PolishshapComponent } from '../../../PolishShap/view/polishshap/polishshap.component';
import { PostsizeComponent } from '../../../PostSize/view/postsize/postsize.component';
import { PostcolorComponent } from '../../../postcolor/view/postcolor/postcolor.component';
import { CategoryDisplayStyle } from '../../../PolishType/model/polishtype';
import { DataService } from '../../../../data.service';
@Component({
  selector: 'app-polishpost',
  standalone: true,
  imports: [CommonModule, FormsModule, NavComponent, FooterComponent, RouterLink, TranslateModule, PolishtypeComponent,PolishshapComponent,PostsizeComponent,PostcolorComponent],
  templateUrl: './polishpost.component.html',
  styleUrl: './polishpost.component.css'
})
export class PolishpostComponent implements OnInit {

  @Input()
  displayType!: CategoryDisplayStyle;

  CategoryDisplayStyle = CategoryDisplayStyle;

  metadata: any[] = [];

  totalpages = 3;

  currentpage = 1;

  setpage(page:number){
    this.currentpage = page;
  }

  nextpage(){
    if(this.currentpage < this.totalpages){
      this.currentpage++;
    }
  }

  prevpage(){
    if(this.currentpage > 1){
      this.currentpage--;
    }
  }

  isActive(page: number): boolean{
    return this.currentpage === page;
  }


  constructor(private dataService: DataService){
  }
  ngOnInit(): void {
    this.metadata = this.dataService.getData();
    console.log(this.metadata);
  }










 
  

}
