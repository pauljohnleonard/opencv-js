import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Examp1Component } from './examp1/examp1.component';
import { OpticalFlowComponent } from './optical-flow/optical-flow.component';

@NgModule({
  declarations: [
    AppComponent,
    Examp1Component,
    OpticalFlowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
