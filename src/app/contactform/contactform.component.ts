import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
  uname:any;
  mail:any;
  message:any;
  phone:any;
  isValid:boolean;
  phoneregex:any=/^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/;
  emailregex:any=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private http: Http) { }

  ngOnInit() {
  }

  validateform(){
    if(!this.uname && !this.mail && !this.message){
      this.isValid=false;
    }
    else{
      this.isValid=true;
    }
    if(!this.mail || !this.emailregex.test(this.mail)){
      this.isValid=false;
    }
    else{
      this.isValid=true;
    }
    if(!this.message){
      this.isValid=false;
    }
    if(!this.phone){
      
    }
    else if(this.phone && this.phoneregex.test(this.phone)){
      this.isValid=true;
    }
    else{
      this.isValid=false;
    }
    
  }
  
  sendform(ev){
    this.validateform();
    let dataform = {
      uname:this.uname,
      mail:this.mail,
      phone:this.phone,
      message:this.message
    }
    let formdata = new FormData;
    formdata.append('uname', this.uname);
    formdata.append('mail', this.mail);
    formdata.append('phone', this.phone);
    formdata.append('message', this.message);
    if(this.isValid){
      $('.mouse').addClass('sendinganim');
      ev.target.innerText = "Sending....";
      this.http.post('http://pixelorio.com/mail.php', formdata).subscribe(res=>{
        $('.mouse').removeClass('sendinganim');
        ev.target.innerText = "Sent successfully";
        this.message = this.mail = this.phone = this.uname = "";
        ev.target.setAttribute('disabled', 'disabled');
        setTimeout(()=>{
          ev.target.removeAttribute('disabled');
          ev.target.innerText = "Send";
        },5000);
      });
    }
    else{
      
    }
  }

}
