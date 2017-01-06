import { Injectable } from '@angular/core';
import { Gpio } from './gpio';
import { GPIOS } from './mock-gpios';

@Injectable()
export class GpioService {
    getGpios(): Promise<Gpio[]> {
        return Promise.resolve(GPIOS);
    }
}
