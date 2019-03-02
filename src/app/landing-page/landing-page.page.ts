import { Component, OnInit, OnChanges, AfterContentInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
//import { IonicPage } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


//@IonicPage()
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit, OnChanges {
  formData: any;
  responseFlag: string;
  name: string;
  email: any;
  phone: number;
  selectService: any;
  validatecustomer: FormGroup;
  showcommentbox: boolean = false;
  constructor(public appService: AppServiceService,
    public formBuilder: FormBuilder,
    private toastr: ToastrService, public router: Router
  ) {

  }

  ngOnInit() {
    this.validateForm();
  }
  ngOnChanges() {
  }
  selectedService(e:any){

    if (this.selectService == "other") {
      this.showcommentbox = true;
    }
    else {
      this.showcommentbox = false;
    }
  }
  validateForm() {
    this.validatecustomer = this.formBuilder.group({
      requiredService: ['', Validators.required],
      customerName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', Validators.required],
      // comment: ['', Validators.required]
    });
  }
  logForm() {

    console.log(this.validatecustomer.value);
    console.log("name", this.name);
    console.log("email", this.email);
    console.log("phone", this.phone);
    console.log("selectservice", this.selectService);

    this.formData =
      {
        "loginInputParam": this.selectService,
        "Name": this.name,
        "email": this.email,
        "phone": this.phone,

      }
    this.appService.saveData(this.formData).subscribe((response: any) => {
      this.responseFlag = response;
      if (this.responseFlag && this.responseFlag == "") {
        this.toastr.success("Registered successfully");
      }
    })
  }

  savedata() {
  }
  backToHome() {
    this.router.navigateByUrl('/home');
  }
}
