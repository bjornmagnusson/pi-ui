import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Gpio } from './gpio';
import { GpioService } from './gpios.service';

@Component({
  selector: 'gpios',
  templateUrl: './gpios.component.html',
  styleUrls: ['./gpios.component.css'],
  providers: [GpioService]
})

export class GpiosComponent implements OnInit {
  title = 'GPIOs';
  gpios: Gpio[];

  interval: any;

  constructor(private gpioService: GpioService) {}

  getGpios(): void {
      console.log("Fetching GPIOs")
      this.gpioService.getGpios().toPromise().then(gpios => this.gpios = gpios);
  }

  ngOnInit(): void {
      this.getGpios();
      this.interval = setInterval(() => {
        this.getGpios();
    }, 1000);
  }
}
