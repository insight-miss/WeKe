export class Catalog {
  catalogName: string;
  chapters: string[];


  constructor(catalogName: string, chapters: string[]) {
    this.catalogName = catalogName;
    this.chapters = chapters;
  }
}
