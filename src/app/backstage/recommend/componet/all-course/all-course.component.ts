import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {OrderMsg} from "../../../../user/domian/orderMsg";
import {AdCourse} from "../../domain/adCourse";
import {Ids} from "../../domain/ids";

@Component({
  selector: 'app-all-course',
  templateUrl: './all-course.component.html',
  styleUrls: ['./all-course.component.css']
})
export class AllCourseComponent implements OnInit {

  page: number = 1;
  size: number = 3;
  courses: Array<AdCourse>;
  constructor(private dialogRef: MatDialogRef<AllCourseComponent>, @Inject(MAT_DIALOG_DATA) public allCourses: Array<AdCourse>) {
    this.courses = allCourses.slice((this.page-1)*this.size, this.page*this.size);
  }

  onSave(index: number, id: number) {
    let ids = new Ids(index, id);
    console.log("index id"+ ids.index+"  "+ids.id);
    this.dialogRef.close(ids);
  }

  pageChange(page: number) {
    console.log("page "+this.page);
    this.courses = this.allCourses.slice((page-1)*this.size, page*this.size);
  }

  ngOnInit() {
  }

}
