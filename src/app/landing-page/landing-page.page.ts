import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
//import { IonicPage } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';


//@IonicPage()
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {
  formData: any;
  responseFlag: string;
  name: string;
  email: any;
  phone: number;
  selectService: any;
  constructor(public appService: AppServiceService,
    private toastr: ToastrService,
  ) {

  }

  ngOnInit() {

  }
  savedata() {
    console.log("name", this.name);
    console.log("name", this.email);
    console.log("name", this.phone);
    console.log("name", this.selectService);

    this.formData =
      {
        "loginInputParam": this.selectService,
        "Name": this.name,
        "email": this.email,
        "phone": this.phone,

      }
    // this.appService.saveData(JSON.stringify(this.formData)).subscribe((response: any) => {
    //   this.responseFlag = response;
    //   if (this.responseFlag && this.responseFlag == "") {
    //     this.toastr.success("Registered successfully");
    //   }
    // })
  }
}
