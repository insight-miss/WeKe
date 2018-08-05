import { Component, OnInit } from '@angular/core';
import {ClassicService} from "./service/classic.service";
import {ProblemService} from "../problem/service/problem.service";
import {ShortInfo} from "./domain/ShortInfo";
import {Questions} from "../examDetails/domain/questions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-classic-problem',
  templateUrl: './classic-problem.component.html',
  styleUrls: ['./classic-problem.component.css']
})
export class ClassicProblemComponent implements OnInit {

  shortInfo : ShortInfo;

  shortQuestions : Array<Questions>;

  constructor(private problemService : ProblemService,
              private classicService : ClassicService,
              private router : Router) { }

  ngOnInit() {
    this.classicService.getShortInfo(this.currentIndex).subscribe(
      res => {
        if (res) {
          console.log(res);
          this.shortInfo = res;
          this.totalIndex = this.shortInfo.shortNumber;
          this.shortQuestions = res.shortQuestion;
          console.log(this.shortInfo + " " + this.totalIndex);
        }
      }
    );
  }

  returnExam() {
    this.router.navigateByUrl("publicProblem");
  }

  currentIndex = 1;

  totalIndex = 500;

  changIndexs() {
    this.classicService.getShortInfo(this.currentIndex).subscribe(
      res => {
        if (res) {
          console.log(res);
          this.shortInfo = res;
          this.totalIndex = this.shortInfo.shortNumber;
          this.shortQuestions = res.shortQuestion;
          console.log(this.shortInfo + " " + this.totalIndex);
        }
      }
    );
  }

  isVisible = false;

  modelQuestion : Questions;

  showModal(question : Questions): void {
    this.modelQuestion = question;
    console.log(this.modelQuestion);
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.problemService.problems.push(this.modelQuestion);
    console.log(this.problemService);
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
