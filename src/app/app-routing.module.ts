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
import {ClassicProblemComponent} from "./onlineExam/classic-problem/classic-problem.component";
import {LoginGuard} from "./Jwt/LoginGuard";
import {ReplayComponent} from "./replay/replay/replay.component";
import {UploadVideoComponent} from "./upload-video/upload-video.component";
import {SearchComponent} from "./search/search.component";
import {CanDeactivateGuardService} from "./video/service/can-deactivate-guard.service";
import {BindAccountComponent} from "./user/bind-account/bind-account.component";

const routes: Routes = [
  { path: 'test' , component: TestComponent , canActivate:[LoginGuard]} ,
  { path: 'details/:id', component: DetailsComponent , canActivate:[LoginGuard]} ,
  { path: 'rank/:id' , component: RankComponent , canActivate:[LoginGuard]},
  {path: 'analysis/:id', component: ExamAnalysisComponent,canActivate:[LoginGuard],
    children: [
      { path: '',   redirectTo: 'examExport', pathMatch: 'full' },
      {path: 'examExport', component: ReportComponent} ,
      {path: 'examAnalysis', component: AnalysisComponent}
    ]},
  {path: 'problem' , component: ProblemComponent , canActivate:[LoginGuard]},
  {path: 'publicProblem' , component:PublisProblemComponent , canActivate:[LoginGuard]},
  {path: 'login' , component: LoginComponent},
  {path: 'list', component: KindComponent},
  {path: 'learn',  component: CatalogComponent},//目录页面
  {path: 'video', component: VideoComponent ,canActivate:[LoginGuard] , canDeactivate:[CanDeactivateGuardService]},
  {path: 'user', component:UserComponent , canActivate:[LoginGuard]},
  {path: '', component: BodyComponent},
  {path: 'approval' , component: ApprovalExamComponent , canActivate:[LoginGuard]},
  {path: 'approvalPage' , component: ApprovalPageComponent , canActivate:[LoginGuard]},
  {path: 'classicProblem' , component: ClassicProblemComponent , canActivate:[LoginGuard]},
  {path: 'backstage' , component: BackstageComponent , canActivate:[LoginGuard]
    , children : [
      {path: 'userManager', component: UserManagemetComponent},
      {path: 'recommend', component:RecommendComponent}
    ]},
  {path: 'uploadVideo', component: UploadVideoComponent},
  {path:'search', component: SearchComponent},
  {path:'reply', component: ReplayComponent},
  {path: 'ad', component: RecommendComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  providers: [LoginGuard , CanDeactivateGuardService]
})
export class AppRoutingModule {}
