export class MainTitle {

  commentId: string;
  nickname: string;
  title: string;
  content: string;
  time: string;
  num: string;
  browser: string;
  photo: string;


  constructor(commentId: string, nickname: string, title: string, content: string, time: string, num: string, browser: string, photo: string) {
    this.commentId = commentId;
    this.nickname = nickname;
    this.title = title;
    this.content = content;
    this.time = time;
    this.num = num;
    this.browser = browser;
    this.photo = photo;
  }
}
