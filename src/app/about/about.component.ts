import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';
import * as $ from 'jquery';
import { SeoService } from '../seo.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild('newowl') newowl: OwlCarousel;
  startcrowl:any=0;
  windowwidth = window.outerWidth;
  windowresolution = window.screen.width * window.devicePixelRatio;
  isanimated:boolean=false;
  config:any={
		mousewheel:true
  }
  constructor(private seoService:SeoService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    // for seo
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
     )
     .subscribe((event) => {
       this.seoService.updateTitle(event['title']);
       //Updating Description tag dynamically with title
       this.seoService.updateDescription(event['title'] + event['description'])
     }); 
    $('.mainfeatures').css({
      transform: 'matrix(0, -1, 1, 0, -30, -'+this.windowwidth+')'
    });

    
  }

  scripttowork(ev){
    var getwidth = $('.technologiesshow .panoramastart img').outerWidth()-200;
    var getposwidth = Math.round(getwidth);
    var getoffset = $('.technologiesshow .panoramastart img').offset().left;
    var getposoffset = Math.abs(getoffset);
    console.log(getposwidth+' ===== '+getposoffset);
    if(getposoffset>=getposwidth){
      this.startcrowl-=60;
    }
    if(ev.deltaY>0){
      this.startcrowl+=60;
      $('.aboutmain').css('overflow','hidden auto');
    }
    else{
      this.startcrowl-=60;
      $('.aboutmain').css('overflow','hidden');
    }
    if(getposoffset<=getposwidth){
      $('.aboutmain').css('overflow','hidden auto');
    }
    $('.technologiesshow .panoramastart img').css({
        'transform' : 'translateX(-'+this.startcrowl+'px)'
    });
    $('.technologiesshow .panoramastart .pantitle').css({
      'transform' : 'translateX(-'+this.startcrowl+'px) scale('+this.startcrowl/1000+')'
    });
    $('.technologiesshow .panoramastart .form-area').css({
      'transform' : 'translateX(-'+this.startcrowl+'px)'
    });
  }
  ngAfterViewInit(){
    
    var owloks = $('.rofess');
    var opts = [1];
	// owloks.on('mousewheel', '.owl-stage', (e)=> {
	// 	if (e.originalEvent.deltaY>0 && $('.owl-item.active').next().offset().left <= $(document).outerWidth()) {
  //     this.newowl.next();
  //   } 
  //   else if (e.originalEvent.deltaY<=0 && $('.owl-item.active').prev().offset().left > $('.owl-item.active').outerWidth()) {
  //       this.newowl.previous();
  //   }
	// 	e.preventDefault();
  // });
  

    // $('.technologiesshow').on('mousewheel', (ev)=>{
    //   var startcrowls=1;
    //   console.log(startcrowls);
    //   if(ev.originalEvent.deltaY>0){
    //     startcrowls++;
    //     $('.technologiesshow .panoramastart').css({
    //       'transform' : 'translateX(-'+startcrowls+'px)'
    //     });
    //   }
    // });

  
  }

  @HostListener('scroll') onscroll(e) { 
    // if(e.target.scrollTop){
    // $('.diskbanner').addClass('scrolled');
    // $('.mainfeatures').addClass('scrolled'); 
    // $('.diskbanner').addClass('scrolledagain');
    // $('.mainfeatures').addClass('scrolledagain');
    // }
    // else{
    //   $('.diskbanner').removeClass('scrolled');
    //   $('.mainfeatures').removeClass('scrolled'); 
    //   setTimeout(function(){
    //   $('.diskbanner').removeClass('scrolledagain');
    //   $('.mainfeatures').removeClass('scrolledagain');
    //   },500);
    // }  
    
    if(e.target.scrollTop>this.calcheightwindow()){
      $('.diskbanner').addClass('scrolled');
      $('.mainfeatures').addClass('scrolled').css('transform', 'none');
    }
    else{
      $('.diskbanner').removeClass('scrolled');
      $('.mainfeatures').removeClass('scrolled').css({
        transform: 'matrix(0, -1, 1, 0, -30, -'+this.windowwidth+')'
      }); 
    }

    if(e.target.scrollTop>=$('.mainfeatures').outerHeight()+this.calcheightwindow()){
      let difference = window.innerHeight - $('.awardssec').innerHeight();
      let diffhalf = difference/2;
      $('.mainfeatures').addClass('scrolledtopro').css({
        transform: 'matrix(0, 0.8, -0.8, 0, 0, '+this.windowresolution+')'
      });
      $('.awardssec').addClass('scrolled');
      $('.awardssec').css({
        'margin-top':diffhalf+'px',
        'margin-bottom':diffhalf+'px',
      })
    }
    else{
      $('.mainfeatures').removeClass('scrolledtopro');
      $('.awardssec').removeClass('scrolled');
    }

    // var doctop = e.target.scrollTop;
    // var bannersecond = Math.abs($('.mainfeatures .bannerstart').offset().top );
    // var bannerheight = $('.mainfeatures .bannerstart').height();
    // console.log(doctop + ' ' + bannersecond + ' '  + bannerheight);

    // if(doctop+bannersecond >= bannerheight+2000){
    //   $('.awardssec').addClass('scrolled');
    //   $('.teamimg').addClass('bigged');
    //   $('.professionals').addClass('bigged');
    //   setTimeout(function(){
    //     $('.awardssec').addClass('scrolledagain');
    //   },500);
    // }

    if(e.target.scrollTop > $('.fixedillustration img').offset().top+1500){
      $('.fixedillustration').addClass('scrolled');
    }
    else{
      $('.fixedillustration').removeClass('scrolled');
    }
    
  }

  calcheightwindow(){
    let windowheight = Math.round(window.innerHeight/2);
    return windowheight;
  }

  aboutmovable(e){
    var change;
	    var xpos=e.clientX;var ypos=e.clientY;
      $('.imagesecs img').css({
        'transform' : "translate3d("+((0+(xpos/40))+"px"+","+(( 0+(ypos/5))+"px"+","+"0px)"+" "+"rotate("+xpos/10+"deg)"))
      });
      $('.imageshadow').css({
        'transform' : "translate3d(-"+((0+(xpos/60))+"px"+","+"-"+(( 0+(ypos/5))+"px"+","+"0px)"+" "+"rotate(-"+xpos/10+"deg)"))
      });
  }
  

}

