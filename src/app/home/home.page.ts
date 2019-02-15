import { Component } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showSplash: boolean = true;
  constructor() {
    timer(3000).subscribe(() => this.showSplash = false)
  }

}
