import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestComponent} from './onlineExam/testExam/test/test.component';
import {DetailsComponent} from './onlineExam/examDetails/details/details.component';
import {RankComponent} from './onlineExam/ExamRank/rank/rank.component';
import {ExamAnalysisComponent} from './onlineExam/ExamAnalysis/exam-analysis/exam-analysis.component';
import {ReportComponent} from './onlineExam/ExamAnalysis/EvaluationReport/report/report.component';
import {AnalysisComponent} from './onlineExam/ExamAnalysis/AnswerAnalysis/analysis/analysis.component';
import {ProblemComponent} from "./onlineExam/problem/problem.component";
import {PublisProblemComponent} from "./onlineExam/publis-problem/publis-problem.component";
import {LoginComponent} from "./onlineExam/login/login.component";
import {KindComponent} from './freeCourse/kind/kind.component';
import {BodyComponent} from './main-page/body/body.component';
import {CatalogComponent} from './course-catalog/catalog/catalog.component';
import {VideoComponent} from './video/video.component';
import {UserComponent} from './user/user.component';
import {ApprovalExamComponent} from "./onlineExam/approval-exam/approval-exam.component";
import {ApprovalPageComponent} from "./onlineExam/approval-page/approval-page.component";
import {BackstageComponent} from "./backstage/backstage.component";
import {UserManagemetComponent} from "./backstage/user-managemet/user-managemet.component";
import {RecommendComponent} from "./backstage/recommend/recommend.component";

const routes: Routes = [
  { path: 'test' , component: TestComponent } ,
  { path: 'details/:id', component: DetailsComponent} ,
  { path: 'rank/:id' , component: RankComponent},
  {path: 'analysis/:id', component: ExamAnalysisComponent, children: [
      { path: '',   redirectTo: 'examExport', pathMatch: 'full' },
      {path: 'examExport', component: ReportComponent} ,
      {path: 'examAnalysis', component: AnalysisComponent}
    ]},
  {path: 'problem' , component: ProblemComponent},
  {path: 'publicProblem' , component:PublisProblemComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'list', component: KindComponent},
  {path: 'learn',  component: CatalogComponent},//目录页面
  {path: 'video', component: VideoComponent},
  {path: 'user', component:UserComponent},
  {path: '', component: BodyComponent},
  {path: 'approval/:id' , component: ApprovalExamComponent},
  {path: 'approvalPage' , component: ApprovalPageComponent},
  {path: 'backstage' , component: BackstageComponent, children : [
      {path: 'userManager', component: UserManagemetComponent},
      {path: 'recommend', component:RecommendComponent}
    ]}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
