import {Injectable} from '@angular/core';
import {Person} from '../../msgInput/domain/person';
import {Observable, of} from 'rxjs';
import {History} from '../domian/history';
import {HttpClient} from "@angular/common/http";
import {retry} from "rxjs/operators";
import {Menu} from "../../freeCourse/kind/domain/menu";
import {Photourl} from "../domian/photourl";
import {OrderMsg} from "../domian/orderMsg";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  url: string = 'http://10.0.0.31:8080/userApi/getUser';
  url2: string = 'http://10.0.0.31:8080/userApi/changeUser';
  url3: string = 'http://10.0.0.31:8080/upload/photo';
  url4: string = 'http://10.0.0.31:8080/payApi/tobePublisher';

  history: History[] = [new History("账号登录", "2018/7/15", '张家界', '10.0.0.29', 'web'), new History("账号登录", "2018/8/16", '张家界', '10.0.0.29', 'web')];

  getPersonById(): Observable<Person> {
    // 通过Id返回Person信息
    return this.http.get<Person>(this.url).pipe(
      retry(3)
    );
  }

  getHistoryById(): Observable<History[]> {
    // 通过Id返回History信息
    // return this.http.get<History[]>(this.url).pipe(
    //   retry(3)
    // );
    return of(this.history);
  }

  uploadPhoto(file: FormData): Observable<Photourl>{
    return this.http.post<Photourl>(this.url3,file);
  }

  savaPerson(person: Person) {
    this.http.post(this.url2, {
      "url": person.url,
      "nickname": person.nickname,
      "job": person.job,
      "address": person.address,
      "sex": person.sex,
      "info": person.info,
      "permission": person.permission
    }).pipe(
      retry(3)
    ).subscribe();
  }

  jungleOrderNo(userName: string): Observable<OrderMsg> {
    return this.http.post<OrderMsg>(this.url4,{
      'userName': userName
    });
  }

  constructor(private http: HttpClient) {
  }
}
