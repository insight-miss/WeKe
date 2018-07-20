import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {VideoService} from './service/video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  class: string = 'win';
  chapter: string;
  url: string = 'http://static.videogular.com/assets/videos/videogular.mp4';
  content: string;
  constructor(private location: Location, private route: ActivatedRoute, private  videoService: VideoService) { }
  videoMsg: any;

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
  }

  // 获得视频信息和用户Id；
  getVideo(course: string, chapter: string, section: string): void{
   this.videoService.getVideo(course, chapter, section).subscribe(video => this.videoMsg=video);
  }


    goBack(){
    this.location.back();
  }

  ngOnInit() {
  }

}
