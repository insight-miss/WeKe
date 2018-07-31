import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs/Observable";
import {Questions} from "../../examDetails/domain/questions";
import {HttpClient} from "@angular/common/http";
import {UserExam} from "../domain/UserExam";

@Injectable({
  providedIn: 'root'
})
export class ApprovalPageService {

  userExams : Array<UserExam>;

  constructor(private http: HttpClient) { }

  getUserExam():Observable<Array<UserExam>> {
    const url = environment.baseUrl + 'teacher/getUserExam?userName='+'6';
    return this.http.get<Array<UserExam>>(url).pipe();
  }

}
