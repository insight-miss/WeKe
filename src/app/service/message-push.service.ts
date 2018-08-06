import { Injectable } from '@angular/core';
import {MessageInfo} from "./MessageInfo";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MessagePushService {

  url = environment.baseUrl+'page/putMessage';

  url1 = environment.baseUrl + 'teacher/short';

  constructor(private http: HttpClient) { }

  getMessage(): Observable<MessageInfo> {
    return this.http.get<MessageInfo>(this.url).pipe();
  }

  getShort() {
    return this.http.get(this.url1).pipe();
  }
}
