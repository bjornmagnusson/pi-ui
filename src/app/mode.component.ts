import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Mode } from './mode';
import { ModeService } from './mode.service';

@Component({
  selector: 'mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.css'],
  providers: [ModeService]
})

export class ModeComponent implements OnInit {
  title = 'Mode';
  mode: Mode = {name: "", value: 0};

  constructor(private modeService: ModeService) {}

  getMode(): void {
      this.modeService.getMode().then(mode => this.mode = mode);
  }

  ngOnInit(): void {
      this.getMode();
  }
}
