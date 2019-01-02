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
  isLoaded:boolean=false;
  @ViewChild('slicker') slick: SlickComponent;
  slides = [
    {img: "assets/img/apps/1.jpg", textmain: "Mobile Apps Ui/Ux"}
  ];
  bigcarousel = [
    {img: "assets/img/apps/itconsume.jpg"},
    {img: "assets/img/apps/vr.jpg"},
    {img: "assets/img/apps/edgecomputing.jpg"}
  ];
  smallcarousel = [
    {maintext:'Consumption-Based IT:', desctext:'Through the implementation of information technology (IT), businesses have the ability to analysis modification in the worldwide souk faster. Quite a while ago, we found IT departments restricted to certain aspects of business, however in recent times, IT has evolved to fit the needs of the business they serve.'},
    {maintext:'Virtual or Augmented Reality:', desctext:'Virtual and augmented realities in business sites help forming value and make browsing immersive and tangible. This technological trend has the potential to broaden your business reach.'},
    {maintext:'Edge computing:', desctext:'With companies investing so much in autonomous vehicles and developing means for augmented cities, there are less chances of having data processing in cloud. Hence edge computing will be taking the forefront soon. Be a part of it.'}
  ];
  portfolios = [
    {image:'assets/img/apps/portfolio/1.jpg', name: 'Kooklicious', category:'Restaurant App'},
    {image:'assets/img/apps/portfolio/2.jpg', name: 'Hireo', category:'Job Board'},
    {image:'assets/img/apps/portfolio/3.jpg', name: 'Gofight', category:'Tour & Travel'},
    {image:'assets/img/apps/portfolio/5.jpg', name: 'Appero', category:'Assistance'},
    {image:'assets/img/apps/portfolio/6.jpg', name: 'Stylestore', category:'Ecommerce'},
    {image:'assets/img/apps/portfolio/7.jpg', name: 'Appiest', category:'Entertainment'},
    {image:'assets/img/apps/portfolio/8.jpg', name: 'iplay', category:'Music & Sound'},
    {image:'assets/img/apps/portfolio/9.jpg', name: 'Expro', category:'Assistance'},
    {image:'assets/img/apps/portfolio/10.jpg', name: 'Instaview', category:'Social App'},
    {image:'assets/img/apps/portfolio/11.jpg', name: 'Appero', category:'Assistance'},
    {image:'assets/img/apps/portfolio/12.jpg', name: 'Gofight', category:'Tour & Travel'},
    {image:'assets/img/apps/portfolio/13.jpg', name: 'Gofight', category:'Tour & Travel'},
    {image:'assets/img/apps/portfolio/14.jpg', name: 'Appeasy', category:'Fitness'},
    {image:'assets/img/apps/portfolio/15.jpg', name: 'Organizo', category:'Task Management'},
    {image:'assets/img/apps/portfolio/16.jpg', name: 'Gofight', category:'Tour & Travel'},
    {image:'assets/img/apps/portfolio/17.jpg', name: 'Appero', category:'Assistance'}
  ];
  slideConfig = {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1, "fade":true, "autoplay": true, "autoplaySpeed": 6000, "infinite": true,"cssEase": 'ease-in-out'};
  slideConfigbig = {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1, "fade":true, "autoplay": true, "autoplaySpeed": 6000, "infinite": true,"cssEase": 'ease-in-out', asNavFor: '.carouselsmall'};
  slideConfigsmall = {"slidesToShow": 1, "arrows": true, "slidesToScroll": 1, "fade":true, "autoplay": true, "autoplaySpeed": 6000, "infinite": true,"cssEase": 'ease-in-out', asNavFor: '.carouselbig'};
  constructor() { }

  ngOnInit() {
    this.isLoaded=true;
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
