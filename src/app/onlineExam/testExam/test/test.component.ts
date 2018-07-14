import { Component, OnInit } from '@angular/core';
import {Exam} from '../domain/exam';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  information: Exam[] = [{
    id: 1 , examTitle: '2016级第3套Java程序设...', startTime: '2018-07-02 10:58', endTime: '2018-07-04 23:59', statues: '已完成' , grade: '120'}];
  constructor() { }

  ngOnInit() {
  }
}
