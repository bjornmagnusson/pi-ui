import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Gpio } from './gpio';
import { GpioService } from './gpio.service';

@Component({
  selector: 'gpios',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GpioService]
})

export class GpiosComponent implements OnInit {
  title = 'GPIOs';
  gpios: Gpio[];

  constructor(private gpioService: GpioService) {}

  getGpios(): void {
      this.gpioService.getGpios().then(gpios => this.gpios = gpios);
  }

  ngOnInit(): void {
      this.getGpios();
  }
}
