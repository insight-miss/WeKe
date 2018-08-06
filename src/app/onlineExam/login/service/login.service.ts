import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {retry} from "rxjs/operators";
import {Observable} from "rxjs/index";
import {environment} from "../../../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class LoginService {

  url = environment.baseUrl+'user/register';
  url1 = environment.baseUrl + 'login';
  url2 = environment.baseUrl + "user/sendCode";



  loginFlag = 'false';
  constructor(private http : HttpClient) { }

  registerUser(username: string,password : string,phone :string, code :string) {
    return this.http.post(this.url,{
     "username":username,
      "password":password,
      "phone": phone,
      "code": code
    },httpOptions).pipe(
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

  sendCode(phoneNumber : number) {
    const codeUrl = this.url2 + "?phone=" + phoneNumber;
    return this.http.get(codeUrl).pipe();
  }
}
