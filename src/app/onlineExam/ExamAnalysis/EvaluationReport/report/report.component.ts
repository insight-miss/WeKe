import { Component, OnInit } from '@angular/core';
import {ReportService} from '../service/report.service';
import {ExamReport} from '../domain/ExamReport';

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
          {value: 1, name: '0分~60分'},
          {value: 2, name: '60分~70分'},
          {value: 3, name: '70分~80分'},
          {value: 4, name: '80~90分'},
          {value: 5, name: '90分~100分'}
        ]
      }
    ]
  };
  examReport: ExamReport;
  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.examReport = this.reportService.examReport;
  }

  init(chart) {
    // this.mInstance = chart;
    // this.chartOption.series[0].data = this.reportService.examReport.eCharts as any;
    // this.mInstance.setOption(this.chartOption);
  }
}
