import { Component, OnInit } from '@angular/core';
//import { IonicPage } from '@ionic/angular';

//@IonicPage()
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {
  saveData: any;
  name:string;
  email:any;
  phone:number;
  selectService:any;
  constructor() {
    
  }

  ngOnInit() {
    
  }
  savedata() {
    console.log("name",this.name);
    console.log("name",this.email);
    console.log("name",this.phone);
    console.log("name",this.selectService);

    this.saveData =
      {
        "loginInputParam":this.selectService,
        "Name": this.name,
        "email": this.email,
        "phone": this.phone,

      }
  }
}
