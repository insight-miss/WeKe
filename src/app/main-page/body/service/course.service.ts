import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Course} from '../../domain/course';
import {COURSES} from '../../mock/mock';
import {HttpClient} from "@angular/common/http";
import {retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  url: string = 'http://10.0.0.26:8083/page/course';

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url).pipe(
      retry(3)
    );
  }

  constructor(private http: HttpClient) {
  }
}
