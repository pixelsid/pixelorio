import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';
import * as $ from 'jquery';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild('newowl') newowl: OwlCarousel;
  startcrowl:any=0;
  config:any={
		mousewheel:true
	}
  constructor() { }

  ngOnInit() {
    $(window).mousemove(function(e){
      var change;
	    var xpos=e.clientX;var ypos=e.clientY;
      $('.imagesecs img').css({
        'transform' : "translate3d("+((0+(xpos/40))+"px"+","+(( 0+(ypos/20))+"px"+","+"0px)"+" "+"rotate("+xpos/40+"deg)"))
      });
      $('.imageshadow').css({
        'transform' : "translate3d(-"+((0+(xpos/60))+"px"+","+"-"+(( 0+(ypos/20))+"px"+","+"0px)"+" "+"rotate(-"+xpos/40+"deg)"))
      });
    });

    
  }

  scripttowork(ev){
    var getwidth = $('.technologiesshow .panoramastart img').outerWidth()-200;
    var getposwidth = Math.round(getwidth);
    var getoffset = $('.technologiesshow .panoramastart img').offset().left;
    var getposoffset = Math.abs(getoffset);
    console.log(getposwidth+' ===== '+getposoffset);
    if(getposoffset>=getposwidth){
      this.startcrowl-=30;
    }
    if(ev.deltaY>0){
      this.startcrowl+=30;
      $('.aboutmain').css('overflow','auto');
    }
    else{
      this.startcrowl-=30;
      $('.aboutmain').css('overflow','hidden');
    }
    if(getposoffset<=getposwidth){
      $('.aboutmain').css('overflow','auto');
    }
    $('.technologiesshow .panoramastart img').css({
        'transform' : 'translateX(-'+this.startcrowl+'px)'
    });
  }
  ngAfterViewInit(){
    var owloks = $('.rofess');
    var opts = [1];
	owloks.on('mousewheel', '.owl-stage', (e)=> {
		if (e.originalEvent.deltaY>0 && $('.owl-item.active').next().offset().left <= $(document).outerWidth()) {
      this.newowl.next();
    } 
    else if (e.originalEvent.deltaY<=0 && $('.owl-item.active').prev().offset().left > $('.owl-item.active').outerWidth()) {
        this.newowl.previous();
    }
		e.preventDefault();
  });
  

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
    if(e.target.scrollTop){
    $('.diskbanner').addClass('scrolled');
    $('.mainfeatures').addClass('scrolled'); 
    setTimeout(function(){
    $('.diskbanner').addClass('scrolledagain');
    $('.mainfeatures').addClass('scrolledagain');
    },500);
    }
    else{
      $('.diskbanner').removeClass('scrolled');
      $('.mainfeatures').removeClass('scrolled'); 
      setTimeout(function(){
      $('.diskbanner').removeClass('scrolledagain');
      $('.mainfeatures').removeClass('scrolledagain');
      },500);
    }

    var doctop = e.target.scrollTop;
    var bannersecond = Math.abs($('.mainfeatures .bannerstart').offset().top );
    var bannerheight = $('.mainfeatures .bannerstart').height();
    console.log(doctop + ' ' + bannersecond + ' '  + bannerheight);

    if(doctop+bannersecond >= bannerheight+2000){
      $('.awardssec').addClass('scrolled');
      $('.teamimg').addClass('bigged');
      $('.professionals').addClass('bigged');
      setTimeout(function(){
        $('.awardssec').addClass('scrolledagain');
      },500);
    }

    if(e.target.scrollTop > $('.fixedillustration img').offset().top+1500){
      $('.fixedillustration').addClass('scrolled');
    }
    else{
      $('.fixedillustration').removeClass('scrolled');
    }
    
  }

}
