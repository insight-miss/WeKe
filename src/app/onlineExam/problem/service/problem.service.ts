import { Injectable } from '@angular/core';
import {Questions} from "../../examDetails/domain/questions";
import {Option} from "../../examDetails/domain/option";

@Injectable()
export class ProblemService {
  problems: Array<Questions>=[] ;
  //   = [
  //   new Questions(1, 1, '以下操作中，数组比链表速度更快的是', [
  //     new Option('A', 'A:原地逆序'),
  //     new Option('B', 'B:原地逆序'),
  //     new Option('C', 'C:原地逆序')
  //   ], [] , ['A', 'B'] , 0)
  // ];
  constructor() { }

  getProblems(): Array<Questions> {
    return this.problems;
  }
}
