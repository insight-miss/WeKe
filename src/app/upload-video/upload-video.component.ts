import {Component, OnInit} from '@angular/core';
import {NzMessageService} from "ng-zorro-antd";
import {Catalog} from "./domain/catalog";
import {UploadService} from "./service/upload.service";
import {Upload} from "./domain/upload";
import {Info} from "./domain/info";

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent implements OnInit {

  constructor(private msg: NzMessageService, private uploadService: UploadService) {
  }

  chapter: string[] = ["小节"];
  catalogs: Catalog[] = [new Catalog("章节目录", this.chapter)];
  info: Info;
  catalogName: string;
  i: number = 0;
  j: number = 0;

  kind: string = '1';

  content: string = '';
  courseName: string = '';
  courseKind: string = 'java';
  courseLevel: string = '1';
  courseDiff: string = '入门';


  isCollapsed = false;

  str: string = 'xx';
  u = {
    'catalogName': '',
    'chapterName': ''
  };

  cc() {
    console.log("xxx" + this.courseName + "  " + this.content);
  }

  decode(str: string): string {
    console.log(str);
    let code = '';
    const m = "\\u";
    for (let i = 0; i < str.length; i++) {
      code = code + (m + str.charCodeAt(i).toString(16));
    }
    return code;
  }


  // 更改小节名
  changeTitle(i: string, j: string, catalogName: string, kind: string): void {
    this.i = parseInt(i);
    this.j = parseInt(j);
    this.kind = kind;
    this.catalogName = catalogName;
    console.log("change  " + this.i + "  " + this.j);
    // 将章节名和小节名传给后台
    this.u.catalogName = this.decode(this.catalogName);
    this.u.chapterName = this.decode(this.catalogs[this.i].chapters[this.j]);
  }

  // 更改章节名
  changeHeader(i: string, kind: string) {
    console.log("i " + i);
    this.kind = kind;
    this.i = parseInt(i);
  }

  save(): void {
    if (this.content.length == 0 || this.courseName.length == 0 || this.courseDiff.length == 0 ||
      this.courseLevel.length == 0 || this.courseKind.length == 0) {
      this.msg.create('error', '请将信息填完整！！！');
      return;
    }
    this.info = new Info(this.courseName, this.content, this.courseDiff, this.courseKind, this.courseLevel);
    console.log("info "+this.info.courseName);
    let upload = new Upload(this.info, this.catalogs);
    this.uploadService.saveCatalogs(upload);
  }

  fileList = [];

  // 增加节点
  add(): void {
    if (this.kind === '1') {
      this.catalogs.push(new Catalog("章节目录", ["小节名称"]));
    } else {
      this.catalogs[this.i].chapters.push("小节名称");
    }
  }

  // 删除节点
  delete(): string {
    if (this.kind === '1' && this.catalogs.length > 1) {
      this.catalogs.splice(this.i, 1);
      return '1';
    } else if (this.kind === '2' && this.catalogs[this.i].chapters.length > 1) {
      this.catalogs[this.i].chapters.splice(this.j, 1);
      return '2';
    }
  }

  handleChange(info: any): void {
    const fileList = info.fileList;
    if (info.file.response) {
      info.file.url = info.file.response.url;
    }
    this.fileList = fileList.filter(item => {
      if (item.response) {
        return true;
      }
      console.log("b");
      return true;
    });
  }

  cancel(): void {
    this.msg.info('取消成功！');
  }

  confirm(): void {
    let info = '最后一个节点不能删除！！！';
    if (this.delete() === '1') {
      info = '删除成功！';
    }
    this.msg.info(info);
  }


  ngOnInit(): void {
  }

}
