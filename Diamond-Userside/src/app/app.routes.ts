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
import { AddProductComponent } from './Components/AddProduct/view/add-product/add-product.component';
import { PolishtypeComponent } from './Components/Polish/PolishType/view/polishtype/polishtype.component';
import { PolishshapComponent } from './Components/Polish/PolishShap/view/polishshap/polishshap.component';
import { PostcolorComponent } from './Components/Polish/postcolor/view/postcolor/postcolor.component';
import { PostsizeComponent } from './Components/Polish/PostSize/view/postsize/postsize.component';
import { PostspecialComponent } from './Components/Polish/Postspecial/view/postspecial/postspecial.component';
import { AddPostComponent } from './Components/add-post/add-post.component';
import { MyDiamondComponent } from './Components/my-diamond/my-diamond.component';
import { MyDemandComponent } from './Components/my-demand/my-demand.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { TermsComponent } from './Components/terms/terms/terms.component';
import { PrivacyComponent } from './Components/privacy/privacy/privacy.component';
import { AddDemandComponent } from './Components/add-demand/add-demand.component';
import { ForgetpassComponent } from './Components/Forgetpassword/view/forgetpass/forgetpass.component';
import { ResetpassComponent } from './Components/Reset pass/view/resetpass/resetpass.component';
import { AuctionbidComponent } from './Components/Auction-bid/view/auctionbid/auctionbid.component';
import { BidsperviewComponent } from './Components/BidsPerview/bidsperview/bidsperview.component';
import { BidrankComponent } from './Components/bidrank/bidrank/bidrank.component';
import { BidrankperviweComponent } from './Components/Bidrankperview/bidrankperviwe/bidrankperviwe.component';


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
    path: "",
    redirectTo: "/landing",
    pathMatch: "full",
  },
  {
      path:"landing",
      component: LandingPageComponent
  },
  {
      path:"Terms",
      component: TermsComponent
  },{
    path:"PrivacyPolicy",
    component: PrivacyComponent
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
    path:"forgetpass",
    component:ForgetpassComponent
  },
  {
    path:"resetpass",
    component:ResetpassComponent
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
    path:"Productdetils/:id",
    component:ProductDetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"nav",
    component:NavComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"AddProduct",
    component:AddProductComponent
  },
  {  
    path:"AddPost",
    component:AddPostComponent
  },{
    path:"MyDiamond",
    component:MyDiamondComponent
  }, {  
    path:"AddDemand",
    component:AddDemandComponent
  }, {
    path:"MyDemand",
    component:MyDemandComponent
  },  
  {
    path:"footer",
    component:FooterComponent
  },
  {
    path:"home/:userid",
    component:HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"auction",
    component:AuctionComponent
  },
  {
    path:"products",
    component:ProductsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"product",
    component:ProductsComponent
  },
  {
    path:"Wishlist/:userid",
    component:WishlistComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"Calculator",
    component:CalculatorComponent
  },
  {
    path:"Demand",
    component:DemandComponent,
    canActivate:[AuthGuard]
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
    path:"polishtype",
    component:PolishtypeComponent
  },
  {
    path:"polishshap",
    component:PolishshapComponent
  },
  {
    path:"postcolor",
    component:PostcolorComponent
  },
  {
    path:"postspecial",
    component:PostspecialComponent
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
  },
  {
    path:"auctionbid",
    component:AuctionbidComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"bidspreview",
    component:BidsperviewComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"bidrank",
    component:BidrankComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"bidrankperview",
    component:BidrankperviweComponent,
    canActivate:[AuthGuard]
  }
];