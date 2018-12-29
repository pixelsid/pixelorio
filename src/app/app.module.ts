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
import { ParticlesModule } from 'angular-particle';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { MouseWheelDirective } from './app.component';

import * as $ from 'jquery';
import { OwlModule } from 'ngx-owl-carousel';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 5,
  loop:true,
  spaceBetween:40
};


const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { state: 'home' } },
  { path: 'services', component: ServicesComponent, data: { state: 'services' } },
  { path: 'contact', component: ContactComponent, data: { state: 'contact' } },
  { path: 'about', component: AboutComponent, data: { state: 'about' } },
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
    MouseWheelDirective 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ParticlesModule,
    SwiperModule,
    OwlModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    )
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
