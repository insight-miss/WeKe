import {Injectable, OnInit} from '@angular/core';
import {Menu} from '../domain/menu';
import {Direction} from '../domain/direction';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KindService{
  direction: Direction[] = [new Direction('前沿技术', ['微服务', '区块链', '以太坊', '人工智能']), new Direction('前端开发', ['HTML/CSS', 'JavaScript', 'Vue.js', 'ReactJS'])];
  diff: string[] = ['入门', '初级', '中级', '高级'];
  menu: Menu = new Menu(this.direction, this.diff);

  constructor() {
  }

  getInfo(dire: string, kind: string, diff: string): Observable<Menu> {
    return of(this.menu);
  }

}
