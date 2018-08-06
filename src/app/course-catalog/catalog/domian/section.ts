export class Section {
  get info(): string {
    return this._info;
  }

  set info(value: string) {
    this._info = value;
  }
  get course(): string[] {
    return this._course;
  }

  set course(value: string[]) {
    this._course = value;
  }
  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }
  private _title: string;// 课程章节名
  private _course: string[];// 课程章节下的小节
  private _info: string;// 课程章节描述

  constructor(title: string, info: string,course: string[]){
    this._info = info;
    this._course = course;
    this._title = title;
  }
}
