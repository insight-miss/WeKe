import {Component, OnInit} from '@angular/core';
import {CourseService} from '../body/service/course.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  inputMsg: string = '';

  constructor(private router: Router) {
  }

  enterSearch($event): void {
    // 摁下回车且输入不为空
    console.log(this.inputMsg.length);
    if (this.inputMsg.length > 0 && $event.code === 13) {
      this.jump();
    }
  }

  jump() {
    if (this.inputMsg.length > 0) {
      console.log("inputMsg "+this.inputMsg);
      this.router.navigate(['/search'], {
        queryParams: {
          'inputMsg': this.inputMsg,
          'page': '1'
        }
      });
    }
  }

  ngOnInit() {
  }

}
