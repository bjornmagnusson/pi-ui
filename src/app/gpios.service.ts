import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

import { Gpio } from './gpio';
import { GPIOS } from './mock-gpios';

@Injectable()
export class GpioService {
    getMockedGpios(): Promise<Gpio[]> {
        return Promise.resolve(GPIOS);
    }

    private gpiosUrl = '/gpios';

  constructor(private httpc: HttpClient) { }

  getGpios():Observable<any>{
            return this.httpc.get(this.gpiosUrl);
        }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
