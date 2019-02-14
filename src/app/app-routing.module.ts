import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageModule } from './home/home.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'splash', loadChildren: './splash/splash.module#SplashPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
