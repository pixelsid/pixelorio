import { Component, OnInit } from '@angular/core';
import {TweenMax, Power2, TimelineLite, Linear, TweenLite, TimelineMax, SplitText} from "gsap/TweenMax";
import * as $ from 'jquery';

@Component({
  selector: 'app-websvg',
  templateUrl: './websvg.component.html',
  styleUrls: ['./websvg.component.css']
})
export class WebsvgComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    // $(window).mousemove(function(e){
    //   var change;
    //   var xpos=e.clientX;var ypos=e.clientY;
    //   $('#websvg *').each(function(){
    //     $(this).css({
    //       'transform' : "translate3d("+((0+(xpos/100))+"px"+","+(( 0+(ypos/100))+"px"+","+"0px)"))
    //     });
    //   });
      
    // });
    var tl = new TimelineMax;
    tl.from('.maintransform', 1, {transform:'scale(0)'});
    tl.from('.code', 1, {y:'-100%', transform:'scale(0)'});
    tl.from('.linesofcode', 1, {y:'100%', transform:'scale(0)'});
    var t2 = new TimelineMax({ repeat: -1, delay:3 });
    t2.to('.basket', 1, {x:'200%', y: '-200%', rotation:0});
    t2.to('.basket', 1, {x:'-200%', y: '-400%'});
    t2.to('.basket', 1, {x:'-800%', y: '-300%'});
    t2.to('.basket', 1, {x:'0%', y: '0%'});
  }

}
