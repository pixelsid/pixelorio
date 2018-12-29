import { Component, OnInit,  ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { OwlCarousel } from 'ngx-owl-carousel';
import 'hammerjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('hoverme') hover:any;
  @ViewChild('movables') graphic:any;
  @ViewChild('cubes') cubes:any;
  @ViewChild('rightspans') rightspans:any;
  @ViewChild('leftspans') leftspans:any;
  @ViewChild('owl2') portslider:OwlCarousel;
  state = 'in';
  isChrome:boolean;
  defaultpos:number=0;
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  randomtops:any=[];
  portfolios=[
    {
      src:"assets/img/home-port/3.jpg",
      theme:"#9d0832",
    },
    {
      src:"assets/img/home-port/4.jpg",
      theme:"radial-gradient(#1f1655, #281a69)"
    },
    {
      src:"assets/img/home-port/5.jpg",
      theme:"#291eff"
    },
    {
      src:"assets/img/home-port/2.jpg",
      theme:"linear-gradient(#fffbf0, #fee6c2)"
    },
    {
      src:"assets/img/home-port/1.jpg",
      theme:"linear-gradient(to right, #6b4598 50%, #ffffff 50%)",
      srcwebp:"assets/img/home-port/1.webp"
    },
    {
      src:"assets/img/home-port/6.jpg",
      theme:"#f6ee31"
    },
    {
      src:"assets/img/home-port/7.jpg",
      theme:"#c1dbf2"
    },
    {
      src:"assets/img/home-port/8.jpg",
      theme:"#f0c6ee"
    },
    {
      src:"assets/img/home-port/9.jpg",
      theme:"#ffe44f"
    },
    {
      src:"assets/img/home-port/10.jpg",
      theme:"linear-gradient(to right, #204299, #221e1f)"
    },
    {
      src:"assets/img/home-port/11.jpg",
      theme:"#f7f7f7"
    },
    {
      src:"assets/img/home-port/12.jpg",
      theme:"linear-gradient(to right, #84bae6 50%, #c89e74 50%)"
    },
    {
      src:"assets/img/home-port/13.png",
      theme:"linear-gradient(to right, #d3dbdf 50%, #fa2534 50%)"
    },
    {
      src:"assets/img/home-port/14.gif",
      theme:"#234f66"
    }
  ]

  constructor() { }

  
  ngOnInit() {
    if(window.navigator.userAgent.indexOf('Firefox') > -1){
      
    }
}

  ngAfterViewInit(){
    setTimeout(()=>{
      this.portslider.reInit();
    $('.autoplayslider').addClass('loaded');
    },1000);
    
  }
    
  
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }
  

  scroll(){
    
  }

  lll(){
    alert('dsd');
  }

}
