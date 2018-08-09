import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {VideoService} from './service/video.service';
import {Video} from "./domain/video";

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
  constructor(private location: Location, private route: ActivatedRoute, private  videoService: VideoService) { }
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
    this.getPathMsg();
    this.getVideo();
  }

}
