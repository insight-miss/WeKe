import { Injectable } from '@angular/core';
import {Questions} from "../../examDetails/domain/questions";
import {Option} from "../../examDetails/domain/option";
import {Exam} from "../../testExam/domain/exam";
import {ExamInfo} from "../../publis-problem/domain/ExamInfo";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable()
export class ProblemService {

  url = environment.baseUrl + 'exam/publish';

  problems: Array<Questions>=[] ;

  exam = new Exam(null,null,null,null,null,null,null);

  examInfo = new ExamInfo(null,null);

  constructor(private http:HttpClient) { }

  getProblems(): Array<Questions> {
    return this.problems;
  }

  getExam(): Exam {
    return this.exam;
  }

  publishProblem() {
    this.examInfo.exam = this.exam;
    this.examInfo.questions = this.problems;
    console.log(this.examInfo + " " + this.problems);

    return this.http.post(this.url,{
      "exam":{
        " id;": this.exam.id,
        "examTitle": this.exam.examTitle,
        "startTime": this.exam.startTime,
        "endTime": this.exam.endTime,
        "statues":this.exam.statues,
        "grade": this.exam.grade,
        "userId": this.exam.userId
      },
      "questions":this.problems
    }).pipe();
  }

}
