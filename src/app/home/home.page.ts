import { Component, ViewChild } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';
import { NavController } from 'ionic-angular';
import { LandingPagePage } from '../landing-page/landing-page.page';

// @Controller({
 
// })
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public aboutPage = LandingPagePage;
  @ViewChild('navCtrl') navCtrl: NavController;
  showSplash: boolean = true;
  constructor() {
    timer(3000).subscribe(() => this.showSplash = false)
  }
  goToMyPage() {
    // go to the MyPage component
   
    this.navCtrl.push(LandingPagePage);
  }

}
