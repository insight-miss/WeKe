export class Course {
  url: string;// 改为图片url
  courseName: string;
  courseInfo: string;
  courseDiff: string;
  courseKind: string;
  courseId: number;


  constructor(url: string, courseName: string, courseInfo: string, courseDiff: string, courseKind: string,courseId: number) {
    this.url = url;
    this.courseName = courseName;
    this.courseInfo = courseInfo;
    this.courseDiff = courseDiff;
    this.courseKind = courseKind;
    this.courseId = courseId;
  }
}
