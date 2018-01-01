import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Mode } from './mode';

@Injectable()
export class ModeService {
  private modeUrl = 'http://192.168.0.105:8080/v1/mode';

  constructor(private http: Http) { }

  getMode(): Promise<Mode> {
    return this.http.get(this.modeUrl)
               .toPromise()
               .then(response => response.json() as Mode)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
