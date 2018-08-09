export class Photo {
  kind: string;
  file: HTMLInputElement;

  constructor(kind: string, file: HTMLInputElement) {
    this.kind = kind;
    this.file = file;
  }
}
