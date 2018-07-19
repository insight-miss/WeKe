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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import { ReportComponent } from './onlineExam/ExamAnalysis/EvaluationReport/report/report.component';
import { AnalysisComponent } from './onlineExam/ExamAnalysis/AnswerAnalysis/analysis/analysis.component';
import { ExamAnalysisComponent } from './onlineExam/ExamAnalysis/exam-analysis/exam-analysis.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {ReportService} from './onlineExam/ExamAnalysis/EvaluationReport/service/report.service';

import {CKEditorModule} from 'ng2-ckeditor';
import { ArticleComponent } from './article/article.component';
import {SafeHtmlPipe} from "./article/SafeHtmlPipe";
import {HighlightModule , HighlightOptions} from "ngx-highlightjs";
import { ProblemComponent } from './onlineExam/problem/problem.component';
import {ProblemService} from "./onlineExam/problem/service/problem.service";
import { PublisProblemComponent } from './onlineExam/publis-problem/publis-problem.component';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LoginComponent } from './onlineExam/login/login.component';
registerLocaleData(zh);

const options: HighlightOptions = {
  theme: 'monokai_sublime',
  path: 'assets/ckeditor/plugins/codesnippet/lib/highlight/'
};
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
    ReportComponent,
    AnalysisComponent,
    ExamAnalysisComponent,
    ArticleComponent,
    SafeHtmlPipe,
    ProblemComponent,
    PublisProblemComponent,
    LoginComponent
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
    CKEditorModule,
    HighlightModule.forRoot(options)
  ],
  providers: [
    TestService,
    DetailsService,
    ReportService,
    ProblemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
