import {Direction} from './direction';

export class Menu {
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

  constructor(direction: Direction[], diff: string[]) {
    this._direction = direction;
    this._diff = diff;
  }
}
