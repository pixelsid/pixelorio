import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  uname:any='';
  mail:any='';
  message:any='';
  phone:any='';
  isValid:boolean;
  phoneregex:any=/^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/;
  emailregex:any=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private http: Http) { }

  ngOnInit() {
    
  }
  
  sendform(){
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
      this.http.post('http://pixelorio.com/mail.php', formdata).subscribe(res=>{
        console.log(res);
      });
    }
  }

  validateform(){
    if(!this.uname){
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
    else{
      this.isValid=true;
    }
    if(!this.phone){
      this.isValid=true;
    }
    else if(this.phone && this.phoneregex.test(this.phone)){
      this.isValid=true;
    }
    else{
      this.isValid=false;
    }
  }

}
