// import { Routes } from '@angular/router';

// export const routes: Routes = [];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Login/View/login/login.component';
import { OtpComponent } from './Components/Otp/View/otp/otp.component';
import { ProfileComponent } from './Components/Profile/View/profile/profile.component';
import { PreferenceComponent } from './Components/Preference/View/preference/preference.component';
import { CompanyDetailsComponent } from './Components/Company Details/View/company-details/company-details.component';
import { NavComponent } from './Components/Nav/view/nav/nav.component';
import { FooterComponent } from './Components/Footer/View/footer/footer.component';
import { HomeComponent } from './Components/Home/View/home/home.component';
import { AuctionComponent } from './Components/Auction/view/auction/auction.component';
import { ProductsComponent } from './Components/products/View/products/products.component';
import { WishlistComponent } from './Components/Wishlist/View/wishlist/wishlist.component';
import { CalculatorComponent } from './Components/Calculator/view/calculator/calculator.component';
import { DemandComponent } from './Components/Demand/view/demand/demand.component';
import { MyProfileComponent } from './Components/MyProfile/View/my-profile/my-profile.component';
import { PolishpostComponent } from './Components/Polish/Polishpost/VIew/polishpost/polishpost.component';
import { Polishpost1Component } from './Components/Polish/polishpost1/View/polishpost1/polishpost1.component';
import { Polishpost2Component } from './Components/Polish/Polishpost2/View/polishpost2/polishpost2.component';
import { RoughpostComponent } from './Components/Rough/Roughpost/View/roughpost/roughpost.component';
import { Roughpost1Component } from './Components/Rough/RoughPost1/View/roughpost1/roughpost1.component';
import { RoughPostPreviewComponent } from './Components/Rough/RoughPostPreview/View/rough-post-preview/rough-post-preview.component';
import { DemandPostPreview2Component } from './Components/DemandPost/DemandPostPreview2/View/demand-post-preview2/demand-post-preview2.component';
import { DemandPostComponent } from './Components/DemandPost/DemandPost/View/demand-post/demand-post.component';
import { SignUpComponent } from './Components/Signup/View/sign-up/sign-up.component';
import { AuthGuard } from './Components/Common/auth.guard';
import { ProductDetailsComponent } from './Components/Product details/View/product-details/product-details.component';

export const routes: Routes =  [
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
    component:SignUpComponent
  },
  {
    path:"profile",
    component:ProfileComponent,
    canActivate:[AuthGuard]

  },
  {
    path:"preference",
    component:PreferenceComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"companydetails",
    component:CompanyDetailsComponent
  },
  {
    path:"Productdetils",
    component:ProductDetailsComponent,
    canActivate:[AuthGuard]
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
    component:HomeComponent,
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
    component:ProductsComponent
  },
  {
    path:"Wishlist",
    component:WishlistComponent
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
    component:MyProfileComponent    
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
    path:"PolishPostSecond",
    component:Polishpost2Component
  },
  {
    path:"RoughPost",
    component:RoughpostComponent
  },
  {
    path:"RoughPost1",
    component:Roughpost1Component
  },
  {
    path:"RoughPerview",
    component:RoughPostPreviewComponent
  },
  {
    path:"DemandPostPreview2",
    component:DemandPostPreview2Component
  },
  {
    path:"DemandPost",
    component:DemandPostComponent
  }
];