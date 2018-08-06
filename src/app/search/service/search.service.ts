import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../domain/course";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url: string = 'http://10.0.0.31:8080/searchApi/course';

  constructor(private http: HttpClient) { }

  searchCourses(inputMsg: string, page: string): Observable<Array<Course>>{
    const params = new HttpParams()
      .set('inputMsg', inputMsg).set('page', page);
    return this.http.get<Array<Course>>(this.url, {params});
  }
}
