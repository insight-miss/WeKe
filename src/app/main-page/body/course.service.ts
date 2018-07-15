import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Course} from './course';
import {COURSES} from './mock';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  getCourses(): Observable<Course[]> {
    return of(COURSES);
  }

  constructor() {
  }
}
