import { Component, OnInit } from '@angular/core';
import {ReportService} from '../service/report.service';
import {ExamReport} from '../domain/ExamReport';
import {DetailsService} from "../../../examDetails/service/details.service";
import {TestService} from "../../../testExam/service/test.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  mInstance: any;

  chartOption = {
    series : [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        roseType: 'angle',
        data: [

        ]
      }
    ]
  };
  examReport: ExamReport;
  constructor(private reportService: ReportService,
              private testService: TestService,
              private detailsService : DetailsService,
              private activeRoute : ActivatedRoute) { }

  esValue = [
    {value: 1, name: "0~59分"},
    {value: 0, name: "60~69分"},
    {value: 0, name: "70~79分"},
    {value: 0, name: "80~89分"},
    {value: 0, name: "90分以上"}
    ];

  ngOnInit() {
    let str = this.activeRoute.snapshot.pathFromRoot;
    let id = str.toString().substring(43,45);
    this.testService.getExamAnalysis(parseInt(id)).subscribe(
      res => {
        if (res) {
          console.log(res);
          this.reportService.examReport = res;
          this.examReport = this.reportService.examReport;
          for (let echart of res.eCharts) {
            this.chartOption.series[0].data.push(echart);
          }
          this.detailsService.testId = parseInt(id);
        }
      }
    );
  }

  init(chart) {
    // this.mInstance = chart;
    // this.chartOption.series[0].data = this.reportService.examReport.eCharts as any;
    // this.mInstance.setOption(this.chartOption);
  }
}
