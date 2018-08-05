import { Injectable } from '@angular/core';
import {retry} from "rxjs/operators";
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserInfo} from "../domain/UserInfo";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserInfoService {

  userInfo : Array<UserInfo>;

  url = environment.baseUrl+'user/userInfo';

  url1 = environment.baseUrl+'user/serUser';

  constructor(private http : HttpClient) { }

  getUserInfo(): Observable<Array<UserInfo>> {
    return this.http.post<Array<UserInfo>>(this.url,null,httpOptions).pipe(
      retry(3)
    );
  }

  changeUserInfo(user : UserInfo) {
    return this.http.post(this.url1,{
      'userAdmin': user.userAdmin,
      'userName': user.userName
    },httpOptions).pipe( retry(3) );
  }
}
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token")
    }
  )
};
