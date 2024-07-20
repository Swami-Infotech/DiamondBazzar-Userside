import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/View/home/home.component';
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

import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastrModule } from 'ngx-toastr';
import { InterceptorTokenService } from './Common/interceptor-token.service';
import { DemandPostPreview2Component } from './DemandPost/DemandPostPreview2/view/demand-post-preview2/demand-post-preview2.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
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
    ProductComponent,
    ProductsComponent,
    wishlistComponent,
    CalculatorComponent,
    DemandComponent,
    MyprofileComponent,
    PolishpostComponent,
    Polishpost1Component,
    Polishpost2Component,
    RoughPostComponent,
    RoughPost1Component,
    DemandPostPreview2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorTokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
