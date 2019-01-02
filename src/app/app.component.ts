import { Component, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';
import {TweenMax, Power2, TimelineLite, Linear, TweenLite, TimelineMax, SplitText} from "gsap/TweenMax";
import { Directive, Output, HostListener, EventEmitter } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {OwlCarousel} from 'ngx-owl-carousel';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { 
	Router, NavigationStart, NavigationCancel, NavigationEnd
} from '@angular/router';
import { LoaderService } from './loader.service';


@Directive({ selector: '[mouseWheel]' })
export class MouseWheelDirective {
  @Output() mouseWheelUp = new EventEmitter();
  @Output() mouseWheelDown = new EventEmitter();

  @HostListener('mousewheel', ['$event']) onMouseWheelChrome(event: any) {
    this.mouseWheelFunc(event);
  }

  @HostListener('DOMMouseScroll', ['$event']) onMouseWheelFirefox(event: any) {
    this.mouseWheelFunc(event);
  }

  @HostListener('onmousewheel', ['$event']) onMouseWheelIE(event: any) {
    this.mouseWheelFunc(event);
  }

  mouseWheelFunc(event: any) {
	var event = window.event || event; // old IE support
	var bgid = document.getElementById('bgmenu');
    var delta = Math.max(-0.99, Math.min(1, (event.wheelDelta || -event.detail)));
    if(delta > 0) {
		this.mouseWheelUp.emit(event);
		$('.owl-prev').click();
		bgid.style.transform="none";
    } else if(delta < 0) {
		this.mouseWheelDown.emit(event);
		$('.owl-next').click();
		bgid.style.transform="translate(0,"+event.deltaY+"px)";
    }
    // for IE
    event.returnValue = false;
    // for Chrome and Firefox
    if(event.preventDefault) {
        event.preventDefault();
    }
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
	trigger('routerTransition', [
		transition('* <=> *', [
		  /* order */
		  /* 1 */ query(':enter, :leave', style({ position: 'fixed', width:'100%' })
			,{ optional: true }),	
		  /* 2 */ group([  // block executes in parallel
			query(':enter', [
			  style({ transform: 'translateX(100%)' }),
			  animate('1s ease-in-out', style({ transform: 'translateX(0%)' }))
			], { optional: true }),
			query(':leave', [
			  style({ transform: 'translateX(0%)' }),
			  animate('1s ease-in-out', style({ transform: 'translateX(-100%)' }))
				], { optional: true }),
		  ])
		])
	  ])
	]
})

export class AppComponent {
	@ViewChild('owlElement') owlElement: OwlCarousel;
	@ViewChild('switchroutes') routeswitch:any;
	title = 'app';
	paramblue: object = {};
	paramwhite: object = {};
	myStyle: object = {};
	myParams: object = {};
	width: number = 100;
	height: number = 100;
	currentPageName:any="Home";
	router:any;
	spanner:number = 0;
	config:any={
		mousewheel:true
	}

  constructor(private _router: Router, private loader: LoaderService ) {
	this.router = _router;
	}
	
	// for router swiper
	moveright(e){
		this.spanner+=1;
		console.log(this.spanner);
		if(this.spanner>=80){
			return false;
		}
		this.routeswitch.nativeElement.style.transform="translateX("+this.spanner+"%)";
		
	}

	call(){
		self.location.href='tel:(+91) 9355125135';
	}

	mail(){
		self.location.href='mailto:sayhello@pixelorio.com';
	}

	moveleft(e){
		this.spanner-=1;
		console.log(this.spanner);
		if(this.spanner<=2){
			return false;
		}
		this.routeswitch.nativeElement.style.transform="translateX("+this.spanner+"%)";
	}

	swipeforroutes(){
		if(this.spanner<=2 ){
			this.spanner=2;
			this.routeswitch.nativeElement.style.transform="translateX("+this.spanner+"%)";
			this._router.navigateByUrl('');
			this.currentPageName="Home";
		}
		if(this.spanner>4 && this.spanner<=25 ){
			this.spanner=25;
			this.routeswitch.nativeElement.style.transform="translateX("+this.spanner+"%)";
			this._router.navigateByUrl('/about');
			this.currentPageName="About";
		}
		if(this.spanner>26 && this.spanner<=50 ){
			this.spanner=50;
			this.routeswitch.nativeElement.style.transform="translateX("+this.spanner+"%)";
			this._router.navigateByUrl('/services');
			this.currentPageName="Services";
		}
		if(this.spanner>51 && this.spanner<=79 ){
			this.spanner=79;
			this.routeswitch.nativeElement.style.transform="translateX("+this.spanner+"%)";
			this._router.navigateByUrl('/contact');
			this.currentPageName="Contact";
		}
	}

  // For home slide

// for menu horizontal
ngAfterViewInit(){
	// var owlok = $('.owl-1');
	// owlok.on('mousewheel', '.owl-stage', (e)=> {
	// 	console.log(e.originalEvent);
	// 	if (e.originalEvent.deltaY>0) {
	// 		$('.owl-next').click();
	// 	} else {
	// 		$('.owl-prev').click();
	// 	}
	// 	e.preventDefault();
	// });
	var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if(!isChrome){
      $('#iframeAudio').remove()
    }
  else{
     $('#audio').remove() //just to make sure that it will not have 2x audio in the background 
	}
	$(window).blur(function(){
		$('#iframeAudio').attr('src', '');
	});
	$(window).focus(function(e) {
    $('#iframeAudio').attr('src','http://pixelorio.com/assets/sounds/bgpixel.mp3');
	});
	$('*').click(function(){
		$('#audioclick')[0].play();
	});
}
ngOnInit(){
	//this.loader.showloading();
	// $(document).mousemove(function(){
	// 	$('#audio')[0].play();
	// });
	$('.menu-opener').click(function(){
	$(this).toggleClass('opened');
	$('#hor-menu').toggleClass('opened');
	});

	$('#hor-menu a').click(function(){
		$('.menu-opener').removeClass('opened');
		$('#hor-menu').removeClass('opened');
	});

	$('#hor-menu li a').click(function(){
		$(this).parent().parent('.owl-item').addClass('center');
	});

// for logo hide after page loads

setTimeout(function(){
	// $('.loader').fadeOut('slower');
	$('.e-loadholder').addClass('loaded');
	$('.loader').addClass('loaded');
	$('.background-main').addClass('loaded');
},5000);


	var $moveable = $('.mouse');
	$(document).click(function(){
		$('.mouse').addClass('clicked');
		setTimeout(function(){
			$('.mouse').removeClass('clicked');
		},600);	
	});
	

	



	$(document).mousemove(function(e){
		var rotate = Math.random()*100;
		var x = e.clientX;
		var y = e.clientY;
		var newposX = x - 12;
		var newposY = y - 12;
		$moveable.css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
		// $moveable.addClass('moved');
		// setTimeout(function(){
		// 	$moveable.removeClass('moved');
		// },700);
		
	});

	$(document).on('mousedown', function(e) { 
		if( e.which == 2 ) {
			 e.preventDefault();
		}
 });
 

	

	//$('#audio')[0].attr('autoplay', 'autoplay');
	
}

getState(outlet) {
		return outlet.activatedRouteData.state;
}



spreadme(){
	var tl = new TimelineLite;
    var mySplitText = new SplitText(".portfolio-link a", {type:"words,chars"}); 
    var chars = mySplitText.chars;

TweenLite.set(".portfolio-link a", {perspective:400});

tl.staggerFrom(chars, 2, {opacity:0, scale:0, y:-80, rotationX:-180, transformOrigin:"0% 50% -50"}, 0.1, "+=0");
}
	

}