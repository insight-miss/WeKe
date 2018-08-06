import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CatalogService} from './service/catalog.service';
import {Catalog} from './domian/catalog';
import {MatDialog} from '@angular/material';
import {PublishComponent} from '../../publish/publish.component';
import {WriteDemoComponent} from '../../write-demo/write-demo.component';
import {Comment} from './domian/comment';
import {CourseComment} from "./domian/courseComment";
import {LearnTime} from "./domian/learnTime";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  kind: string;
  courseId: string;
  catalog: Catalog;
  comments: Comment[];
  courseComments: CourseComment;
  learnTime: LearnTime;
  newComment: Comment;
  flag: string = '0';


  constructor(private route: ActivatedRoute,
              private catalogService: CatalogService,
              public dialog: MatDialog) { }

  private getParam(index: string): string{
    return this.route.snapshot.queryParams[index];
  }

  changeKind(kind: string) {
    this.kind = kind;
  }

  openDialog(kind: string): void {
    if (kind === '1'){
      const dialogRef = this.dialog.open(PublishComponent);//评论
      dialogRef.afterClosed().subscribe(result =>{
        console.log('ca '+result);
        this.catalogService.savaComment(this.courseId, result);
        this.comments.push(new Comment('2','0','','',result,'用户名','','userid'));
      });
    }else{
      const dialogRef = this.dialog.open(WriteDemoComponent);//提问
      dialogRef.afterClosed().subscribe(result =>{
        console.log('da '+result.title+"  "+result.content);
        this.catalogService.savaProblem(this.courseId, result.content, result.title);
        this.comments.push(new Comment('1','0','','',result.content,'用户名',result.title,'userid'));
      });
    }
  }
  getMsg(): void {
    this.kind = this.getParam("kind");
    this.courseId = this.getParam('id');
    console.log(this.kind+"  "+this.courseId   );
  }
  getCourseInfo(): void {
    this.catalogService.getCourseMsg(this.kind, this.courseId).subscribe(catalog => this.catalog = catalog);
  }
  getAllComments(): void{
    this.catalogService.getAllComments(this.courseId).subscribe(courseComments => {
      this.flag = '0';
      this.courseComments=courseComments;
      this.comments = this.courseComments.comments;
      this.learnTime = this.courseComments.learnTime;
      this.flag = '1';
      console.log(this.courseComments.comments);
    });
  }
  ngOnInit() {
    this.getMsg();
    this.getCourseInfo();
    this.getAllComments();
  }

}
