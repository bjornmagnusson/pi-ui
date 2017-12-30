import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GpiosComponent } from './gpios.component';
import { ModeComponent } from './mode.component';
import { LedModeComponent } from './ledMode.component';

@NgModule({
  declarations: [
    GpiosComponent,
    ModeComponent,
    LedModeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [GpiosComponent,ModeComponent,LedModeComponent]
})
export class AppModule { }
