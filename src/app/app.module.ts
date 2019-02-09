import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { MouseWheelDirective } from './app.component';

import * as $ from 'jquery';
import { OwlModule } from 'ngx-owl-carousel';
import { ContactformComponent } from './contactform/contactform.component';
import { WebComponent } from './services/web/web.component';
import { MobileappComponent } from './services/app/app.component';
import { DigitalmarketingComponent } from './services/digitalmarketing/digitalmarketing.component';
import { WebsvgComponent } from './websvg/websvg.component';
import { AppsvgComponent } from './appsvg/appsvg.component';
import { DigitalsvgComponent } from './digitalsvg/digitalsvg.component';
import { DetailsComponent } from './services/details/details.component';

import { LoaderService } from './loader.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CanvasbgComponent } from './canvasbg/canvasbg.component';
import { SlickModule } from 'ngx-slick';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 5,
  loop:true,
  spaceBetween:40
};


const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { state: 'home' } },
  { path: 'services', component: ServicesComponent, data: { state: 'services' }},
  {path:'services/web', component: WebComponent, data: {state:'web'}},
  {path:'services/web/details', component: DetailsComponent, data: {sate:'details'}},
  {path:'services/app', component: MobileappComponent, data: {state:'app'}},
  {path:'services/app/details', component: DetailsComponent, data: {sate:'details'}},
  {path:'services/digitalmarketing', component: DigitalmarketingComponent, data: {state:'digital'}},
  {path:'services/digitalmarketing/details', component: DetailsComponent, data: {sate:'details'}},
  { path: 'contact', component: ContactComponent, data: { state: 'contact' } },
  { path: 'about', component: AboutComponent, data: { state: 'about', title:'About Us', description:'Description Meta Tag Content' } },
  { path: 'clientele', component: TestimonialComponent, data: { state: 'clientele' } } 
];


// export const AppRouting = RouterModule.forRoot(appRoutes, { 
//   useHash: true
// });

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    TestimonialComponent,
    MouseWheelDirective,
    ContactformComponent,
    WebComponent,
    WebsvgComponent,
    MobileappComponent,
    AppsvgComponent,
    DigitalmarketingComponent,
    DigitalsvgComponent,
    CanvasbgComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SwiperModule,
    OwlModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgxSpinnerModule,
    SlickModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    ),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
