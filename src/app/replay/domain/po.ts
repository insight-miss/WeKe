export  class Po {
  kind: string;
  id: string;// 被回答的id
  sb: string; // 被回答者名字
  replyer: string;// 回答者
  content: string;// 回答内容


  constructor(kind: string, id: string, replyer: string, content: string, sb: string) {
    this.kind = kind;
    this.id = id;
    this.replyer = replyer;
    this.content = content;
    this.sb = sb;
  }
}
