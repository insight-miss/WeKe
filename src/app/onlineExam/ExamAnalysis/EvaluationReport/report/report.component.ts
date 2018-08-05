import { Component, OnInit } from '@angular/core';
import {ReportService} from '../service/report.service';
import {ExamReport} from '../domain/ExamReport';
import {DetailsService} from "../../../examDetails/service/details.service";
import {TestService} from "../../../testExam/service/test.service";
import {ActivatedRoute} from "@angular/router";
import {Series} from "../domain/Series";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  mInstance: any;
 
  chartOption  = {
    title : {
      text: '考试分析',
      subtext: '实时战况',
      x:'center'
    },
    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['0~60分','70分','80分','90分','100分']
    },
    series : [
      {
        name: '访问来源',
        type: 'pie',
        radius : '55%',
        center: ['50%', '60%'],
        data:[
          {value:335, name:'0~60分'},
          {value:310, name:'70分'},
          {value:234, name:'80分'},
          {value:135, name:'90分'},
          {value:1548, name:'100分'}
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  testId : number;

  examReport: ExamReport;
  constructor(private reportService: ReportService,
              private testService: TestService,
              private detailsService : DetailsService,
              private activeRoute : ActivatedRoute) { }


  ngOnInit() {
    let str = this.activeRoute.snapshot.pathFromRoot;
    let id = str.toString().substring(43,45);
    this.testId = parseInt(id);

    this.testService.getExamAnalysis(parseInt(id)).subscribe(
      res => {
        if (res) {
          console.log(res);
          this.reportService.examReport = res;
          this.examReport = this.reportService.examReport;
          this.chartOption.series[0].data = this.examReport.eCharts as any;
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
