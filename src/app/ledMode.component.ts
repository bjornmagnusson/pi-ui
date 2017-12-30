import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ledModeService } from './ledMode.service';

@Component({
  selector: 'ledMode',
  templateUrl: './ledMode.component.html',
  styleUrls: ['./ledMode.component.css'],
  providers: [ledModeService]
})

export class LedModeComponent {
  title = 'Led Mode'

  constructor(private ledModeService: ledModeService) {}

  clicked(event) {
    console.log('Toggling LED mode')
    this.ledModeService.getLedMode();
  }
}
