import {Injectable, OnInit} from '@angular/core';
import {Menu} from '../domain/menu';
import {Direction} from '../domain/direction';
import {Observable, of} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class KindService {
  url: string = 'http://10.0.0.26:8080/direction/info';
  direction: Direction[] = [new Direction('前沿技术', ['微服务', '区块链', '以太坊', '人工智能']), new Direction('前端开发', ['HTML/CSS', 'JavaScript', 'Vue.js', 'ReactJS'])];
  diff: string[] = ['入门', '初级', '中级', '高级'];
  menu: Menu = new Menu(this.direction, this.diff, null);

  constructor(private http: HttpClient) {
  }

  getInfo(dire: string, kind: string, diff: string): Observable<Menu> {
    return this.http.post<Menu>(this.url, {
      "dire": dire,
      "kind": kind,
      "diff": diff
    }).pipe(
      retry(3)
    );
  }

}
