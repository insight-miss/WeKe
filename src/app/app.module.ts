import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnlineTestComponent } from './componet/online-test/online-test.component';
import {AppRoutingModule} from './app-routing.module';
import { HeadComponent } from './main-page/head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    OnlineTestComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
