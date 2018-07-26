export class LearnTime {
  get studyTime(): string {
    return this._studyTime;
  }

  set studyTime(value: string) {
    this._studyTime = value;
  }
  get mustKnow(): string {
    return this._mustKnow;
  }

  set mustKnow(value: string) {
    this._mustKnow = value;
  }
  get lastLearn(): string {
    return this._lastLearn;
  }

  set lastLearn(value: string) {
    this._lastLearn = value;
  }
  get studyPercent(): string {
    return this._studyPercent;
  }

  set studyPercent(value: string) {
    this._studyPercent = value;
  }
  private _studyPercent: string;// 学习进度
  private _lastLearn: string;// 上次学习章节
  private _mustKnow: string;// 课程须知
  private _studyTime: string;// 累计学习时间

  constructor(studyPercent: string, lastLearn: string, mustKnow: string, studyTime: string) {
    this._studyPercent = studyPercent;
    this._lastLearn = lastLearn;
    this._mustKnow = mustKnow;
    this._studyTime = studyTime;
  }
}
