import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { TweenMax, Power2, TimelineLite, Linear, TweenLite, TimelineMax, SplitText, TextPlugin } from "gsap/TweenMax";
import * as $ from 'jquery';
import { SlickComponent } from 'ngx-slick';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class MobileappComponent implements OnInit {
  t1:any;
  t2:any;
  texts:any;
  figureanim:any;
  windowwidth = window.outerWidth;
  charstext:any;
  @ViewChild('slicker') slick: SlickComponent;
  slides = [
    {img: "assets/img/apps/1.jpg", textmain: "Mobile Apps Ui/Ux"},
    {img: "assets/img/slider2.jpg", textmain: "Mobile App Development"},
    {img: "assets/img/slider3.jpg", textmain: "Digital Marketing"}
  ];
  bigcarousel = [
    {img: "assets/img/bigcarousel1.jpg"},
    {img: "assets/img/bigcarousel2.jpg"},
    {img: "assets/img/bigcarousel3.jpg"}
  ];
  smallcarousel = [
    {maintext:'Consumption-Based IT:', desctext:'Through the implementation of information technology (IT), businesses have the ability to analysis modification in the worldwide souk faster. Quite a while ago, we found IT departments restricted to certain aspects of business, however in recent times, IT has evolved to fit the needs of the business they serve.'},
    {maintext:'Virtual or Augmented Reality:', desctext:'Virtual and augmented realities in business sites help forming value and make browsing immersive and tangible. This technological trend has the potential to broaden your business reach.'},
    {maintext:'Edge computing:', desctext:'With companies investing so much in autonomous vehicles and developing means for augmented cities, there are less chances of having data processing in cloud. Hence edge computing will be taking the forefront soon. Be a part of it.'}
  ];
  portfolios = [
    {image:'assets/img/port11.jpg', name: 'Herbal Beauty Salon', category:'Branding and Brochure'},
    {image:'assets/img/port12.jpg', name: 'Herbal Beauty Salon', category:'Branding and Brochure'},
    {image:'assets/img/port13.jpg', name: 'Herbal Beauty Salon', category:'Branding and Brochure'},
    {image:'assets/img/port14.jpg', name: 'Herbal Beauty Salon', category:'Branding and Brochure'},
    {image:'assets/img/port15.jpg', name: 'Herbal Beauty Salon', category:'Branding and Brochure'},
    {image:'assets/img/port16.jpg', name: 'Herbal Beauty Salon', category:'Branding and Brochure'},
    {image:'assets/img/port17.jpg', name: 'Herbal Beauty Salon', category:'Branding and Brochure'},
    {image:'assets/img/port18.jpg', name: 'Herbal Beauty Salon', category:'Branding and Brochure'},
    {image:'assets/img/port19.jpg', name: 'Herbal Beauty Salon', category:'Branding and Brochure'},
    {image:'assets/img/port20.jpg', name: 'Herbal Beauty Salon', category:'Branding and Brochure'},
  ];
  slideConfig = {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1, "fade":true, "autoplay": true, "autoplaySpeed": 6000, "infinite": true,"cssEase": 'ease-in-out'};
  slideConfigbig = {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1, "fade":true, "autoplay": true, "autoplaySpeed": 6000, "infinite": true,"cssEase": 'ease-in-out', asNavFor: '.carouselsmall'};
  slideConfigsmall = {"slidesToShow": 1, "arrows": true, "slidesToScroll": 1, "fade":true, "autoplay": true, "autoplaySpeed": 6000, "infinite": true,"cssEase": 'ease-in-out', asNavFor: '.carouselbig'};
  constructor() { }

  ngOnInit() {
  }

  nextSlide(index){
    this.slick.slickGoTo(index);
  }

  ngAfterViewInit(){
    $('.animatearea').css({
      transform: 'matrix(0, -1, 1, 0, -30, -'+this.windowwidth+')',
      'box-shadow':'rgba(0, 0, 0, 0.25) 0px 2px 50px'
    });
    this.figureanim = new TimelineLite;
    var mySplitText = new SplitText('.figure', {type:"words,chars"});
    var chars = mySplitText.chars;
    TweenLite.set(".figure", {perspective:400});
    this.figureanim.staggerFrom(chars, 1, {opacity:0, scale:0, y:-80, rotationX:-360, transformOrigin:"0% 50% -50"}, 0.1, "+=0");
    this.figureanim.pause();
//     var tl = new TimelineLite;
//     var mySplitText = new SplitText(".servicetitled", {type:"words,chars"}); 
//     var chars = mySplitText.chars;

// TweenLite.set(".servicetitled", {perspective:400});

// tl.staggerFrom(chars, 1, {opacity:0, scale:0, y:-80, rotationX:-180, transformOrigin:"0% 50% -50"}, 0.1, "+=0");


  }


  @HostListener('scroll') onscroll(e){
    console.log('window: ' + e.target.scrollTop + ', ' + 'Branding: '+$('.section-branding').offset().top);
    let newblur = e.target.scrollTop/20;
    $('.section-slide .slick-slide img').css({
      filter:'blur('+newblur+'px)'
    });
    if(e.target.scrollTop > $('.section-figures').offset().top){
      this.figureanim.resume();
    }
    if($('.section-branding').offset().top <= 0+200){
      $('.animatearea').css({
        transform: 'none'
      }); 
    }
    else{
      $('.animatearea').css({
        transform: 'matrix(0, -1, 1, 0, -30, -'+this.windowwidth+')'
      })
    }
  }

  calcheightwindow(){
    let windowheight = Math.round(window.innerHeight/2);
    return windowheight;
  }
}
