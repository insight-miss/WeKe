import {Option} from './option';

export class Questions {
  private _type: number;
  private _questionNumber: number;
  private _problem: string;
  private _options: Option[];
  private _userAnswer: string[];


  constructor(type: number, questionNumber: number, problem: string, options: Option[], userAnswer: string[]) {
    this._type = type;
    this._questionNumber = questionNumber;
    this._problem = problem;
    this._options = options;
    this._userAnswer = userAnswer;
  }

  get type(): number {
    return this._type;
  }

  set type(value: number) {
    this._type = value;
  }

  get questionNumber(): number {
    return this._questionNumber;
  }

  set questionNumber(value: number) {
    this._questionNumber = value;
  }

  get problem(): string {
    return this._problem;
  }

  set problem(value: string) {
    this._problem = value;
  }

  get options(): Option[] {
    return this._options;
  }

  set options(value: Option[]) {
    this._options = value;
  }

  get userAnswer(): string[] {
    return this._userAnswer;
  }

  set userAnswer(value: string[]) {
    this._userAnswer = value;
  }
}
