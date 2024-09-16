import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../../Nav/view/nav/nav.component';
import { FooterComponent } from '../../../Footer/View/footer/footer.component';
import { WishlistService } from '../../service/wishlist.service';
import { PostTypeSelection } from '../../Model/wishlist';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  constructor(private service:WishlistService,private route:ActivatedRoute,private router: Router){}

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
        if (response.status === true) {
          this.favPosts = response.data;
           
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: response.message,
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'btn btn-danger',
            },
            buttonsStyling: false,
          });
        }
      },
      (error) => {
        console.error('API Error:', error);  
        Swal.fire({
          icon: 'error',
          title: 'API Error',
          text: 'There was an error with the API request.',
          confirmButtonText: 'OK',
          customClass: {
            confirmButton: 'btn btn-danger',
          },
          buttonsStyling: false,
        });
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

 

