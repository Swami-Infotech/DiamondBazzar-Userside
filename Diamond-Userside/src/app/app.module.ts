import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/View/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
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



export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    OtpComponent,
    SignupComponent,
    ProfileComponent,
    PreferenceComponent,
    CompanydetailsComponent,
    AuctionComponent,
    NavComponent,
    FooterComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]

      }
    }
    )
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
