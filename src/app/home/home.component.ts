import { Component, OnInit,  ViewChild } from '@angular/core';
import 'hammerjs';
import { $ } from '../../../node_modules/protractor';

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
  state = 'in';
  defaultpos:number=0;
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  randomtops:any=[];

  constructor() { }

  
  ngOnInit() {
    document.addEventListener('pan', this.scroll, true);
    this.hover.nativeElement.addEventListener('mouseover', () => {
      this.graphic.nativeElement.style.transform="scale(0)";
    });

    this.hover.nativeElement.addEventListener('mouseout', () => {
      this.graphic.nativeElement.style.transform="scale(1)";
    });
    var getanimid = document.getElementById('anim1');
    var getanimid2 = document.getElementById('anim2');
    var getanimid3 = document.getElementById('anim3');
    console.log(getanimid);
    setTimeout(()=>{
        getanimid.setAttribute('dur', '30s');
        getanimid2.setAttribute('dur', '20s');
        getanimid3.setAttribute('dur', '10s');
    },700);
    

    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
  };

this.myParams = {
  "particles": {
      "number": {
          "value": 17,
          "density": {
              "enable": true,
              "value_area": 800
          }
      },
      "color": {
          "value": "#c7a88b"
      },
      "shape": {
          "type": "circle",
          "stroke": {
              "width": 0,
              "color": "#000"
          }
      },
      "opacity": {
          "value": 1,
          "random": true,
          "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.4,
              "sync": true
          }
      },
      "size": {
          "value": 160,
          "random": true,
          "anim": {
              "enable": true,
              "speed": 1,
              "size_min": 40,
              "sync": false
          }
      },
      "line_linked": {
          "enable": false,
          "distance": 200,
          "color": "#ffffff",
          "opacity": 1,
          "width": 2
      },
      "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": true,
          "attract": {
              "enable": true,
              "rotateX": 600,
              "rotateY": 1200
          }
      }
  }
}
}
    
  
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }
  

  scroll(){
    
  }

}
