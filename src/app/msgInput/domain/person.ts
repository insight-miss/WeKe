export class Person {
  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
  get info(): string {
    return this._info;
  }

  set info(value: string) {
    this._info = value;
  }
  get sex(): string {
    return this._sex;
  }

  set sex(value: string) {
    this._sex = value;
  }
  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }
  get job(): string {
    return this._job;
  }

  set job(value: string) {
    this._job = value;
  }
  get nickname(): string {
    return this._nickname;
  }

  set nickname(value: string) {
    this._nickname = value;
  }
  private _url: string;// 头像链接
  private _nickname: string;
  private _job: string;
  private _address: string;
  private _sex: string;
  private _info: string;//个性签名

  constructor(url: string, nickname: string, job: string, address: string, sex: string, info: string){
    this._url = url;
    this._nickname = nickname;
    this._job = job;
    this._address = address;
    this._sex = sex;
    this._info = info;
  }
}
