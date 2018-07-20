import { Injectable } from '@angular/core';
import {Person} from '../../msgInput/domain/person';
import {Observable, of} from 'rxjs';
import {History} from '../domian/history';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  person: Person = new Person('丁丁鱼', '学生', '张家界', '保密', '7788');
  history: History[] = [new History("账号登录", "2018/7/15", '张家界', '10.0.0.29', 'web'),new History("账号登录", "2018/8/16", '张家界', '10.0.0.29', 'web')];
  getPersonById(id: string): Observable<Person>{
    // 通过Id返回Person信息
    return of(this.person);
  }
  getHistoryById(id: string): Observable<History[]>{
    // 通过Id返回History信息
    return of(this.history);
  }

  savaPerson(nickname: string, job: string, address: string, sex: string, info: string){
    this.person = new Person(nickname, job, address, sex, info);
  }
  constructor() { }
}
