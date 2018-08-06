import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {environment} from "../../../../environments/environment";
import {UserExam} from "../../approval-page/domain/UserExam";
import {HttpClient} from "@angular/common/http";
import {ShortInfo} from "../domain/ShortInfo";

@Injectable({
  providedIn: 'root'
})
export class ClassicService {

  constructor(private http:HttpClient) { }

  getShortInfo(index : number ): Observable<ShortInfo> {
    const url = environment.baseUrl + 'teacher/short?index=' + index;
    return this.http.get<ShortInfo>(url).pipe();
  }
}
