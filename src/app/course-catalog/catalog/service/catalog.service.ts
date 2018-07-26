import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Catalog} from '../domian/catalog';
import {Section} from '../domian/section';
import {Comment} from '../domian/comment';
import {HttpClient, HttpParams} from "@angular/common/http";
import {retry} from "rxjs/operators";
import {LearnTime} from "../domian/learnTime";
import {CourseComment} from "../domian/courseComment";
import {Menu} from "../../../freeCourse/kind/domain/menu";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  url: string = 'http://10.0.0.26:8080/catalog/info';// 课程目录
  url2: string = 'http://10.0.0.26:8080/problemReview/info'; //评论 提问
  url3: string = 'http://10.0.0.26:8080/problemReview/insertProblem';// 发布问题
  url4: string = 'http://10.0.0.26:8080/problemReview/insertReview';// 发布评论


  getCourseMsg(kind: string, courseId: string): Observable<any>{
    const params = new HttpParams()
      .set('courseName', courseId);
    // 目录
    if (kind === '1'){
      return this.http.get<Catalog>(this.url, {params}).pipe(
        retry(3)
      );
    } else if (kind === '2'){
      return this.http.get<Catalog>(this.url, {params}).pipe(
        retry(3)
      );
    }
    return of();
  }
  getAllComments(courseId: string): Observable<CourseComment>{
    const params = new HttpParams()
      .set('courseName', courseId);
    return this.http.get<CourseComment>(this.url2, {params}).pipe(
      retry(3)
    );
  }
  savaComment(courseId: string, info: string) {
    console.log(courseId+"  "+info);
    // 保存评论
    this.http.post(this.url4, {
      "courseName": courseId,
      "info": info
    }).pipe(
      retry(3)
    ).subscribe();
  }
  savaProblem(courseId: string, info: string, title: string): void{ // 保存提问
    this.http.post(this.url3,{
      "courseId": courseId,
      "info": info,
      "title": title
    }).pipe(
      retry(3)
    ).subscribe();
  }

  constructor(private http: HttpClient) { }
}
