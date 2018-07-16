import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Course} from '../../domain/course';
import {COURSES} from '../../mock/mock';

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
