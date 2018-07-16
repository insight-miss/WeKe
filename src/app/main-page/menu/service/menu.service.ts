///<reference path="../../../../../node_modules/@angular/router/src/utils/collection.d.ts"/>
import { Injectable } from '@angular/core';
import {MenuList} from '../../domain/menuList';
import {TecDetail} from '../../domain/tecDetail';
import {Observable, of} from 'rxjs';
import {TEC1} from '../../mock/tecMock';
import {forEach} from '@angular/router/src/utils/collection';
import {stringDistance} from 'codelyzer/util/utils';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuList: Array<MenuList>;
  tec: Array<TecDetail> ;
  menu: MenuList;


  private getInfo(title: String): void {
    // Array.prototype.filter(function(item, index){})
    a: String
    for (const tec of TEC1) {
        if (tec.title === title) {
          this.tec.push(tec);
        }
      }
  }

  getMenuList(titles: String[]): Observable<Array<MenuList>> {
    for (const title of titles) {
        this.getInfo(title);
    }
    return of(this.menuList);
  }
  constructor() { }
}
