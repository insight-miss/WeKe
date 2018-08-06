import {Injectable, OnInit} from '@angular/core';
import {MenuList} from '../../domain/menuList';
import {TecDetail} from '../../domain/tecDetail';
import {Observable, of} from 'rxjs';
import {TEC1} from '../../mock/tecMock';
import {HttpClient} from "@angular/common/http";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  url: string = 'http://10.0.0.26:8080/page/direction';

  getMenuList(): Observable<Array<MenuList>>{
     return this.http.get<Array<MenuList>>(this.url).pipe(
       retry(3)
     );
  }
  constructor(private http: HttpClient) { }

}
