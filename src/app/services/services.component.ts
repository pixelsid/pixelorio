import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.gridservice').each(function(){
      $(this).mousemove(function(e){
        var change;
        var xpos=e.clientX;var ypos=e.clientY;
        $(this).find($('a')).css({
          'transition':'0.5s ease-out all',
          'transform' : "translate3d("+((0+(xpos/60))+"px"+","+(( 0+(ypos/50))+"px"+","+"0px)"))
        });
      });
      $(this).mouseout(function(e){
        var change;
        var xpos=e.clientX;var ypos=e.clientY;
        $(this).find($('a')).css({
          'transform' : "none"
        });
      });
    });
  }

}
