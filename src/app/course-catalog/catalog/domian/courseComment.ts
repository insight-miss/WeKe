import {LearnTime} from "./learnTime";
import { Comment } from "./comment";

export class CourseComment {
  get learnTime(): LearnTime {
    return this._learnTime;
  }

  set learnTime(value: LearnTime) {
    this._learnTime = value;
  }
  get comments(): Comment[] {
    return this._comments;
  }

  set comments(value: Comment[]) {
    this._comments = value;
  }
  private _comments: Comment[];
  private _learnTime: LearnTime;

  constructor(comments: Comment[], learnTime: LearnTime) {
    this._comments = comments;
    this._learnTime = learnTime;
  }
}
