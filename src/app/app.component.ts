import {Component} from '@angular/core';
import {GtagService} from './gtag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GtagService]
})
export class AppComponent {
  constructor(gtagService: GtagService) {
    gtagService.pageView();
  }
}
