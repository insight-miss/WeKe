import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { TestComponent } from './onlineExam/testExam/test/test.component';
import {TestService} from './onlineExam/testExam/service/test.service';
import {HttpClientModule} from '@angular/common/http';
import { DetailsComponent } from './onlineExam/examDetails/details/details.component';
import {HeadComponent} from './main-page/head/head.component';
import { BodyComponent } from './main-page/body/body.component';
import { RankComponent } from './onlineExam/ExamRank/rank/rank.component';
import {DetailsService} from './onlineExam/examDetails/service/details.service';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DetailsComponent,
    HeadComponent,
    BodyComponent,
    HeadComponent,
    RankComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TestService,
    DetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
