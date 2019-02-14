import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './home/home.module';
// import { IonicStorageModule } from '@ionic/storage';
// import { HomePage } from './home/home.page';
// import { SplashPage } from './splash/splash.page';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [AppComponent],
  imports: [BrowserModule,AppRoutingModule,HomePageModule,IonicModule.forRoot(AppComponent)],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
