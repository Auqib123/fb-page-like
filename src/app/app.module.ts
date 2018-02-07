import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule,HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FanOfPageComponent } from './fan-of-page/fan-of-page.component';
import { FanPageModule } from './fan-of-page/fan-page.module';


@NgModule({
  declarations: [
    AppComponent,
    FanOfPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
