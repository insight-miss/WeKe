import {Section} from './section';

export class Catalog {
  get section(): Section[] {
    return this._section;
  }

  set section(value: Section[]) {
    this._section = value;
  }

  get info(): string {
    return this._info;
  }

  set info(value: string) {
    this._info = value;
  }

  private _info: string;// 课程简介
  private _section: Section[];// 课程章节

  constructor(info: string, section: Section[]) {
    this._info = info;
    this._section = section;
  }
}
