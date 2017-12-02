import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

declare let gtag: Function;

@Injectable()
export class GtagService {

  constructor() { }

  pageView() {
    if (environment.production) {
      gtag('config', environment.GA_TRACKING_ID);
    }
  }
}
