import {Exam} from "../../testExam/domain/exam";
import {Questions} from "../../examDetails/domain/questions";

export class ExamInfo {
  private _exam :Exam;
  private _questions: Array<Questions>;


  constructor(exam: Exam, questions: Array<Questions>) {
    this._exam = exam;
    this._questions = questions;
  }

  get exam(): Exam {
    return this._exam;
  }

  set exam(value: Exam) {
    this._exam = value;
  }

  get questions(): Array<Questions> {
    return this._questions;
  }

  set questions(value: Array<Questions>) {
    this._questions = value;
  }
}
