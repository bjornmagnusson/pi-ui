import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ledModeService {
  private ledModeUrl = '/ledMode';

  constructor(private http: Http) { }

  getLedMode() {
    return this.http.post(this.ledModeUrl, '')
               .toPromise()
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
