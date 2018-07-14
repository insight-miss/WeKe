import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestComponent} from './onlineExam/testExam/test/test.component';
import {DetailsComponent} from './onlineExam/examDetails/details/details.component';

const routes: Routes = [
  { path: 'login' , component: TestComponent } ,
  { path: 'details', component: DetailsComponent}
  // { path: 'exam/:id' , component: TestComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
