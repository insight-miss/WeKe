import {Component, OnInit} from '@angular/core';
import {AdCourse} from "./domain/adCourse";
import {RecommendService} from "./service/recommend.service";
import {MatDialog} from "@angular/material";
import {AllCourseComponent} from "./componet/all-course/all-course.component";

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {

  adCourse: Array<AdCourse> = [new AdCourse(1,"courseName","https://img1.mukewang.com/szimg/5b5835a60001907e05400300.jpg","Java","好课","实战推荐")];
  allCourses: Array<AdCourse> = [new AdCourse(1,"courseName","https://img1.mukewang.com/szimg/5b5835a60001907e05400300.jpg","Java","好课","实战推荐")];;
  imgSrc : string;
  courseName: string;
  adId: number;// 实战推荐中所选中需要替换的课程的id
  allId: number;// 所选中的备选课程的id
  isVisible = false;

  constructor(private recommendService: RecommendService, private dialog: MatDialog) {}

  openDialog(id: number) {
    const dialogRef = this.dialog.open(AllCourseComponent, {
      data: this.allCourses
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("id alid "+id+"  "+result);
      this.allId = result;
      this.adId = id;
    });
  }

  // 更改广告栏目
  changeRecommend() {
    let ad = this.adCourse[this.adId];
    let all = this.allCourses[this.allId];
    ad.courseName = all.courseName;
    ad.imgSrc = all.imgSrc;
    ad.kind = all.kind;
    ad.info = all.info;
    this.recommendService.changeRecommend(ad);
  }

  showModal(src: string, courseName: string): void {
    this.imgSrc = src;
    this.courseName = courseName;
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }


  // 获得广告栏目的所有课程
  getRecommends() {
    this.recommendService.getRecommends('1').subscribe(result =>{
      this.adCourse = result;
    });
  }

  //获得所有课程
  getAllCourses() {
    this.recommendService.getRecommends('2').subscribe(result =>{
      this.allCourses = result;
    });
  }

  ngOnInit(): void {

  }

}
