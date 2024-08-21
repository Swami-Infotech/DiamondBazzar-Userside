import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { InterceptorTokenService } from './Components/Common/interceptor-token.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { InterceptorService } from './Common/interceptor.service';
import { provideAnimations } from '@angular/platform-browser/animations';
import { InterceptorService } from './Components/Common/interceptor.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
export const appConfig: ApplicationConfig = {
  providers: [
    // provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(),
    provideHttpClient(),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    provideAnimations(), provideAnimationsAsync(), provideAnimationsAsync(),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }).providers!]

  
};
