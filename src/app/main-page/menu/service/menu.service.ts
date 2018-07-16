import {Injectable, OnInit} from '@angular/core';
import {MenuList} from '../../domain/menuList';
import {TecDetail} from '../../domain/tecDetail';
import {Observable, of} from 'rxjs';
import {TEC1} from '../../mock/tecMock';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuList: Array<MenuList> = new Array<MenuList>();

   private getInfo(title: String): Array<TecDetail> {
    let tec: TecDetail[] = [];
    for (const m of TEC1) {
        if (m.title === title) {
          let str = title;
          tec.push(m);
        }
     }
     return tec;
  }

  getMenuList(titles: String[]): Observable<Array<MenuList>> {
    for (const title of titles) {
        let menu: MenuList = new MenuList();
        menu.info = title;
        menu.tecList = this.getInfo(title);
        this.menuList.push(menu);
    }
    return of(this.menuList);
  }
  constructor() { }

}
