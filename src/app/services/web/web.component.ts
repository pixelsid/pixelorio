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
  scrolled:boolean=false;
  isSingle:boolean=false;
  slideanim:any;
  clickedpopup:boolean=false;
  timeout:any;
  singleImageTransition = new TimelineLite();
  singleImage:any="assets/img/web/portfolio/1.jpg";
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
    var scroller=false;
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
      scroller=true;
      console.log(scroller);
    }
    else{
      $('.animatearea').css({
        transform: 'matrix(0, -1, 1, 0, -30, -'+this.windowwidth+')'
      });
      scroller=false;
    }
    $('.section-webfolio .flexi').each(function(){
      if(scroller){
        let offsettop = ($('.section-portfolio').outerHeight()-($(this).offset().top+$(this).outerHeight()+$(window).outerHeight()))/4;
        let doctop = e.target.scrollTop + $(window).outerHeight();
        console.log(doctop + '====' +offsettop)
        if(offsettop >= doctop){
          $(this).addClass('current');
        }
        else{
          $(this).removeClass('current');
        }
      }
      else{
        $(this).removeClass('current');
      }
    });
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
