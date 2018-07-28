import { Component, OnInit } from '@angular/core';
import {DetailsService} from '../service/details.service';
import {Questions} from "../domain/questions";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  sum: number;
  pos = 1;
  radioValue = '';
  inputValue: string;
  questionInfo : Array<Questions>;
  constructor(private detailsService: DetailsService) { }

  rangeArray = (start, end) => Array(end - start + 1).fill(0).map((v, i) => i + start);


  ngOnInit() {
    this.sum = this.detailsService.getQuestions().length;
  }
  getPos() {
    ++this.pos;
  }
  setPos(currentPos: number) {
    this.pos = currentPos;
  }
  // 选择题答案修改
  log(value: string[] , num: number): void {
    // this.detailsService.questions;
    console.log("value:"+value);
    let userAnswer = '';
    for (let str of value) {
      userAnswer+=str;
    }
    this.detailsService.setQuestions(userAnswer , num);
    console.log(value , num);
  }
  // 简答题答案修改
  setTextAreaAnswer(inputValue: string , num: number) {
    this.detailsService.getTextAreaAnswer(inputValue , num);
    // console.log(inputValue , num);
  }
  // 判断题答案修改
  setRadioAnswer(num: number) {
    console.log("num:"+num);
    this.detailsService.getTextAreaAnswer(this.radioValue , num);
  }
}
