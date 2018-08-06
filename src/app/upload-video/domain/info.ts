export class Info {

  courseName: string;
  courseInfo: string;
  courseDiff: string;
  courseKind: string;
  courseLevel: string;


  constructor(courseName: string, courseInfo: string, courseDiff: string, courseKind: string, courseLevel: string) {
    this.courseName = courseName;
    this.courseInfo = courseInfo;
    this.courseDiff = courseDiff;
    this.courseKind = courseKind;
    this.courseLevel = courseLevel;
  }
}
