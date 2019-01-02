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
  isSingle:boolean=false;
  slideanim:any;
  clickedpopup:boolean=false;
  timeout:any;
  singleImageTransition = new TimelineLite();
  singleImage:any="assets/img/web/portfolio/1.jpg";
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

  webfolios = [
    {image:'assets/img/web/portfolio/1.jpg', name: 'The Wild Adventure', category:'Ui/Ux', favorite:15},
    {image:'assets/img/web/portfolio/2.jpg', name: 'The Right Book', category:'Ui/Ux', favorite:16},
    {image:'assets/img/web/portfolio/3.jpg', name: 'Pitcrew', category:'Web Development', favorite:18},
    {image:'assets/img/web/portfolio/4.jpg', name: 'Seeking Auto', category:'Ui/Ux', favorite:9},
    {image:'assets/img/web/portfolio/5.jpg', name: 'Star Gems & Jewellery', category:'Ui/Ux', favorite:8},
    {image:'assets/img/web/portfolio/6.jpg', name: 'Graphic Nation', category:'Ui/Ux', favorite:12},
    {image:'assets/img/web/portfolio/7.jpg', name: 'Constructo - A web template', category:'Ui Mockups', favorite:11},
    {image:'assets/img/web/portfolio/8.jpg', name: 'Law & General Agency', category:'Ui Mockups', favorite:13},
    {image:'assets/img/web/portfolio/9.jpg', name: 'Neat Sweepers - A web template', category:'Ui Mockups', favorite:7},
    {image:'assets/img/web/portfolio/10.jpg', name: 'News Buzz - A web template', category:'Ui Mockups', favorite:14},
    {image:'assets/img/web/portfolio/11.jpg', name: 'Nypen', category:'Ui/Ux', favorite:10},
    {image:'assets/img/web/portfolio/12.jpg', name: 'Nomadic', category:'Ui/Ux', favorite:17},
    {image:'assets/img/web/portfolio/13.jpg', name: 'Onsite Go', category:'Ui/Ux', favorite:6},
    {image:'assets/img/web/portfolio/14.jpg', name: 'Estate 365 - A web template', category:'Ui Mockups', favorite:5},
    {image:'assets/img/web/portfolio/15.jpg', name: 'Radio Training Institute', category:'Ui/Ux', favorite:3},
    {image:'assets/img/web/portfolio/16.jpg', name: 'Estate 366 - A web template', category:'Ui Mockups', favorite:19},
    {image:'assets/img/web/portfolio/17.jpg', name: 'Bakery', category:'Ui/Ux', favorite:2},
    {image:'assets/img/web/portfolio/18.jpg', name: 'Travel - A web template', category:'Ui Mockups', favorite:1},
    {image:'assets/img/web/portfolio/19.jpg', name: 'Yoga - A web template', category:'Ui Mockups', favorite:4},
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

  showSingle(e:any, index:any){
    this.isSingle=true;
    this.clickedpopup=false;
    this.singleImage=this.webfolios[index].image;
  }

  hideSingle(){
    this.clickedpopup=true;
    setTimeout(()=>{
      this.isSingle=false;
    },1000);
  }

  getStyles(){
    return {'display' : this.isSingle ? 'block' : 'none', 'animation' : this.clickedpopup || !this.isSingle ? 'notransform 1s ease forwards' : 'shaker 1s ease both'}
  }

}
