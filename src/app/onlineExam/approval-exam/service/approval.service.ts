import { Injectable } from '@angular/core';
import {Questions} from "../../examDetails/domain/questions";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ApprovalService {

  url = environment.baseUrl + 'exam/getQuestions';

  url1 = environment.baseUrl + 'exam/setQuestions';

  testId : number;
  userName: string;

  answerQuestion: Array<Questions>=[];

  constructor(private http: HttpClient) { }

  getAnswerQuestion():Observable<Array<Questions>> {
    return this.http.post<Array<Questions>>(this.url,{
      "testId": this.testId,
      "userName": this.userName
    }).pipe();
  }

  setAnswerQuestion() {
    return this.http.post<Array<Questions>>(this.url1,{
      "testId": this.testId,
      "userName": this.userName,
      "questions": this.answerQuestion
    }).pipe();
  }
}
