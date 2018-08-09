import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {VideoService} from './service/video.service';
import {Video} from "./domain/video";
import {PublishComponent} from "../publish/publish.component";
import {Comment} from "../course-catalog/catalog/domian/comment";
import {MatDialog} from "@angular/material";
import {EmitService} from "../route/emit.service";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  class: string = 'win';
  catalog: string;
  chapter: string;
  url: string = 'https://weke-resoure.oss-cn-beijing.aliyuncs.com/230_14.%E6%8E%92%E5%BA%8F-%E5%90%8E%E7%AB%AF.mp4';
  content: string;
  constructor(private location: Location,
              private route: ActivatedRoute,
              private  videoService: VideoService,
              public emitService: EmitService) { }
  video: Video;

  onPlus(): void{
    if (this.class === 'win'){
      this.class = 'plus';
    } else {
      this.class = 'win';
    }
  }
  private getParam(index: string): string{
    return this.route.snapshot.queryParams[index];
  }

  private getPathMsg(){
    //调用getParam方法 获得path中的参数
    this.catalog = this.getParam('catalog');
    this.chapter = this.getParam('chapter');
  }

  // 获得视频信息和用户Id；
  getVideo(): void{
   this.videoService.getVideo(this.catalog, this.chapter).subscribe(video => {
     this.video=video;
     console.log(this.video.videoUrl);
     console.log("nickName "+this.video.nickname);
   });
  }


    goBack(){
    this.location.back();
  }

  ngOnInit() {
    this.emitService.eventEmit.emit("isView");
    this.getPathMsg();
    this.getVideo();
  }

  videoProblem = '';

  nzSpan = 23;

  problemClick() {
    if (this.nzSpan == 23) {
      this.nzSpan = 16;
    } else if (this.nzSpan == 16) {
      this.nzSpan = 23;
    }

  }

  conf: any = {
    extraPlugins: `clipboard,lineutils,lineheight,widget,dialog,codesnippet`,
    codeSnippet_theme: 'monokai_sublime',
    filebrowserImageUploadUrl: 'http://127.0.0.1:8080/exam/upload'
  };

  changeVideo(event): void {
    console.log(event);
  }

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  //评论内容
  videoComment = '';
}
