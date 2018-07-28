import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {retry} from "rxjs/operators";
import {Observable} from "rxjs/index";
import {environment} from "../../../../environments/environment";

@Injectable()
export class LoginService {

  url = environment.baseUrl+'user/register';
  url1 = environment.baseUrl + 'login';

  loginFlag = 'false';
  constructor(private http : HttpClient) { }

  registerUser(username: string,password : string) {
    return this.http.post(this.url,{
     "username":username,
      "password":password
    }).pipe(
      retry(3)
    )
  }

  loginUser(username: string,password : string) {
      return this.http.post(this.url1,{
        "username":username,
        "password":password
      },{observe: 'response',
        responseType: 'text'}).pipe();
  }
}
