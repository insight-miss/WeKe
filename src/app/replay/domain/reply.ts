import {Comment} from "../../course-catalog/catalog/domian/comment";
import {Replys} from "./replys";
import {MainTitle} from "./mainTitle";

export class Reply {

  comment: MainTitle;// 评论头
  replys: Replys[];


  constructor(comment: MainTitle, replys: Replys[]) {
    this.comment = comment;
    this.replys = replys;
  }
}
