import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpParams} from "@angular/common/http";
import {retry} from "rxjs/operators";
import {Video} from "../domain/video";

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  url: string = 'http://10.0.0.31:8080/videoApi/getVideo';

  constructor(private http: HttpClient) { }

  getVideo(catalogName: string, chapterName: string): Observable<Video>{
    const params = new HttpParams().set('catalogName', catalogName).set('chapterName', chapterName);
    return this.http.get<Video>(this.url, {params}).pipe(
      retry(3)
    );
  }
}
