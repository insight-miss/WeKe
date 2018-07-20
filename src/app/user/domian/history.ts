export class History {
  get tool(): string {
    return this._tool;
  }

  set tool(value: string) {
    this._tool = value;
  }
  get ip(): string {
    return this._ip;
  }

  set ip(value: string) {
    this._ip = value;
  }
  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }
  get time(): string {
    return this._time;
  }

  set time(value: string) {
    this._time = value;
  }
  get kind(): string {
    return this._kind;
  }

  set kind(value: string) {
    this._kind = value;
  }
  private _kind: string;
  private _time: string;
  private _address: string;
  private _ip: string;
  private _tool: string;
  constructor(kind: string, time: string, address: string, ip: string, tool: string){
    this._kind = kind;
    this._time = time;
    this._address = address;
    this._ip = ip;
    this._tool = tool;
  }
}
