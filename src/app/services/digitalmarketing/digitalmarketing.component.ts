import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { TweenMax, Power2, TimelineLite, Linear, TweenLite, TimelineMax, SplitText, TextPlugin } from "gsap/TweenMax";
import * as $ from 'jquery';
import { SlickComponent } from 'ngx-slick';

@Component({
  selector: 'app-digitalmarketing',
  templateUrl: './digitalmarketing.component.html',
  styleUrls: ['./digitalmarketing.component.css']
})
export class DigitalmarketingComponent implements OnInit {
  t1:any;
  t2:any;
  texts:any;
  figureanim:any;
  isLoaded:boolean=false;
  windowwidth = window.outerWidth;
  charstext:any;
  @ViewChild('slicker') slick: SlickComponent;
  slides = [
    {img: "assets/img/dm/1.jpg", textmain: "Digitalize the web"}
  ];
  bigcarousel = [
    {img: "assets/img/dm/ceo.jpg"},
    {img: "assets/img/dm/aibots.jpg"},
    {img: "assets/img/dm/multiclouds.jpg"}
  ];
  smallcarousel = [
    {maintext:'CEOs and taking Charge:', desctext:'Digital transformation is the profound transformation. The task of bringing digital transformation is often delegated to IT or Marketing departments and seldom from the top. Let’s rise above the challenge to improve business processes and develop new capabilities and business models.'},
    {maintext:'Better AI for Chatbots:', desctext:'We all may have had a frustrating experience with the limited scope in conversation with Chatbots especially when we are attempting to find a customer service representative. However, with the new AI developments in language and sentiment analytics, businesses should prepare for a new and improved Chatbot that will enhance consumer satisfaction.'},
    {maintext:'Multi-cloud:', desctext:'Cloud spaces have been on the evolving side for a while now. We help businesses to establish a strong online presence so that they can perform better on the web. Because the concept of Multi-cloud is prophesized to take over soon owing to their commitment to connecting clouds.'}
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
