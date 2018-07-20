import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CatalogService} from './service/catalog.service';
import {Catalog} from './domian/catalog';
import {MatDialog} from '@angular/material';
import {PublishComponent} from '../../publish/publish.component';
import {WriteDemoComponent} from '../../write-demo/write-demo.component';
import {Comment} from './domian/comment';

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
  newComment: Comment;


  constructor(private route: ActivatedRoute,
              private catalogService: CatalogService,
              public dialog: MatDialog) { }

  private getParam(index: string): string{
    return this.route.snapshot.queryParams[index];
  }
  openDialog(kind: string): void {
    if (kind === '1'){
      const dialogRef = this.dialog.open(PublishComponent);//评论
      dialogRef.afterClosed().subscribe(result =>{
        console.log('ca '+result);
        this.newComment = new Comment('2','22','2018-01-02','photo',result,'丁丁鱼', null);
        this.catalogService.savaComment(this.newComment);
        this.getAllComments();
      });
    }else{
      const dialogRef = this.dialog.open(WriteDemoComponent);//提问
      dialogRef.afterClosed().subscribe(result =>{
        console.log('da '+result);
        this.newComment = new Comment('1','22','2018-01-02','photo',result.content,'丁丁鱼', result.title);
        this.catalogService.savaComment(this.newComment);
        this.getAllComments();
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
    this.catalogService.getAllComments().subscribe(comments => this.comments=comments);
  }
  ngOnInit() {
    this.getMsg();
    this.getCourseInfo();
    this.getAllComments();
  }

}
