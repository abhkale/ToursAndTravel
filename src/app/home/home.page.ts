import { Component, ViewChild } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';
import { NavController } from '@ionic/angular';

import { Router } from '@angular/router';

// @Controller({
 
// })
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  @ViewChild('navCtrl') navCtrl: NavController;
  showSplash: boolean = true;
  constructor(public router : Router) {
    timer(3000).subscribe(() => this.showSplash = true)
  }
  goToMyPage() {
    // go to the MyPage component
    this.router.navigateByUrl('/landing-page');
    
  }

  goToAgentAsUserPage() {
    // go to the MyPage component
    this.router.navigateByUrl('/dashboard');
  }

}
