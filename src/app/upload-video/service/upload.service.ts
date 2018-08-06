import { Injectable } from '@angular/core';
import {Catalog} from "../domain/catalog";
import {HttpClient} from "@angular/common/http";
import {Upload} from "../domain/upload";

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  catalog: Catalog[] = [new Catalog("章节名称",null)];
  url: string = "http://10.0.0.31:8080/uploadApi/saveChapter";

  saveCatalogs(upload: Upload): void {
    this.http.post(this.url, upload).subscribe();
  }

  constructor(private http: HttpClient) { }
}
