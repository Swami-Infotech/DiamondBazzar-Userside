import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/View/home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/View/login/login.component';
import { OtpComponent } from './Otp/View/otp/otp.component';
import { SignupComponent } from './Signup/view/signup/signup.component';
import { ProfileComponent } from './Profile/view/profile/profile.component';
import { PreferenceComponent } from './Preference/View/preference/preference.component';
import { CompanydetailsComponent } from './Company Details/View/companydetails/companydetails.component';
import { AuctionComponent } from './Auction/view/auction/auction.component';
import { NavComponent } from './Nav/view/nav/nav.component';
import { FooterComponent } from './footer/view/footer/footer.component';
import { ProductComponent } from './Product details/view/product/product.component';
import { ProductsComponent } from './products/view/products/products.component';
import { wishlistComponent } from './Wishlist/View/wishlist/wishlist.component';
import { CalculatorComponent } from './Calculator/view/calculator/calculator.component';
import { DemandComponent } from './Demand/View/demand/demand.component';
import { MyprofileComponent } from './MyProfile/view/myprofile/myprofile.component';
import { PolishpostComponent } from './Polish/Polishpost/view/polishpost/polishpost.component';
import { Polishpost1Component } from './Polish/polishpost1/view/polishpost1/polishpost1.component';
import { Polishpost2Component } from './Polish/Polishpost2/view/polishpost2/polishpost2.component';
import { RoughPostComponent } from './Rough/Roughpost/view/rough-post/rough-post.component';
import { RoughPost1Component } from './Rough/RoughPost1/view/rough-post1/rough-post1.component';

const routes: Routes = [
  {
    path:"",
    component:AppComponent,
    children:[
      {
        path:"",
        redirectTo:"/login",
        pathMatch: 'full'
      }
    ]
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"otp",
    component:OtpComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"preference",
    component:PreferenceComponent
  },
  {
    path:"companydetails",
    component:CompanydetailsComponent
  },
  {
    path:"nav",
    component:NavComponent
  },
  {
    path:"footer",
    component:FooterComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"auction",
    component:AuctionComponent
  },
  {
    path:"products",
    component:ProductsComponent
  },
  {
    path:"product",
    component:ProductComponent
  },
  {
    path:"Wishlist",
    component:wishlistComponent
  },
  {
    path:"Calculator",
    component:CalculatorComponent
  },
  {
    path:"Demand",
    component:DemandComponent
  },
  {
    path:"myprofile",
    component:MyprofileComponent
  },
  {
    path:"polishpost",
    component:PolishpostComponent
  },
  {
    path:"polishpost1",
    component:Polishpost1Component
  },
  {
    path:"Polishpost2",
    component:Polishpost2Component
  },
  {
    path:"RoughPost",
    component:RoughPostComponent
  },
  {
    path:"RoughPost1",
    component:RoughPost1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

