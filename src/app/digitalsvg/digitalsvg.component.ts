import { Component, OnInit } from '@angular/core';
import {TweenMax, Power2, TimelineLite, Linear, TweenLite, TimelineMax, SplitText} from "gsap/TweenMax";
import * as $ from 'jquery';

@Component({
  selector: 'app-digitalsvg',
  templateUrl: './digitalsvg.component.html',
  styleUrls: ['./digitalsvg.component.css']
})
export class DigitalsvgComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    var t1 = new TimelineMax();
    //t1.from('svg *', 5, {x:100, y:200, scale:0});
  }

}
