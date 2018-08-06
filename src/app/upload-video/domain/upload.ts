import {Info} from "./info";
import {Catalog} from "./catalog";

export class Upload {

  info: Info;
  catalog: Catalog[];


  constructor(info: Info, catalog: Catalog[]) {
    this.info = info;
    this.catalog = catalog;
  }
}
