import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OnlineTestComponent} from './componet/online-test/online-test.component';

const routes: Routes = [
  { path: 'login' , component: OnlineTestComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
