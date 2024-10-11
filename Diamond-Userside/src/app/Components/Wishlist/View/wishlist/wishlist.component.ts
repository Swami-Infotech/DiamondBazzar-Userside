import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../Footer/View/footer/footer.component';
import { WishlistService } from '../../service/wishlist.service';
import { PostTypeSelection } from '../../Model/wishlist';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrNotificationService } from '../../../Common/toastr-notification.service';


@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, FormsModule,NavComponent,FooterComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit {

  favPosts:any;

 Posttype = PostTypeSelection;

 mainCategory: PostTypeSelection = PostTypeSelection.Post;


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['userid'];
      if (id) {
        this.getData();
      } else {
        console.error("No userID found");
      }
    });
  }

  constructor(private service:WishlistService,private toastr : ToastrNotificationService,private route:ActivatedRoute,private router: Router){}

  getData() {
    const userid = sessionStorage.getItem('userid');
    if (!userid) {
      console.error('User ID not found in session storage');
      return;
    }
  
    const userID = parseInt(userid, 10);
    if (isNaN(userID)) {
      console.error('Invalid User ID');
      return;
    }
  
    this.service.getFavPostsby(userID, this.mainCategory).subscribe(
      (response: any) => {
      
          this.favPosts = response.data || [];
           
      },
      (error) => {
        console.error('API Error:', error);  
         this.toastr.showError(error);
      }
    );
  }


  viewpostdetails(id: any): void {
    this.router.navigate(['/Productdetils', id]);
  }
  
  
  
  

  onCategoryChange(category: PostTypeSelection): void {
    this.mainCategory = category;
    this.getData();
  }
}

 

