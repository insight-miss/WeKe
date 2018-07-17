import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from './onlineExam/testExam/test/test.component';
import {DetailsComponent} from './onlineExam/examDetails/details/details.component';
import {RankComponent} from './onlineExam/ExamRank/rank/rank.component';
import {KindComponent} from './freeCourse/kind/kind.component';
import {BodyComponent} from './main-page/body/body.component';

const routes: Routes = [
  {path: 'test', component: TestComponent},
  {path: 'list', component:KindComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'rank', component: RankComponent},
  {path: '', component: BodyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
