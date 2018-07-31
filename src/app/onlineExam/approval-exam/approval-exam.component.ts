import { Component, OnInit } from '@angular/core';
import {ApprovalService} from "./service/approval.service";
import {NzMessageService} from "ng-zorro-antd";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-approval-exam',
  templateUrl: './approval-exam.component.html',
  styleUrls: ['./approval-exam.component.css']
})
export class ApprovalExamComponent implements OnInit {

  currentPos = 1;
  answerLen = 0;
  answerPanel = {
    active    : true,
    name      : '答案解析',
    disabled  : false
  };
  userAnswerPanel = {
    active    : true,
    name      : '他的答案',
    disabled  : false
  };
  constructor(private approvalService : ApprovalService,
              private activeRouter: ActivatedRoute,
              private router : Router) { }

  ngOnInit() {
    this.approvalService.testId = this.activeRouter.snapshot.params["id"];
    this.approvalService.getAnswerQuestion().subscribe(
      res => {
        if (res) {
          this.approvalService.answerQuestion = res;

          var i =1 ;
          for (let question of res) {
            this.getQuestionFlag(i,question.type);
            i++;
          }

          this.answerLen = this.questionFlag.length;
          // this.answerLen = 2;
          this.posFlag = this.questionFlag[0];
          // console.log("posFlag"+this.posFlag);
          // console.log(this.approvalService.answerQuestion);
        }
      }
    )
  }

  // 标记简答题
  questionFlag = new Array();
  getQuestionFlag(pos: number,type: number) {
    if (type == 3) {
      this.questionFlag.push(pos);
    }
  }

  // posFlag
  posFlag = 0;
  changIndex(index:number) {
    this.posFlag = this.questionFlag[index-1];
    console.log("flag:"+this,this.posFlag);
  }

  submitted() {
    this.approvalService.setAnswerQuestion().subscribe(
      res => {
        if (res) {
          // console.log(res);
          this.router.navigateByUrl("/approvalPage");
        }
      }
    );
    console.log(this.approvalService.answerQuestion);
  }
}
