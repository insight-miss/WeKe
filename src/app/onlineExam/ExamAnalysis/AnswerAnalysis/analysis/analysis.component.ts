import { Component, OnInit } from '@angular/core';
import {DetailsService} from '../../../examDetails/service/details.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  currentPos = 1;
  answerLen = 0;
  answerPanel = {
    active    : false,
    name      : '答案解析',
    disabled  : false
  };
  userAnswerPanel = {
    active    : false,
    name      : '我的答案',
    disabled  : false
  };
  constructor(private detailsService: DetailsService) { }

  ngOnInit() {
    this.answerLen = this.detailsService.questions.length;
  }
  changePos(pos: number) {
    console.log(pos);
  }
}
