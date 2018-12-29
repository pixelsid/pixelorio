import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private spinner: NgxSpinnerService) { }

  showloading(){
    this.spinner.show();
  }
  hideloading(){
      this.spinner.hide();
  }
}
