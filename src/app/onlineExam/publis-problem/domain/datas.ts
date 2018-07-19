export class Datas {
  private _key: number;
  private _name: string;
  private _age: string;
  private _address: string;


  constructor(key: number, name: string, age: string, address: string) {
    this._key = key;
    this._name = name;
    this._age = age;
    this._address = address;
  }

  get key(): number {
    return this._key;
  }

  set key(value: number) {
    this._key = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age(): string {
    return this._age;
  }

  set age(value: string) {
    this._age = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }
}
