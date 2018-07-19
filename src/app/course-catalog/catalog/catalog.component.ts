import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CatalogService} from './service/catalog.service';
import {Catalog} from './domian/catalog';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  kind: string;
  courseId: string;
  catalog: Catalog;

  constructor(private route: ActivatedRoute, private catalogService: CatalogService) { }

  private getParam(index: string): string{
    return this.route.snapshot.queryParams[index];
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
