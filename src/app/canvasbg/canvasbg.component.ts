import { Component, OnInit } from '@angular/core';
import { init, animate } from './canvasmovable.js';

@Component({
  selector: 'app-canvasbg',
  templateUrl: './canvasbg.component.html',
  styleUrls: ['./canvasbg.component.css']
})
export class CanvasbgComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    // init();
    // animate();
  }




}
