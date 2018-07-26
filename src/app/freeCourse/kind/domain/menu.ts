import {Direction} from './direction';
import {Course} from "../../../main-page/domain/course";

export class Menu {
  get course(): Course[] {
    return this._course;
  }

  set course(value: Course[]) {
    this._course = value;
  }
  get direction(): Direction[] {
    return this._direction;
  }

  set direction(value: Direction[]) {
    this._direction = value;
  }
  get diff(): string[] {
    return this._diff;
  }

  set diff(value: string[]) {
    this._diff = value;
  }

  private _direction: Direction[];
  private _diff: string[];//难度
  private _course: Course[];

  constructor(direction: Direction[], diff: string[], course: Course[]) {
    this._direction = direction;
    this._diff = diff;
    this._course = course;
  }
}
