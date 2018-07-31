import { Component, OnInit } from '@angular/core';
import {ApprovalPageService} from "./service/approval-page.service";
import {UserExam} from "./domain/UserExam";
import {Router} from "@angular/router";

@Component({
  selector: 'app-approval-page',
  templateUrl: './approval-page.component.html',
  styleUrls: ['./approval-page.component.css']
})
export class ApprovalPageComponent implements OnInit {

  dataSet:Array<UserExam>=[];

  constructor(private approvalPageService: ApprovalPageService,
              private router : Router) { }

  ngOnInit(): void {
    this.approvalPageService.getUserExam().subscribe(
      res => {
        if (res) {
          console.log(res);
          this.approvalPageService.userExams = res;
          var i=0;
          for (let userExam of this.approvalPageService.userExams) {
            i++;
            userExam.key = i;
          }
          this.dataSet = this.approvalPageService.userExams;
          console.log(this.dataSet);
        }
      }
    )
  }

  addExam() {
    this.router.navigateByUrl("/publicProblem");
  }
}
