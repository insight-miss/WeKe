import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { TestComponent } from './onlineExam/testExam/test/test.component';
import {TestService} from './onlineExam/testExam/service/test.service';
import {HttpClientModule} from '@angular/common/http';
import { DetailsComponent } from './onlineExam/examDetails/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
