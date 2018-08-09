import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {OrderMsg} from "../../../../user/domian/orderMsg";
import {AdCourse} from "../../domain/adCourse";

@Component({
  selector: 'app-all-course',
  templateUrl: './all-course.component.html',
  styleUrls: ['./all-course.component.css']
})
export class AllCourseComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AllCourseComponent>, @Inject(MAT_DIALOG_DATA) public allCourses: Array<AdCourse>) { }

  onSave(id: number) {
    this.dialogRef.close(id);
  }

  ngOnInit() {
  }

}
