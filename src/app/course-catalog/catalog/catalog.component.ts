import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CatalogService} from './service/catalog.service';
import {Catalog} from './domian/catalog';
import {MatDialog} from '@angular/material';
import {PublishComponent} from '../../publish/publish.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  kind: string;
  courseId: string;
  catalog: Catalog;
  content: string;

  constructor(private route: ActivatedRoute,
              private catalogService: CatalogService,
              public dialog: MatDialog) { }

  private getParam(index: string): string{
    return this.route.snapshot.queryParams[index];
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(PublishComponent,{
      width:'400px',
    });
    dialogRef.afterClosed().subscribe(result =>{
      console.log('ca '+result);
      this.content = result;

    });
    console.log("短时的");
  }
  getMsg(): void {
    this.kind = this.getParam("kind");
    this.courseId = this.getParam('id');
    console.log(this.kind+"  "+this.courseId   );
  }
  getCourseInfo(): void {
    this.catalogService.getCourseMsg(this.kind, this.courseId).subscribe(catalog => this.catalog = catalog);
  }
  ngOnInit() {
    this.getMsg();
    this.getCourseInfo();
  }

}
