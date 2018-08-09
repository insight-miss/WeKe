import { Component, OnInit } from '@angular/core';
import {Exam} from '../domain/exam';
import {TestService} from "../service/test.service";
import {DetailsService} from "../../examDetails/service/details.service";
import {Router} from "@angular/router";
import {ReportService} from "../../ExamAnalysis/EvaluationReport/service/report.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  information: Exam[];
  constructor(private testService : TestService,
              private detailsService: DetailsService,
              private rout: Router,
              private reportService:ReportService) { }

  ngOnInit() {
    console.log("test");
    this.testService.getTestInfo().subscribe(
      res => {
        if (res) {
          console.log(res);
          this.information = res;
        } else {
          console.log('没有权限');
        }

      } ,
      error => {
        console.log("error => 没有权限");
      }
    )
  }

  getExamInfo(id: number) {
    console.log("查看"+id);
    this.testService.getExamInfo(id).subscribe(
      res => {
        if (res) {
          this.detailsService.questions = res;
          this.rout.navigateByUrl("/details/"+id);
        }
      }
    );
  }

  getExamAnalysis(id: number) {
    this.testService.getExamAnalysis(id).subscribe(
      res => {
        if (res) {
          console.log(res);
          this.reportService.examReport = res;
          this.detailsService.testId = id;
          this.rout.navigateByUrl("/analysis");
        }
      }
    )
  }
}
