import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AdCourse} from "../domain/adCourse";
import {Msg} from "../../../user/componet/pay/service/msg";

@Injectable({
  providedIn: 'root'
})
export class RecommendService {

  url: string = '';
  getRecommends(kind: string): Observable<Array<AdCourse>> {
    return this.http.post<Array<AdCourse>>(this.url, {
      'kind': kind
    });
  }

  changeRecommend(ad: AdCourse) {
    this.http.post<Msg>(this.url, ad).subscribe();
  }

  constructor(private http: HttpClient) { }
}
