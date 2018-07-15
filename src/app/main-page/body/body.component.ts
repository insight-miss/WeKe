import { Component, OnInit } from '@angular/core';
import {CourseService} from './course.service';
import {Course} from './course';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  courses: Course[] = [];
  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }
  rangeArray = (start, end) => Array(end - start + 1).fill(0).map((v, i) => i + start);

  constructor(public courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
  }

}
