
export class Comment {
  get userId(): string {
    return this._userId;
  }

  set userId(value: string) {
    this._userId = value;
  }
  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }
  get browse(): string {
    return this._browse;
  }

  set browse(value: string) {
    this._browse = value;
  }

  get comment(): string {
    return this._comment;
  }

  set comment(value: string) {
    this._comment = value;
  }

  get photo(): string {
    return this._photo;
  }

  set photo(value: string) {
    this._photo = value;
  }

  get time(): string {
    return this._time;
  }

  set time(value: string) {
    this._time = value;
  }

  get num(): string {
    return this._num;
  }

  set num(value: string) {
    this._num = value;
  }

  get kind(): string {
    return this._kind;
  }

  set kind(value: string) {
    this._kind = value;
  }

  private _kind: string;
  private _num: string;//回答数 点赞数
  private _time: string;
  private _photo: string;
  private _comment: string;// 评论（问题）
  private _browse: string;//浏览数
  private _title: string;
  private _userId: string;
  constructor(kind: string, num: string, time: string, photo: string, comment: string, browse: string, title:string, userId: string) {
    this._kind = kind;
    this._num = num;
    this._time = time;
    this._photo = photo;
    this._comment = comment;
    this._browse = browse;
    this._title = title;
    this._userId = userId;
  }
}
