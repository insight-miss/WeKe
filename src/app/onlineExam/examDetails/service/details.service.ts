import { Injectable } from '@angular/core';
import {Questions} from '../domain/questions';
import {Option} from '../domain/option';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {ReportService} from "../../ExamAnalysis/EvaluationReport/service/report.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DetailsService {

  url = environment.baseUrl + 'exam/submitExam';

  url2 = environment.baseUrl + 'exam/getQuestions';

  questions: Array<Questions> = [];

  testId : number;

  constructor(private http: HttpClient,
              private reportService: ReportService) { }

  getAnalySisPage(): Observable<Array<Questions> > {
    return this.http.post<Array<Questions>>(this.url2,{
      "testId": this.testId,
      "userName": '6'
    }).pipe();
  }

  getQuestions(): Array<Questions> {
    return this.questions;
  }
  // 选择题答案修改
  setQuestions(value: string , num: number) {
    for (const question of this.questions) {
      if (question.questionNumber === num) {
        question.userAnswer = value;
        break;
      }
    }
    console.log(this.questions);
  }

  // 填空题答案修改
  getTextAreaAnswer(inputValue: string , num: number) {
    for (const question of this.questions) {
      if (question.questionNumber === num) {
        question.userAnswer = inputValue;
        break;
      }
    }
    console.log(this.questions);
  }

  submitExamInfo(testId : number) {
    return this.http.post(this.url,{
      "testId": testId,
      "userName": '6',
      "questions": this.questions
    }).pipe();
  }
}
