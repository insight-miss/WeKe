import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestComponent} from './onlineExam/testExam/test/test.component';
import {DetailsComponent} from './onlineExam/examDetails/details/details.component';
import {RankComponent} from './onlineExam/ExamRank/rank/rank.component';
import {ExamAnalysisComponent} from './onlineExam/ExamAnalysis/exam-analysis/exam-analysis.component';
import {ReportComponent} from './onlineExam/ExamAnalysis/EvaluationReport/report/report.component';
import {AnalysisComponent} from './onlineExam/ExamAnalysis/AnswerAnalysis/analysis/analysis.component';

const routes: Routes = [
  { path: 'test' , component: TestComponent } ,
  { path: 'details', component: DetailsComponent} ,
  { path: 'rank' , component: RankComponent},
  {path: 'analysis', component: ExamAnalysisComponent, children: [
      {path: '', component: ReportComponent} ,
      {path: 'examAnalysis', component: AnalysisComponent}
    ]}
  // { path: 'exam/:id' , component: TestComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
