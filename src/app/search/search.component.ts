import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "./service/search.service";
import {Course} from "./domain/course";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, private searchService: SearchService) { }

  inputMsg: string;
  page: string;
  courses: Array<Course>;
  len: number;

  getParams(index: string): string {
    return this.route.snapshot.queryParams[index];
  }

  getAllParams() {
    this.inputMsg = this.getParams('inputMsg');
    this.page = this.getParams('page');
    console.log("search "+this.inputMsg+"  "+ this.page);
  }

  searchCourses() {
    this.searchService.searchCourses(this.inputMsg, this.page).subscribe(reslut => {
      this.courses = reslut;
      this.len = this.courses.length;
    });
  }


  ngOnInit() {
    this.getAllParams();
    this.searchCourses();
  }

}
