export class Option {
  private _optionNumber: string;
  private _optionDetails: string;


  constructor(optionNumber: string, optionDetails: string) {
    this._optionNumber = optionNumber;
    this._optionDetails = optionDetails;
  }


  get optionNumber(): string {
    return this._optionNumber;
  }

  set optionNumber(value: string) {
    this._optionNumber = value;
  }

  get optionDetails(): string {
    return this._optionDetails;
  }

  set optionDetails(value: string) {
    this._optionDetails = value;
  }
}
