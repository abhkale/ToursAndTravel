import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
public todo:FormGroup;
  constructor(public router : Router,
    private formBuilder: FormBuilder,
  public toastr:ToastrService) { }

  ngOnInit() {
    this.validateForm();
  }
  validateForm(){
    this.todo = this.formBuilder.group({
      requiredService: ['', Validators.required],
      travelAgency: ['',Validators.required],
      coodinatorName:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      phone:['',Validators.required]
    });
    // if (this.todo.invalid) {
    //   this.toastr.error("Enter Valid Details");
    //   return;
    // }

  }
  logForm(){
    console.log(this.todo.value)
  }
  backToHome()
  {
    this.router.navigateByUrl('/home');
  }

}
