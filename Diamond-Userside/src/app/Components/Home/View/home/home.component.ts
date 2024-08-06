import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavComponent } from '../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../Footer/View/footer/footer.component';
import { RouterLink } from '@angular/router';
import { HomeService } from '../../service/home.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, NavComponent, FooterComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgurl = environment.imgURL;
  ngOnInit(): void {
    this.getallsliders()
  }

  constructor(private service:HomeService) {}

  slider:any
  getallsliders(){
    this.service.getallslider().subscribe(
      (resp:any)=>{
        this.slider = resp.data;
        console.log("slider>>",resp.data);
        
      }
    )
  }
}
