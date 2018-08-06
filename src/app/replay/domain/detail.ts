export class Detail {
  nickname: string;
  photo: string;
  info: string;
  time: string;
  sb: string;//被回复者


  constructor(nickname: string, photo: string, info: string,time:string, sb: string) {
    this.nickname = nickname;
    this.photo = photo;
    this.info = info;
    this.time = time;
    this.sb = sb;
  }
}
