import { Injectable } from '@angular/core';
import {ExamReport} from '../domain/ExamReport';

@Injectable()
export class ReportService {
  examReport = new ExamReport('摩拜2018校招客户端开发笔试卷', 90, 3, 4,
    50, 20, 20, null);
  constructor() { }
}
