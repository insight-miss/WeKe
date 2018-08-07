import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProblemService} from "../problem/service/problem.service";
import {Datas} from "./domain/datas";
import * as getISOWeek from 'date-fns/get_iso_week';
import {en_US, NzI18nService, zh_CN} from "ng-zorro-antd";

@Component({
  selector: 'app-publis-problem',
  templateUrl: './publis-problem.component.html',
  styleUrls: ['./publis-problem.component.css']
})
export class PublisProblemComponent implements OnInit {

  i = 1;
  editCache = {};
  dataSet = [] ;

  addRow(): void {
    console.log("添加题目");
    this.rout.navigateByUrl("problem");
    this.updateEditCache();
  }

  deleteRow(i: string): void {
    const dataSet = this.dataSet.filter(d => d.key !== i);
    console.log(dataSet);
    const index = +i;
    this.problemService.problems.splice(index-1,1);
    console.log(this.problemService.problems);
    this.dataSet = dataSet;
  }

  startEdit(key: string): void {
    this.editCache[ key ].edit = true;
  }

  finishEdit(key: string): void {
    this.editCache[ key ].edit = false;
    this.dataSet.find(item => item.key === key).name = this.editCache[ key ].name;
  }

  updateEditCache(): void {
    this.dataSet.forEach(item => {
      if (!this.editCache[ item.key ]) {
        this.editCache[ item.key ] = {
          edit: false,
          name: item.name
        };
      }
    });
  }

  ngOnInit(): void {
    const problems = this.problemService.getProblems();
    let i =1;
    for (let problem of problems){
      let datas = new Datas(i,problem.problem,this.judgeType(problem.type),problem.grade.toString());
      this.dataSet.push(datas);
      i++;
    }
    this.updateEditCache();
  }

  constructor(private rout: Router,
              private problemService: ProblemService,
              private i18n: NzI18nService) {

  }
  judgeType(types: number) : string {
    if (types === 2 ) {
      return '单项选择题';
    } else if (types == 1){
      return '不定选择题';
    } else if (types == 4){
      return '判断题';
    } else {
      return '简单题';
    }
  }

  // 模态框
  isVisible = false;
  isOkLoading = false;
  sumGradeVaule : number;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    window.setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 2000);

    const problems = this.problemService.getProblems();
    this.sumGradeVaule = 0;

    for (let problem of problems){
      this.sumGradeVaule = parseInt(this.sumGradeVaule.toString()) + parseInt(problem.grade.toString());
    }
    console.log("grade="+this.sumGradeVaule);

    this.problemService.exam.examTitle = this.titleValue;
    this.problemService.exam.startTime = this.startTime;
    this.problemService.exam.endTime = this.endTime;
    this.problemService.exam.grade = this.sumGradeVaule+'';
    this.problemService.publishProblem().subscribe(
      res =>{
        if(res) {
          if (res.toString() === "true") {
             this.rout.navigateByUrl("test");
             this.problemService.problems = null;

          } else {
            alert("发表失败,请重新发表!!!");
          }
        }
      }
    );
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  date = null; // new Date();
  dateRange = []; // [ new Date(), addDays(new Date(), 3) ];
  isEnglish = false;
  titleValue = '';//题集名称
  startTime = '';
  endTime = '';


  onChange(result: Date): void {

    if (this.dateRange) {
      console.log('data:',this.dateRange);
    }
    if (result[0]) {
      this.startTime = result[0];
    }
    if (result[1]) {
      this.endTime = result[1];
    }
    console.log(this.startTime+" "+this.endTime);
  }

  getWeek(result: Date): void {
    console.log('week: ', getISOWeek(result));
  }

  changeLanguage(): void {
    this.i18n.setLocale(this.isEnglish ? zh_CN : en_US);
    this.isEnglish = !this.isEnglish;
  }
}
