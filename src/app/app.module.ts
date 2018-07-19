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
import { MenuComponent } from './main-page/menu/menu.component';
import { RankComponent } from './onlineExam/ExamRank/rank/rank.component';
import {DetailsService} from './onlineExam/examDetails/service/details.service';
import { KindComponent } from './freeCourse/kind/kind.component';
import { RainBowDirective } from './freeCourse/kind/rainbow/rain-bow.directive';
import { CatalogComponent } from './course-catalog/catalog/catalog.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import { ReportComponent } from './onlineExam/ExamAnalysis/EvaluationReport/report/report.component';
import { AnalysisComponent } from './onlineExam/ExamAnalysis/AnswerAnalysis/analysis/analysis.component';
import { ExamAnalysisComponent } from './onlineExam/ExamAnalysis/exam-analysis/exam-analysis.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {ReportService} from './onlineExam/ExamAnalysis/EvaluationReport/service/report.service';
import {CommentComponent} from './comment/comment.component';
import {PublishComponent} from './publish/publish.component';
import {MatButtonModule, MatDialogModule, MatInputModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DetailsComponent,
    HeadComponent,
    BodyComponent,
    HeadComponent,
    MenuComponent,
    RankComponent,
    KindComponent,
    RainBowDirective,
    CatalogComponent,
    ReportComponent,
    AnalysisComponent,
    ExamAnalysisComponent,
    PublishComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
    FormsModule,
    NgxEchartsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
  ],
  providers: [
    TestService,
    DetailsService,
    ReportService
  ],
  entryComponents:[
    PublishComponent,
    CommentComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
