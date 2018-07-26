import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpParams} from "@angular/common/http";
import {retry} from "rxjs/operators";
import {Video} from "../domain/video";

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  url: string = '';

  constructor(private http: HttpClient) { }
  getVideo(chapterId: string): Observable<Video>{
    const params = new HttpParams().set('courseName', chapterId);
    return this.http.get<Video>(this.url, {params}).pipe(
      retry(3)
    );
  }
}
