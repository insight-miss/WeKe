import {Echar} from './echar';

export class ExamReport {
  private _examName: string;
  private _sumGrade: number;
  private _correctNumber: number;
  private _totalNumber: number;
  private _choiceScore: number;
  private _blankScore: number;
  private _answerScore: number;
  private _eCharts: Echar[];

  constructor(examName: string, sumGrade: number, correctNumber: number, totalNumber: number
              , choiceScore: number, blankScore: number, answerScore: number, eCharts: Echar[]) {
    this._examName = examName;
    this._sumGrade = sumGrade;
    this._correctNumber = correctNumber;
    this._totalNumber = totalNumber;
    this._choiceScore = choiceScore;
    this._blankScore = blankScore;
    this._answerScore = answerScore;
    this._eCharts = eCharts;
  }


  get examName(): string {
    return this._examName;
  }

  set examName(value: string) {
    this._examName = value;
  }

  get sumGrade(): number {
    return this._sumGrade;
  }

  set sumGrade(value: number) {
    this._sumGrade = value;
  }

  get correctNumber(): number {
    return this._correctNumber;
  }

  set correctNumber(value: number) {
    this._correctNumber = value;
  }

  get totalNumber(): number {
    return this._totalNumber;
  }

  set totalNumber(value: number) {
    this._totalNumber = value;
  }

  get choiceScore(): number {
    return this._choiceScore;
  }

  set choiceScore(value: number) {
    this._choiceScore = value;
  }

  get blankScore(): number {
    return this._blankScore;
  }

  set blankScore(value: number) {
    this._blankScore = value;
  }

  get answerScore(): number {
    return this._answerScore;
  }

  set answerScore(value: number) {
    this._answerScore = value;
  }

  get eCharts(): Echar[] {
    return this._eCharts;
  }

  set eCharts(value: Echar[]) {
    this._eCharts = value;
  }
}
