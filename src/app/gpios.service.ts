import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Gpio } from './gpio';
import { GPIOS } from './mock-gpios';

@Injectable()
export class GpioService {
    getMockedGpios(): Promise<Gpio[]> {
        return Promise.resolve(GPIOS);
    }

    private gpiosUrl = '/gpios';

  constructor(private http: Http) { }

  getGpios(): Promise<Gpio[]> {
    return this.http.get(this.gpiosUrl)
               .toPromise()
               .then(response => response.json() as Gpio[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
