export class Exam {
  private _id: number;
  private _examTitle: string;
  private _startTime: string;
  private _endTime: string;
  private _statues: string;
  private _grade: string;
  private _userId: number;


  constructor(id: number, examTitle: string, startTime: string, endTime: string, statues: string, grade: string, userId: number) {
    this._id = id;
    this._examTitle = examTitle;
    this._startTime = startTime;
    this._endTime = endTime;
    this._statues = statues;
    this._grade = grade;
    this._userId = userId;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get examTitle(): string {
    return this._examTitle;
  }

  set examTitle(value: string) {
    this._examTitle = value;
  }

  get startTime(): string {
    return this._startTime;
  }

  set startTime(value: string) {
    this._startTime = value;
  }

  get endTime(): string {
    return this._endTime;
  }

  set endTime(value: string) {
    this._endTime = value;
  }

  get statues(): string {
    return this._statues;
  }

  set statues(value: string) {
    this._statues = value;
  }

  get grade(): string {
    return this._grade;
  }

  set grade(value: string) {
    this._grade = value;
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }
}
