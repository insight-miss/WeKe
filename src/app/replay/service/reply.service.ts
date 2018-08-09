import { Injectable } from '@angular/core';
import {Reply} from "../domain/reply";
import {Observable, of} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Po} from "../domain/po";

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  url: string = 'http://10.0.0.31:8080/replyApi/detail';
  url1 : string = 'http://10.0.0.31:8080/replyApi/saveReply';

  getReplys(commentId: string): Observable<Reply> {
    const params = new HttpParams()
      .set('commentId', commentId);
    return this.http.get<Reply>(this.url, {params});
  }

  saveReply(po: Po): Observable<any>{
     return this.http.post(this.url1,{
      "kind": po.kind,
      "id": po.id,
      "sb": po.sb,
      "content": po.content,
      "replyer": po.replyer
    });
  }

  constructor(private http: HttpClient) { }
}
