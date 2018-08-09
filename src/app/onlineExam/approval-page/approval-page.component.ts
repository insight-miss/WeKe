import { Component, OnInit } from '@angular/core';
import {ApprovalPageService} from "./service/approval-page.service";
import {UserExam} from "./domain/UserExam";
import {Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-approval-page',
  templateUrl: './approval-page.component.html',
  styleUrls: ['./approval-page.component.css']
})
export class ApprovalPageComponent implements OnInit {

  dataSet:Array<UserExam>=[];

  teacherExam : Array<UserExam>;

  constructor(private approvalPageService: ApprovalPageService,
              private router : Router,
              private message: NzMessageService) { }

  ngOnInit(): void {
    // localStorage.removeItem('token');
    this.approvalPageService.getUserExam().subscribe(
      res => {
        if (res) {
          console.log(res);
          this.totalIndexs = res.length;
          this.approvalPageService.userExams = res;
          this.teacherExam = res;
          var i=0;
          for (let userExam of this.approvalPageService.userExams) {
            i++;
            userExam.key = i;
          }
          this.dataSet = this.approvalPageService.userExams;
          console.log(this.dataSet);
        } else {
          this.message.create('error', '权限不够');
        }
      },
      error => {
        this.message.create('error', '权限不够');
      }
    )
  }

  addExam() {
    this.router.navigateByUrl("/publicProblem");
  }

  currentIndexs = 1;
  totalIndexs = 30;
}
