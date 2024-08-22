import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../Footer/View/footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../products/service/products.service';
import { ProductDetailsService } from '../../service/product-details.service';
import { AttchmentType } from '../../Model/product-details';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FormsModule,NavComponent,FooterComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

 
  mains:any;

  attachments: any[] = [];
  metaDatas:any;
  userDetails:any;
  selectedImageURL: string = '';
  selectedAttachment: any;
  selectedVideoURL : string = '';
  imageAttachments: any[] = [];
  videoAttachments: any;
  

  attcah  = AttchmentType;

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      const id = params['id'];
      this.getalldata(id);
    })
  }

  constructor(private service:ProductDetailsService,private route:ActivatedRoute){}

  changeProductImage(attachment: any) {
    this.selectedImageURL = attachment.postAttachmentURL;
  }



  getalldata(id: any) {
    this.service.getpostdetails(id).subscribe(
      (resp: any) => {
        this.mains = [resp.data.postMainData];
        this.attachments = resp.data.postAttachments || [];
        this.metaDatas = resp.data.postMetaDatas;
        this.userDetails = resp.data.userDetails;

        this.imageAttachments = this.attachments.filter(att => att.attchmentType === this.attcah.Image);
        this.videoAttachments = this.attachments.filter(att => att.attchmentType === this.attcah.Video);

        if (this.imageAttachments.length > 0) {
          this.selectedImageURL = this.imageAttachments[0].postAttachmentURL;
        }
        if (this.videoAttachments.length > 0) {
          this.selectedVideoURL = this.videoAttachments[0].postAttachmentURL;
        }
        
        
        console.log("Data:", resp.data);
      }
    );
  }

  openVideo(url: string): void {
    window.open(url, '_blank');
  }
  



}

  
