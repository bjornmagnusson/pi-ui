import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ledModeService {
  private ledModeUrl = 'http://192.168.0.105:8080/v1/ledMode';

  constructor(private http: Http) { }

  getLedMode() {
    return this.http.get(this.ledModeUrl)
               .toPromise()
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
