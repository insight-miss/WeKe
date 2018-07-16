import { Injectable } from '@angular/core';
import {Questions} from '../domain/questions';

@Injectable()
export class DetailsService {
  questions: Questions[] = [{'type': 1, 'questionNumber': 1 , 'problem': '以下操作中，数组比链表速度更快的是',
   'options': [{optionDetails: 'A:原地逆序', optionNumber: 1}, {optionDetails: 'B:头部插入', optionNumber: 1}
     , {optionDetails: 'B:头部插入', optionNumber: 1}, {optionDetails: 'B:头部插入', optionNumber: 1}],
    'userAnswer': 'A'} ,
    {'type': 3, 'questionNumber': 2 , 'problem': '已知石头重量数组。将石头分为质量最接近的两组 ',
      'options': [],
      'userAnswer': 'A'}];
  constructor() { }

  getQuestions(): Questions[] {
    return this.questions;
  }
}
