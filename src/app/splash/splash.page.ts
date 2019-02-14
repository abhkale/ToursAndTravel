import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { timer } from 'rxjs/internal/observable/timer';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  // showSplash:boolean=true;
  constructor(public viewCtrl: ViewController, public splashScreen: SplashScreen) { }

  ngOnInit() {
  }
  onViewDidEnter() {
    setTimeout(() => {
      this.viewCtrl.dismiss();
    }, 4000);


    // timer(3000).subscribe(() => this.showSplash = false)

  }
}
