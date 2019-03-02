import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private toastr: ToastrService,public router : Router) { }

  ngOnInit() {
  }
  gotosignup(){
    // this.toastr.success("Registered successfully");
  }
  backToHome() {
    this.router.navigateByUrl('/login');
  }
}
