import { Component } from '@angular/core';
import { Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashPage } from './splash/splash.page';
import { ModalController } from 'ionic-angular';
import { HomePage } from './home/home.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  rootPage:any = HomePage;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private modalCtrl: ModalController
  ) {
    // this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // this.splashScreen.hide();
      let splash = this.modalCtrl.create(SplashPage);
      splash.present();

    });
  }
}
