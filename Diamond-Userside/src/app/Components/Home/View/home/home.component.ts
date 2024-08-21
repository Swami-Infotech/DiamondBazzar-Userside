import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavComponent } from '../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../Footer/View/footer/footer.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HomeService } from '../../service/home.service';
import { environment } from '../../../../environments/environment';
import { response } from 'express';
import { log } from 'console';

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
    this.route.params.subscribe(params =>{
      const id = params['userid'];
      if(id){
        this.getdashboard(id);
      } else{
        console.error("No userID found");
        
      }
     })
  }

  constructor(private service:HomeService,private route:ActivatedRoute,private translate: TranslateService,private router: Router) {}

  slider:any;
  dolar:any;
  line:any;
  labgrown:any;
  labgrownrough:any;
  nautral:any;
  naturlrough:any

  getdashboard(id:any){
    sessionStorage.getItem('userid');
    this.service.getwebdashboard(id).subscribe(
      (resp:any)=>{
        this.slider = resp.data.sliderData;
        this.dolar = resp.data;
        this.line = resp.data.headlineData;
        this.labgrown = resp.data.labgrownPolish;
        this.labgrownrough = resp.data.labgrownRough;
        this.nautral = resp.data.naturalPolish;
        this.naturlrough = resp.data.naturalRough;
        
       
        
      }
    )
  }

  viewpostdetails(id: any): void {
    this.router.navigate(['/Productdetils', id]);
  }
 
}
