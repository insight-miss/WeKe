import {Component, OnInit} from '@angular/core';
import {CourseService} from '../body/service/course.service';
import {Router} from "@angular/router";
import {EmitService} from "../../route/emit.service";
import {LoginService} from "../../onlineExam/login/service/login.service";

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  inputMsg: string = '';

  constructor(private router: Router,
              public emitService: EmitService) {
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

  isView = false;

  ngOnInit() {
    this.emitService.eventEmit.subscribe((value: any) => {
      console.log('是否显示');
      if(value === "isView") {
        // 这里就可以调取接口，刷新userList列表数据
        this.isView = true;
      }
      if (value === 'isNotView') {
        this.isView = false;
      }

    });
  }

  login() {
    this.emitService.eventEmit.emit("login");
  }

  register() {
    this.emitService.eventEmit.emit("register");
  }

  getUserName(): string {
    // const name = localStorage.getItem("userName");
    // console.log("name="+name);
    return localStorage.getItem("token");
  }
}
