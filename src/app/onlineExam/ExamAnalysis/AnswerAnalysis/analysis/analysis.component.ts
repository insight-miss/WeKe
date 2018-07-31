import { Component, OnInit } from '@angular/core';
import {DetailsService} from '../../../examDetails/service/details.service';
import {Questions} from "../../../examDetails/domain/questions";
import {Option} from "../../../examDetails/domain/option";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  currentPos = 1;
  answerLen = 0;
  answerPanel = {
    active    : true,
    name      : '答案解析',
    disabled  : false
  };
  userAnswerPanel = {
    active    : true,
    name      : '我的答案',
    disabled  : false
  };
  constructor(private detailsService: DetailsService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    let str = this.activeRoute.snapshot.pathFromRoot;
    let id = str.toString().substring(43,45);
    this.detailsService.testId = parseInt(id);
    this.detailsService.getAnalySisPage().subscribe(
      res => {
        if (res) {
          this.detailsService.questions = res;
          for (let question of this.detailsService.questions) {
           question.userAnswer = this.changeUserAnswer(question.userAnswer);
           for(let option of question.options) {
             option.optionNumber = this.changeOption(option.optionNumber);
           }
          }
          console.log(this.detailsService.questions);
          this.answerLen = this.detailsService.questions.length;
        }
      }
    );
  }

  changeUserAnswer(answer : string) : string {
    if (answer === '1') {
      return 'A';
    }
    if (answer === '2') {
      return 'B';
    }
    if (answer === '3') {
      return 'C';
    }
    if (answer === '4') {
      return 'D';
    }
    return answer;
  }

  changeOption(option : string) : string {
    if (option == '1') {
      return 'A';
    }
    if (option == '2') {
      return 'B';
    }
    if (option == '3') {
      return 'C';
    }
    if (option == '4') {
      return 'D';
    }
  }


  changePos(pos: number) {
    console.log(pos);
  }
}
