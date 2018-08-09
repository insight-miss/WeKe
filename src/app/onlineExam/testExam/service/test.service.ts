import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Answer} from '../domain/answer';
import {Observable} from 'rxjs/internal/Observable';
import {environment} from '../../../../environments/environment';
import {catchError} from 'rxjs/operators';
import {Exam} from "../domain/exam";
import {Questions} from "../../examDetails/domain/questions";
import {ExamReport} from "../../ExamAnalysis/EvaluationReport/domain/ExamReport";

@Injectable()
export class TestService {


  constructor(private http: HttpClient) { }

  getExamAnswer(id: number): Observable <Answer> {
    const heroesUrl = environment.baseUrl + 'answer/' + id;
    return this.http.get<Answer>(heroesUrl)
      .pipe();
  }

  /**
   * 获取题集列表
   * @returns {Observable<Array<any>>}
   */
  getTestInfo(): Observable<Array<any>> {
    const url = environment.baseUrl + "exam/allExam?userName="+localStorage.getItem('userName');
    console.log(url);
    return this.http.get<Array<any>>(url).pipe();
  }

  /**
   * 获取考试具体题目
   */
  getExamInfo(id:number): Observable<Array<Questions>> {
    const examInfoUrl = environment.baseUrl + "exam/examInfo?id="+id;
    return this.http.get<Array<Questions>>(examInfoUrl).pipe();
  }

  /**
   * 查看考试分析
   */
  getExamAnalysis(id: number): Observable<ExamReport> {
    console.log("id:"+id);
    const analysisUrl = environment.baseUrl + "exam/examAnalySis";
    return this.http.post<ExamReport>(analysisUrl,{
      'testId': id,
      'userName': localStorage.getItem('userName')
    }).pipe();
  }

}

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token")
    }
  )
};
