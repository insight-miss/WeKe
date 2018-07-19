import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Catalog} from '../domian/catalog';
import {Section} from '../domian/section';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  section: Section[] = [new Section('第1章 焦点图轮播特效之原理','有思路，问题就变得简单！',[' 1-1 原理介绍 (06:12)']), new Section('第2章 焦点图轮播之样式布局', '讲解实现焦点图轮播特效的CSS样式',[' 2-1 样式布局关键代码讲解 (02:57)','2-2 箭头切换 (08:43)'])];
  catalog: Catalog = new Catalog('简介：通过学习您可以理解图片轮播原理，还将讲解setTimeout()', this.section);

  getCourseMsg(kind: string, courseId: string): Observable<any>{
    // 目录
    if (kind === '1'){
      return of(this.catalog);
    } else if (kind === '2'){
      return of();
    }
    return of();
  }

  constructor() { }
}
