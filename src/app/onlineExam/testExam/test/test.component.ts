import { Component, OnInit } from '@angular/core';
import {Exam} from '../domain/exam';
import {TestService} from "../service/test.service";
import {DetailsService} from "../../examDetails/service/details.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  information: Exam[];
  constructor(private testService : TestService,
              private detailsService: DetailsService,
              private rout: Router) { }

  ngOnInit() {
    this.testService.getTestInfo().subscribe(
      res => {
        if (res) {
          this.information = res;
        }

      }
    )
  }

  getExamInfo(id: number) {
    console.log("查看"+id);
    this.testService.getExamInfo(id).subscribe(
      res => {
        if (res) {
          this.detailsService.questions = res;
          this.rout.navigateByUrl("/details");
        }
      }
    );
  }
}
