import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { TweenMax, Power2, TimelineLite, Linear, TweenLite, TimelineMax, SplitText, TextPlugin } from "gsap/TweenMax";
import * as $ from 'jquery';
import { SlickComponent } from 'ngx-slick';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {
  t1:any;
  t2:any;
  texts:any;
  charstext:any;
  slideanim:any;
  windowwidth = window.outerWidth;
  windowresolution = window.screen.width * window.devicePixelRatio;
  figureanim:any;
  bannerblur = 0;
  isLoaded:boolean=false;
  @ViewChild('slicker') slick: SlickComponent;
  slides = [
    {img: "assets/img/web/1.jpeg", textmain: "Web Space Design"},
    {img: "assets/img/web/2.jpg", textmain: "PSD Mockups to Web"}
  ];
  bigcarousel = [
    {img: "assets/img/web/blockchain.jpg"},
    {img: "assets/img/web/ai.jpg"},
    {img: "assets/img/web/dataanalysis.jpeg"}
  ];
  smallcarousel = [
    {maintext:'Blockchain Technology:', desctext:'Cryptocurrency, Blockchain, or ICO. Call it anything, nowadays Blockchain website development is the most promising business app technology. Blockchain technology made a huge impact with the Bitcoin phenomenon. It has got the potential, if companies can figure out a way for lay users to understand and see its value. We can assist you in every aspect of it, we mean Blockchain.'},
    {maintext:'Machine Learning to AI:', desctext:'This is the era of AI, there is a huge increase in the use of data analytics and their tools. Machine learning and AI are the future of all things business and pretty soon, a machine could be what is interacting with your consumers. Try Artificial Intelligence, Try Business Intelligence.'},
    {maintext:'Data Protection:', desctext:'As we found ourselves immersed in the Facebook scandal of lack of user data protection that shook users to start the #deletefacebook tag, we can surely expect a boom in data protection means in coming times. But when it comes to website or application, data protection is a must-have.'}
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
  constructor() { 
      
  }

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
