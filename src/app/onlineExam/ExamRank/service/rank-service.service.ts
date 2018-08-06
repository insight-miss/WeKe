import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../../../environments/environment";
import {UserExam} from "../../approval-page/domain/UserExam";
import {Rankinfo} from "../domin/rankinfo";

@Injectable({
  providedIn: 'root'
})
export class RankServiceService {

  constructor(private http:HttpClient) { }

  getRank(testId : number):Observable<Array<Rankinfo>> {
    const url = environment.baseUrl + 'exam/rank?testId='+testId;
    return this.http.get<Array<Rankinfo>>(url).pipe();
  }
}
