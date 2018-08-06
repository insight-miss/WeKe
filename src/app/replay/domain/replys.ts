import {Detail} from "./detail";

export class Replys {
  nickname: string;
  info: string;
  time: string;
  photo: string;
  like: string;// 点赞数
  replyId: string;// 回答replyId
  details: Detail[];


  constructor(nickname: string, info: string, time: string, photo: string, like: string, replyId: string, details: Detail[]) {
    this.nickname = nickname;
    this.info = info;
    this.time = time;
    this.photo = photo;
    this.like = like;
    this.replyId = replyId;
    this.details = details;
  }
}
