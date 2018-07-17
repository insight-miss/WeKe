export class Direction {
  get kind(): string[] {
    return this._kind;
  }

  set kind(value: string[]) {
    this._kind = value;
  }
  get direction(): string {
    return this._direction;
  }

  set direction(value: string) {
    this._direction = value;
  }
  private _direction: string;
  private _kind: string[];
  constructor (direction: string, kind: string[]) {
    this._direction = direction;
    this._kind = kind;
  }
}
